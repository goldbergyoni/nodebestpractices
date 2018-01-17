module.exports = () => {
    return {
      files: [
        '**/services/examples/test-basics/orderService.js',
        '!libraries/**/node_modules/**',
        '!**/node_modules/'
      ],
      tests: [
        '**/services/examples/test-basics/test.orderService.unit.js'
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