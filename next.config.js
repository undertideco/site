module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset',
    });

    config.resolve.fallback = {
      fs: false,
      path: require.resolve('path-browserify'),
    };

    return config;
  },
  experimental: {
    styledComponents: true,
  },

  swcMinify: true,
};
