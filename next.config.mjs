/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // On envisagera ISR plus tard. Pour l'instant full SSG.
  experimental: {
    // Next 15 defaults conviennent.
  },
};

export default nextConfig;
