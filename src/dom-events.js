// Source: https://github.com/WebReflection/micro-env

window.HTMLElement || (window.HTMLElement = window.Element || window.Node || function(){});

var HTMLElement = window.HTMLElement;

HTMLElement.prototype.emit = function (t, a) {
  // this.ownerDocument is YAGNI and won't work with
  // document and window
  var e = document.createEvent('Event');
  e.initEvent(t, 1, 1);
  e.detail = a;
  this.dispatchEvent(e);
};

HTMLElement.prototype.on = function () {
  this.addEventListener.apply(this, arguments);
  return this;
};

HTMLElement.prototype.off = function () {
  this.removeEventListener.apply(this, arguments);
  return this;
};

HTMLElement.prototype.once = function (t, h, c) {
  var f = function(){
    this.off(t, f, !!c);
    h.apply(this, arguments);
  };
  return this.on(t, f, !!c);
};

(function(w, d, dp, p){
  w.on = d.on = dp.on = p.on;
  w.off = d.off = dp.off = p.off;
  w.emit = d.emit = dp.emit = p.emit;
}(window, window.document, window.DOMClass.prototype, HTMLElement.prototype));
