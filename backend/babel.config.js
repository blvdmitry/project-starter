module.exports = {
  "presets": [
    "@babel/typescript",
    "@babel/env",
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    // ["@babel/plugin-transform-runtime", {
    //   corejs: false,
    //   helpers: false,
    //   regenerator: true,
    //   useESModules: true,
    // }],
    // ["module-resolver", {
    //   "root": ["./src"],
    //   "alias": {
    //     "cli": "./src/cli",
    //     "common": "./src/common",
    //     "lib": "./src/lib",
    //     "ui": "./src/ui",
    //   }
    // }],
  ]
};
