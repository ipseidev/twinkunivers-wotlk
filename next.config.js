/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['twinkunivers.com', 'twinkunivers.s3.eu-west-3.amazonaws.com']
  },
  i18n: {
    locales: ['en', 'fr', 'es', 'de'],
    defaultLocale: 'fr'
  }
}

module.exports = nextConfig
