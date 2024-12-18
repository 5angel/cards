import RNode from './rnode';

export enum Shape {
  CORE = 'core',
  BODY = 'body',
  SHELL = 'shell',
}

export default class RCard extends RNode {
  constructor(
    private _title: string = '',
    private _shape: Shape = Shape.CORE
  ) {
    super('div', 'card', document.querySelector('.container')!);
  }

  render() {
    return `
        <div class="card__wrap">
            <div class="card__title">${this._title}</div>
            <div class="card__shape shape shape_${this._shape}"></div>
        </div>
    `;
  }
}
