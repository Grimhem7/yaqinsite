module.exports = {
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/login', // Redirect /admin to /login
      },
    ];
  },
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  reactStrictMode : false,
};
