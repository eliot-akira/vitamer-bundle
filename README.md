# Vitamer bundle

This repo includes bundle variations for the [Vitamer](https://github.com/WebReflection/dom-class#what-is-vitamer-js-) library. The idea is to gather all modules in one place, and make each of them available to include as needed, with require/browserify or script tag.

## Core

[vitamer-core.js](build/vitamer-core.js)

~~~javascript
require('vitamer-bundle');
~~~

The core bundle includes:

- [DOM4](https://github.com/WebReflection/dom4) - Modern DOM functionalities for every browser
- [document.registerElement](https://github.com/WebReflection/document-register-element) - A stand-alone lightweight version of the W3C Custom Elements specification
- [ESClass](https://github.com/WebReflection/es-class) - ECMAScript 3 to 6 compatible Class definition
- [DOMClass](https://github.com/WebReflection/dom-class) - A cross-browser simplification of WebComponents

## Extensions

### DOMClass mixins

[dom-class-mixins.js](build/dom-class-mixins.js)

~~~javascript
require('vitamer-bundle/mixins');
~~~

Mixins include: *bindings* and *data*

### Query Result

[query-result.js](build/query-result.js) - exported as window.$

[query-result.node.js](build/query-result.node.js) - exported as module

~~~javascript
var query = require('vitamer-bundle/query');
~~~

A tiny (1.4K!) and versatile utility - simplify DOM queries as an array: filter, map, on, off..

See: [Rethinking the $](https://github.com/WebReflection/query-result)

### Restyle

[restyle.js](build/restyle.js)

~~~javascript
require('vitamer-bundle/restyle');
~~~

This extends DOMClass with [Restyle](https://github.com/WebReflection/restyle) features.

## Standard and All

**Standard bundle**

[vitamer.js](build/vitamer.js)

~~~javascript
require('vitamer-bundle/standard');
~~~

Core bundle + Restyle

**All bundle**

[vitamer-all.js](build/vitamer-all.js)

~~~javascript
require('vitamer-bundle/all');
~~~

Core bundle + Restyle, DOMClass mixins, and Query Result as global $

## Extra

**DOM Events**

~~~javascript
require('vitamer-bundle/events');
~~~

This is an elegant haiku from [micro-env](https://github.com/WebReflection/micro-env), a "tweet-sized enriched environment". It adds event shortcuts to HTML elements: emit, on, off, once. It's included here because I like it.

## Build

The following will build all variations.

~~~bash
npm install
npm start
~~~

Clean build folder

~~~bash
npm run clean
~~~

## Example

~~~bash
npm run demo
~~~

This command starts a [tiny static file server](https://github.com/WebReflection/tiny-cdn) to show a demo page.

## Install

For now, `npm install` this Github repo. Please note that this is not an official repo for Vitamer, just a fan page.

## Credit

All license, credit and respect goes to Mr [Andrea Giammarchi](https://github.com/WebReflection), who is the author of Vitamer and its modules.
