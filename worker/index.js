// Password gate for the We Promise site.
// Every request must carry HTTP basic auth matching the SITE_PASSWORD secret
// (any username works). Set the secret in Cloudflare; it is never stored here.
// If SITE_PASSWORD is not set, the site is locked rather than left open.

const REALM = 'We Promise (private)';

function unauthorized(message = 'Password required.') {
  return new Response(message, {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'Cache-Control': 'no-store',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

// Constant-time comparison so the password can't be guessed by timing.
async function safeEqual(a, b) {
  const enc = new TextEncoder();
  const [ha, hb] = await Promise.all([
    crypto.subtle.digest('SHA-256', enc.encode(a)),
    crypto.subtle.digest('SHA-256', enc.encode(b)),
  ]);
  return crypto.subtle.timingSafeEqual(ha, hb);
}

function passwordFrom(request) {
  const header = request.headers.get('Authorization') || '';
  const [scheme, encoded] = header.split(' ');
  if (!encoded || scheme.toLowerCase() !== 'basic') return null;
  try {
    const bytes = Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0));
    const decoded = new TextDecoder().decode(bytes);
    const i = decoded.indexOf(':');
    return i === -1 ? null : decoded.slice(i + 1);
  } catch {
    return null;
  }
}

export default {
  async fetch(request, env) {
    if (!env.SITE_PASSWORD) {
      return new Response('Site is locked: SITE_PASSWORD secret is not set.', {
        status: 503,
        headers: { 'Cache-Control': 'no-store' },
      });
    }
    const given = passwordFrom(request);
    if (given === null || !(await safeEqual(given, env.SITE_PASSWORD))) {
      return unauthorized();
    }
    const response = await env.ASSETS.fetch(request);
    // Keep protected pages out of shared caches and search engines.
    const out = new Response(response.body, response);
    out.headers.set('Cache-Control', 'private, no-store');
    out.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return out;
  },
};
