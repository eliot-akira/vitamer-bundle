# Vitamer bundle

This repo includes bundle variations for the [Vitamer](https://github.com/WebReflection/dom-class#what-is-vitamer-js-) library.

The idea is to gather all modules in one place, and make them available to include as needed, with require/browserify or script tag.

## Standard

[vitamer.js](build/vitamer.js)

~~~javascript
require('vitamer-bundle');
~~~

The standard bundle includes:

- [DOM4](https://github.com/WebReflection/dom4) - Modern DOM functionalities for every browser
- [document.registerElement](https://github.com/WebReflection/document-register-element)
- [ESClass](https://github.com/WebReflection/es-class) - ECMAScript 3 to 6 compatible Class definition
- [DOMClass](https://github.com/WebReflection/dom-class) - A lightweight, cross browser, simplification of WebComponents
- [Restyle](https://github.com/WebReflection/restyle) - CSS as JavaScript object

## DOMClass mixins

[dom-class-mixins.js](build/dom-class-mixins.js)

~~~javascript
require('vitamer-bundle/mixins');
~~~

Mixins include: *bindings* and *data*

## Query Result

[query-result.js](build/query-result.js) - exported as window.$

[query-result.node.js](build/query-result.node.js) - exported as module

~~~javascript
var $ = require('vitamer-bundle/$');
~~~

A tiny (1.44kB!) and versatile utility - simplify DOM queries as an array: filter, map, on, off..

See: [Rethinking the $](https://github.com/WebReflection/query-result)

## All

[vitamer-mixins-qr.js](build/vitamer-mixins-qr.js)

~~~javascript
require('vitamer-bundle/all');
~~~

The "all" bundle includes: the standard bundle, DOMClass mixins, and Query Result as global $

## Extra

**DOM Events**

~~~javascript
require('vitamer-bundle/events');
~~~

This is an elegant haiku from [micro-env](https://github.com/WebReflection/micro-env), a "tweet-sized enriched environment". It adds event shortcuts to HTML elements: emit, on, off, once. It's included here because I like it.

## Build all variations

~~~bash
npm install
npm start
~~~

## Example page

~~~bash
npm run example
~~~

This command starts a [tiny static file server](https://github.com/WebReflection/tiny-cdn) to show an example page.

## Install

For now, `npm install` this Github repo. Please note that this is not an official repo for Vitamer, just a fan page.

## Credit

All license, credit and respect goes to Mr [Andrea Giammarchi](https://github.com/WebReflection), who is the author of Vitamer and its modules.
