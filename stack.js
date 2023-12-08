const _list = new WeakMap();

export default class Stack {

  constructor() {
    _list.set(this, []);
  }

  push(value) {
    _list.get(this).push(value);
  }

  pop() {
    const list = _list.get(this);
    if (list.length === 0) {
      throw new Error('The stack is empty.');
    }

    return list.pop();
  }

  peek() {
    const list = _list.get(this);
    if (list.length === 0) {
      throw new Error('The stack is empty.');
    }

    return list[list.length - 1];
  }

  get count() {
    return _list.get(this).length;
  }
}
