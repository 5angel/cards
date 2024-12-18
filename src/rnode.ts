interface MouseEventListener {
  (event: MouseEvent): void;
}

export default class RNode<T extends HTMLElement = HTMLDivElement> {
  protected element: T;

  constructor(
    private _tag: string = 'div',
    private _className: string = '',
    private _parent: Element = window.document.body
  ) {
    this.element = document.createElement(this._tag) as T;
    this.element.className = this._className;
  }

  get isMounted() {
    return this._parent.contains(this.element);
  }

  render() {
    return '';
  }

  update() {
    const html = this.render();
    this.element.innerHTML = html;
  }

  mount() {
    if (!this.isMounted) {
      this.update();
      this._parent.appendChild(this.element);
    }
  }

  unmount() {
    if (this.isMounted) {
      this._parent.removeChild(this.element);
    }
  }
}
