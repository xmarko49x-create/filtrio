/**
 * Headers de sécurité HTTP appliqués à toutes les pages.
 * Score A+ sur securityheaders.com, signal de qualité SEO côté Google.
 *
 * - X-Frame-Options: DENY — anti-clickjacking (iframe externe impossible)
 * - X-Content-Type-Options: nosniff — empêche MIME-sniffing du navigateur
 * - Referrer-Policy: strict-origin-when-cross-origin — limite info referrer envoyée aux liens externes
 * - Permissions-Policy: désactive caméra/micro/géolocalisation (le site n'y accède pas)
 * - Strict-Transport-Security: HSTS 2 ans + includeSubDomains + preload (force HTTPS permanent)
 */
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // On envisagera ISR plus tard. Pour l'instant full SSG.
  experimental: {
    // Next 15 defaults conviennent.
  },
  async headers() {
    return [
      {
        // Toutes les routes (apex et sous-chemins)
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        // Ancienne version de l'observatoire (orpheline) consolidée
        // en 301 vers la page de référence, pour préserver le jus SEO.
        source: "/observatoire-prix-outils-ia-video",
        destination: "/observatoire-prix",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
