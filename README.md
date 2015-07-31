# grunt-swig-precompile

> precompile swig template to html page.

## dependencies
1. [swig](http://paularmstrong.github.io/swig/docs/api/)
2. [js-beautify](https://www.npmjs.org/package/js-beautify)

## Thanks 
[grunt-html-template](https://github.com/Allenice/grunt-html-template)

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-swig-precompile --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-swig-precompile');
```

## The "swig_precompile" task

### Overview
In your project's Gruntfile, add a section named `swig_precompile` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
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
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2015 FuGardenia. Licensed under the MIT license.
