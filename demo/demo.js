
DOMClass({
  name: 'code-input',
  constructor: function() {

    this.innerHTML = '<textarea />';

    var textarea = this.query('textarea');
    textarea.focus();
    textarea.on('keyup', function() {
      this.emit('updateContent', textarea.value);
    });
  }
});

DOMClass({
  name: 'result-view',
  constructor: function() {
    // Catch the event that bubbled up
    this.parentElement.on('updateContent', function(e) {
      this.textContent = e.detail.split('').reverse().join('.');
    }.bind(this));
  }
});
