const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Page': './pages/index.js',
        },
        extraOptions: {
          automaticAsyncBoundary: true,
        },
        shared: {},
      })
    );

    return config;
  },
}

module.exports = nextConfig
