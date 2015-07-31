/*
 * grunt-swig-precompile
 * http://blog.yunjiagou.wang
 *
 * Copyright (c) 2015 FuGardenia
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/build']
    },

    // Configuration to be run (and then tested).
    swig_precompile: {
      options: {
        active: '',
        locals:  require('./options'),
        beautify: {
          indent_size: 2
        }
      },
      dev: {
        options: {
          force: false
        },
        expand: true,
        cwd: "test/template",
        src: "*.tpl",
        dest: "test/build"
      },
      build: {
        expand: true,
        cwd: "test/template",
        src: "*.tpl",
        dest: "test/build"
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'swig_precompile', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
