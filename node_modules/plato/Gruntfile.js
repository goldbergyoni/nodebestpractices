'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js', '!lib/assets/**/*.js']
      },
      test: {
        src: ['test/**/*.js','!test/fixtures/**/*.js']
      },
      assets: {
        src: ['lib/assets/scripts/*.js']
      }
    },
    uglify: {
      'assets' : {
        files : {
          'lib/assets/scripts/bundles/core-bundle.js' : [
            'lib/assets/scripts/vendor/jquery-1.8.3.min.js',
            'lib/assets/scripts/vendor/lodash.min.js',
            'lib/assets/scripts/vendor/raphael-min.js',
            'lib/assets/scripts/vendor/morris.min.js',
            'lib/assets/scripts/vendor/jquery.fittext.js',
            'lib/assets/scripts/vendor/bootstrap-tooltip.js',
            'lib/assets/scripts/vendor/bootstrap-popover.js'
          ],
          'lib/assets/scripts/bundles/codemirror.js' : [
            'lib/assets/scripts/vendor/codemirror/codemirror.js',
            'lib/assets/scripts/vendor/codemirror/javascript.js',
            'lib/assets/scripts/vendor/codemirror/util/searchcursor.js'
          ]
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      }
    },
    casper : {
      test: {
        files: {
          'reports/casper.xml': [
            'test/casper-overview.js',
            'test/casper-sortable-file-list.js'
          ],
        },
        options : {
          test: true,
          verbose: true,
          'fail-fast': true,
          'log-level': 'error',
          concise: true,
          parallel : false,
          concurrency : 2
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-casper');

  grunt.registerTask('runtest',function(){
    var done = this.async();

    grunt.util.spawn({
        cmd : './bin/plato',
        args : [
          '-q',
          '-dtmp',
          '-ttest report',
          'test/fixtures/a.js','test/fixtures/b.js','test/fixtures/c-es6.js','test/fixtures/d-es6.js','test/fixtures/empty.js'
        ]
      },
      function(err, result, code){
        console.log(result.stdout);
        console.log(result.stderr);
        if (err || code !== 0) {
          grunt.fatal('Running plato binary failed');
        }
        done();
      }
    );
  });

  grunt.registerTask('runbin',function(){
    var done = this.async();

    grunt.util.spawn({
        cmd : './bin/plato',
        args : [
          '-q',
          '-r',
          '-l.jshintrc',
          '-xvendor|bundles',
          '-dreports',
          '-tPlato report',
          'lib/'
        ]
      },
      function(err, result, code){
        console.log(result.stdout);
        if (err || code !== 0) {
          console.log(err);
          grunt.fatal('Running plato binary failed');
        }
        done();
      }
    );
  });

  grunt.registerTask('optimize', ['uglify']);
  // Default task.
  grunt.registerTask('test', ['jshint', 'nodeunit', 'runtest', 'runbin', 'casper']);
  grunt.registerTask('default', ['test']);

};
