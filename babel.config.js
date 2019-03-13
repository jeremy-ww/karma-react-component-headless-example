module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        exclude: [
          'es6.promise'
        ],
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ]
}
