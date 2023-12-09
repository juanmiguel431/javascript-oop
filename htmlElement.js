
function HtmlElement() {
  this.click = function () {
    console.log('clicked');
  }
}

HtmlElement.prototype.focus = function () {
  console.log('focused');
}

export default HtmlElement;
