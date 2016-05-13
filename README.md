# Cartridge SVGs [![Build Status][travis-image]][travis-url]

> SVG expansion pack for [Cartridge](https://github.com/cartridge/cartridge)

To use this module, you will need cartridge-cli installed and have a cartridge project setup.

## Installation
```sh
npm install cartridge-svgs
```

```sh
npm uninstall cartridge-svgs
```

## Dependencies

This module adds the following to a project:

* Prevent pipe breaking caused by errors from gulp plugins using [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
* Create SVG sprites using [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprites)
* Allow node files to be prepended with [prepend-file](https://www.npmjs.com/package/prepend-file)

### Commit message standards [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
Try and adhere as closely as possible to the [Angular commit messages guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).

[Commitizen](https://github.com/commitizen/cz-cli) is a command line tool which can help with this:
```sh
npm install -g commitizen
```
Now, simply use `git cz` instead of `git commit` when committing.


[travis-url]: https://travis-ci.org/cartridge/base-module
[travis-image]: https://travis-ci.org/cartridge/base-module.svg?branch=master
