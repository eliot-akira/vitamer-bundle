
var Test = DOMClass({
  constructor: function() {
    console.log('Constructing');
  }
});

DOMClass({
  name: 'code-input',
//  extends: Test,
  //extends: HTMLTextAreaElement,
  //template: ,
  constructor: function() {

    console.log('hiiiii');

    this.innerHTML = '<textarea />';
    var textarea = this.query('textarea');
    if (! textarea) return;
    textarea.on('keyup', function() {
      //codeInputClass.emit('hi');
      this.emit('updateContent', textarea.value);
    });
  }
});

DOMClass({
  name: 'result-view',
  constructor: function() {
    document.body.query('code-input').on('updateContent', function(e) {
      this.textContent = e.detail.split('').reverse().join('.');
    }.bind(this));
  }
});
