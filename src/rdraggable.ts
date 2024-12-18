import RNode from './rnode';

export default class RDraggable extends RNode {
  private _locked: boolean = false;
  private _dragging: boolean = false;

  constructor(
    tag: string = 'div',
    className: string = '',
    parent: Element = window.document.body
  ) {
    super(tag, className, parent);
  }

  mount() {
    super.mount();

    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;

    this.element.addEventListener('mousedown', (event: MouseEvent) => {
      if (!this._locked) {
        this._dragging = true;

        // Store the starting mouse position
        startX = event.clientX - currentX;
        startY = event.clientY - currentY;

        // Add a class for visual feedback (optional)
        this.element.classList.add('dragging');
      }
    });

    this.element.addEventListener('mousemove', (event: MouseEvent) => {});

    this.element.addEventListener('mouseup', (event: MouseEvent) => {
      this._dragging = false;
    });
  }

  get locked() {
    return this._locked;
  }

  get dragging() {
    return this._dragging;
  }

  lock() {
    this._locked = true;
  }

  unlock() {
    this._locked = false;
  }
}
