module.exports = () => {
    return {
      files: [
        'services/**/*.js',
        'libraries/**/*.js',
        './*.js',
        './*.json',
        '!libraries/**/node_modules/**',
        '!**/node_modules/'
      ],
      tests: [
        'test/**/*.js'
      ],  
      debug: true,
      setup: function (w) {
        let mocha = w.testFramework;
        mocha.grep('cold');
      },
      env: {
        type: 'node',
        params: {
          env: 'NODE_ENV=development'
        }
      },
      workers: {
        recycle: false
      },
      testFramework: 'mocha'
    };
  };