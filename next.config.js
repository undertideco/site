module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset',
    });

    return config;
  },
  experimental: {
    styledComponents: true,
  },

  swcMinify: true,
};
