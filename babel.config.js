module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
        targets: {
          esmodules: true,
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
};
