
module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      scripts: {
        src:[
          'scripts/shape-shifter.js',
          'scripts/drawing.js',
          'scripts/point.js',
          'scripts/color.js',
          'drawing.js',
          'scripts/ui.js',
          'scripts/dot.js',
          'scripts/shape-builder.js',
          'scripts/shape.js'
        ],
        dest: 'release/shape-shifter.js'
      }
    },

    watch: {
      scripts: {
        files: ['scripts/*.js'],
        tasks: ['clean:scripts', 'concat', 'jshint']
      }
    },

    clean: {
      scripts: ['release/*.js'],
      css: ['release/*.css']
    },

    jshint: {
      files: ['release/*.js'],
      options: {
        'globalstrict': true,
        'strict': true,
        'white': true,
        'indent': 2,
        'curly': true,
        'eqnull': true,
        'latedef': true,
        'newcap': true,
        'noarg': true,
        'eqeqeq': true,
        'immed': true,
        'undef': true,
        'unused': true,
        'browser': true
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('release', ['clean', 'concat', 'jshint']);

};
