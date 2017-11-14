module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangleProperties: {regex: /^_/}
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: 'artifacts/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      ignore_warning: {
        options: {
          '-W083': true
        },
        src: ['jmespath.js', 'test/*.js', 'Gruntfile.js']
      }
    },
    eslint: {
      target: ['jmespath.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-eslint');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint', 'eslint']);

};
