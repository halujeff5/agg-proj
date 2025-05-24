// babel.config.js
module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }], // For modern JS features
      ['@babel/preset-react', { runtime: 'automatic' }], // For JSX transformation
      // If you are using TypeScript:
      // '@babel/preset-typescript',
    ],
    // If you're specifically targeting older React versions or need the classic runtime for some reason,
    // you might omit { runtime: 'automatic' } or set it to 'classic'.
    // However, 'automatic' is recommended for React 17+.
  };