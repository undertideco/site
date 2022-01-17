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

    return config;
  },
  experimental: {
    styledComponents: true,
  },
};
