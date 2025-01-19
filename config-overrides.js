const webpack = require('webpack');

module.exports = function override(config, env) {
  // Disable source maps in production
  if (env === 'production') {
    config.devtool = false;
  }

  // Add any additional webpack configuration here
  return config;
};
