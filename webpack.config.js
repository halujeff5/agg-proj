
const path = require('path');

module.exports = {
  //  ... your other Webpack configuration
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"), //  Install path-browserify: npm install path-browserify
      "path": false
    },
  },
};