// Karma configuration
// Generated on Wed Mar 13 2019 15:27:13 GMT+0800 (GMT+08:00)

if (process.env.CI) {
  process.env.CHROME_BIN = '/usr/bin/google-chrome'
}

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '**/__test__/*.test.tsx'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/__test__/*.test.tsx': ['webpack']
    },

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|ts|tsx)$/,
            // https://github.com/webpack/webpack/issues/6544#issuecomment-368023618
            exclude: /node_modules/,
            use: 'babel-loader'
          }
        ]
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          utils$: require('path').resolve(__dirname, './utils.ts')
        }
      },
      stats: 'errors-only'
    },


    webpackMiddleware: {
      stats: 'errors-only'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: process.env.CI ? ['ChromeHeadlessNoSandbox'] : ['Chrome'],


    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: process.env.CI,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
