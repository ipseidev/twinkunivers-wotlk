/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['twinkunivers.com']
  },
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'fr'
  }
}

module.exports = nextConfig
