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
    let result = `<select>`;

    list.map(e => {
      result += `\r\n  <option>${e}</option>`;
    });

    result += `\r\n</select>`;

    return result;
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
