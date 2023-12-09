import HtmlElement from "./htmlElement.js";

const _items = new WeakMap([]);

function HtmlSelectElement(options) {
  _items.set(this, options || []);

  this.add = function (item) {
    _items.get(this).push(item);
  }

  this.remove = function (item) {
    const list = _items.get(this);
    const index = list.findIndex(e => e === item);
    if (index === -1) return;
    list.splice(index, 1);
  }

  this.render = function () {
    const list = _items.get(this);
    return `<select>${list.map(e => `\r\n  <option>${e}</option>`).join('')}\r\n</select>`;
  }

  Object.defineProperty(this, 'items', {
    get() {
      return _items.get(this);
    }
  })
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

export default HtmlSelectElement;
