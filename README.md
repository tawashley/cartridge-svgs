# Cartridge SVGs [![Build Status][travis-image]][travis-url]

> SVG expansion pack for [Cartridge](https://github.com/cartridge/cartridge)

To use this module, you will need cartridge-cli installed and have a cartridge project setup.

## Installation
```sh
npm install cartridge-svgs --save-dev
```

```sh
npm uninstall cartridge-svgs --save-dev
```

## Dependencies

This module adds the following to a project:

* Prevent pipe breaking caused by errors from gulp plugins using [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
* Create SVG sprites using [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite)
* Allow node files to be prepended with [prepend-file](https://www.npmjs.com/package/prepend-file)

## Config

This module uses many of the same options that are available in the gulp-svg-sprite plugin. The [documentation](https://github.com/jkphl/gulp-svg-sprite) for this plugin may provide some useful information on the usage and configuration of this module. 

Once installed, the config file `task.svgs.js` is created and stored in the _config directory in the root of your cartridge project. Use this file to alter the config of the module.

# Default config options

```
var taskConfig = {
		src: projectConfig.paths.src.svgs + '*.svg', // Source of SVGs
		dest: projectConfig.paths.dest.svgs + '/_objects/_objects', // Output directory for SVGs

		mode: {
        	css: { // Activate the «css» mode
            	dest: '_source/styles/_objects', // Output of SVG sprite CSS file
            	render: {
                	scss: true, // Activate SCSS output
            	},
            	example: false // Deactivate example HTML file
        	},

        	// Deactivated output modes
        	view: false,
        	defs: false,
        	symbol: false,
        	stack: false
    	},
	};
```

### Commit message standards [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
Try and adhere as closely as possible to the [Angular commit messages guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).

[Commitizen](https://github.com/commitizen/cz-cli) is a command line tool which can help with this:
```sh
npm install -g commitizen
```
Now, simply use `git cz` instead of `git commit` when committing.


[travis-url]: https://travis-ci.org/cartridge/base-module
[travis-image]: https://travis-ci.org/cartridge/base-module.svg?branch=master
