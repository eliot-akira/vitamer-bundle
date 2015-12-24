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

(function(w, p, d){
  d = w.document;
  d.on = w.on = p.on;
  d.off = w.off = p.off;
  d.emit = w.emit = p.emit;
}(window, HTMLElement.prototype));
