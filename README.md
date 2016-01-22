# Bijoo Start

Bijoo Start is a Starter Kit providing basic set up for building Fresh and Cool websites made with [Grunt](http://gruntjs.com/), [PostCSS](https://github.com/postcss/postcss), [RequireJS](http://requirejs.org/), [BEM](https://en.bem.info/) and our best practices.

## Features

* A Gruntfile with all needed tasks (concat, ulgify, imagemin, etc.) for development and production.
* A RequireJS set up to load JS modules and libraries asynchronously.
* Modular structure for CSS and JS files.
* PostCSS to extend CSS possibilities (import, autoprefix, vars, etc.).
* Last [jQuery 2](https://jquery.com/download/) version.
* Eric Meyer's [CSS reset](http://meyerweb.com/eric/tools/css/reset/).
* Basic print CSS.
* Source maps for CSS and JS files.

## Getting started

* Install [NodeJS](http://nodejs.org/download/)
* Install [Grunt](https://github.com/gruntjs/grunt)
```shell
npm install -g grunt-cli
```
* Install the npm dependencies
```shellss
cd path/to/project
npm install
```
* Launch default Grunt task
```shell
grunt
```

## Grunt Tasks

* GRUNT : default task to clean, postCSS, concat, copy, imagemin with source maps.
```shellss
grunt
```
* GRUNT LINT : to lint CSS and JS files.
```shellss
grunt lint
```
* GRUNT PRDO : to clean, postCSS, uglify; concat, critical CSS, copy and images optimization.
```shellss
grunt prod
```

## BEM

Bijoostrap is based on [BEM](https://en.bem.info/method/) (Block, Element, Modifier) but it adds a specific child block declaration.

To specify a child block, add an underscore caracter "_" followed by one of the next uppercase letter :

* H pour Header
* C pour Content
* M pour Main
* I pour inner
* F pour Footer

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
