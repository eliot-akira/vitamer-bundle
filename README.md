## Vitamer bundle

This repo includes bundle variations for the [Vitamer](https://github.com/WebReflection/dom-class#what-is-vitamer-js-) library.

#### Purpose

The idea is to gather all modules in one place, and make them available to include as needed, with require/browserify, or script tag.

---

### Standard

~~~javascript
require('vitamer-bundle');
~~~

The standard bundle includes: [DOM4](https://github.com/WebReflection/dom4), [Document Register Element](https://github.com/WebReflection/document-register-element), [ESClass](https://github.com/WebReflection/es-class), [DOMClass](https://github.com/WebReflection/dom-class), [Restyle](https://github.com/WebReflection/restyle)

### DOMClass mixins

~~~javascript
require('vitamer-bundle/mixins');
~~~

Mixins include: *bindings* and *data*

### Query Result

~~~javascript
var $ = require('vitamer-bundle/$');
~~~

[Rethinking the $](https://github.com/WebReflection/query-result) - a tiny (1.44kB!) and versatile utility - simplify DOM queries as an array: filter, map, on, off..

### All

~~~javascript
require('vitamer-bundle/all');
~~~

The "all" bundle includes: the standard bundle, DOMClass mixins, and Query Result as global $.

---

### Extra

**DOM Events**

~~~javascript
var $ = require('vitamer-bundle/events');
~~~

This is an elegant haiku from [micro-env](https://github.com/WebReflection/micro-env), a "tweet-sized enriched environment". It adds event shortcuts to HTML elements: emit, on, off, once. It's included here because I like it.

---

### Build all variations

~~~bash
npm start
~~~

### Example page

~~~bash
npm example
~~~

This command starts a [tiny static file server](https://github.com/WebReflection/tiny-cdn) to show an example page.

---

### Credit

All license, credit and respect goes to Mr [Andrea Giammarchi](https://github.com/WebReflection), who is the author of Vitamer and its modules.
