module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    config.module.rules.push({
      test: /\.mdx?$/,
      use: 'raw-loader',
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
