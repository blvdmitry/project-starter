module.exports = {
  plugins: {
    'postcss-import': {
      path: ['./src/styles/']
    },
    'postcss-apply': {},
    'postcss-preset-env': { stage: 0, preserve: false },
    'postcss-color-function': {},
  }
};
