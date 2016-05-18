# Bijoo Start

Bijoo Start is a Starter Kit providing basic set up for building Fresh and Cool websites made with pure NPM CLI, [PostCSS](https://github.com/postcss/postcss), ES6 with [Babel](https://babeljs.io/) bundled with [Browserify](http://browserify.org/), [BEM](https://en.bem.info/) and our best practices.

## Features

* All needed tasks are managed by NPM (concat, ulgify, imagemin, etc.) for development and production.
* ES6 / ECMA2015.
* Modular structure for CSS and JS files.
* PostCSS to extend CSS possibilities (import, autoprefix, vars, etc.).
* Last [jQuery 2](https://jquery.com/download/) version.
* Eric Meyer's [CSS reset](http://meyerweb.com/eric/tools/css/reset/).
* Basic print CSS.
* Source maps for CSS and JS files.

### Special features for this version
* Browsersync for localhost/proxy server and sync-livereload on multiple device
* Karma/Jasmine Unit test and fixture

## Getting started

* Install [NodeJS](http://nodejs.org/download/)
* You may need [Python](https://www.python.org/downloads/)
* (Optional) Install [PhantomJS](http://phantomjs.org/download.html)
Run installer.exe
* Install the npm dependencies
```shellss
cd path/to/project
npm install
```
* For the first install : launch default NPM task and run Browsersync local server
```shell
npm run build && npm run server
```

## NPM Cli Tasks

* NPM : default task to clean, postCSS, concat, copy, imagemin with source maps.
```shellss
npm run build
```
* Browsersync + livereload
```shellss
npm run server
```
* NPM LINT : to lint CSS and JS files.
```shellss
npm run lint
```
* NPM Test : with Karma and Jasmine.
```shellss
npm run test
```
* NPM en prod
```shellss
npm run prod
```

## BEM

Bijoostrap is based on [BEM](https://en.bem.info/method/) (Block, Element, Modifier) but it adds a specific child block declaration.

To specify a child block, add an underscore caracter "_" followed by one of the next uppercase letter :

* H for Header
* C for Content
* M for Main
* I for inner
* F for Footer

Here is the naming convention :

BLOCK(parent)_BLOCK(enfant)__ELEMENT--MODIFIER

Example :

    <footer class="mainFooter">
        <div class="mainFooter_H">
            <h1 class="mainFooter_H__title "></h1>
            <h1 class="mainFooter_H__subtitle"></h1>
        </div>
    
        <div class="mainFooter_C">
            <h1 class="mainFooter_C__title "></h1>
            <h1 class="mainFooter_C__subtitle"></h1>
            <h1 class="mainFooter_C__content"></h1>
        </div>
    
        <div class="mainFooter_F">
            <h1 class="mainFooter_F__title "></h1>
            <h1 class="mainFooter_F__subtitle"></h1>
        </div>
    </footer>

## Creators

**Balix** and **ethyde**

## Contributors

**Balix** and **ethyde**

## Copyright and license

Code and documentation by [Balix](https://github.com/balix) and [Ethyde](https://github.com/Ethyde). Code released under [the MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).

## ENJOY !

-![alt text](http://i.giphy.com/3WY8qMF9l3ldK.gif "Enjoy !")
