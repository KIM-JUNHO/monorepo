const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  env: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },
  images: {
    domains: ['localhost'],
  },
  webpack: (config) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    return config;
  },
};
