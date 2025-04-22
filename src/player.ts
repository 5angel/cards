import { Resource } from './types';

export class Player {
  sanity = 100;
  position: [number, number] = [0, 0];
  inventory: Resource[] = [];

  take(...resources: Resource[]) {
    this.inventory = this.inventory.concat(resources);
  }

  lose(...resources: Resource[]) {
    const result = this.inventory.slice();
    resources.forEach((value) => {
      const index = result.indexOf(value);
      if (index !== -1) {
        result.splice(index, 1);
      }
    });
    this.inventory = result;
  }

  move(direction: 'N' | 'E' | 'S' | 'W') {
    const [x, y] = this.position;

    switch (direction) {
      case 'N':
        this.position = [x, y - 1];
        break;
      case 'E':
        this.position = [x + 1, y];
        break;
      case 'S':
        this.position = [x, y + 1];
        break;
      case 'W':
        this.position = [x - 1, y];
        break;
    }
  }

  teleport(next: [number, number]) {
    this.position = next;
  }

  changeSanity(amount: number) {
    this.sanity = Math.max(0, Math.min(100, this.sanity + amount));
  }

  where(): string {
    const [x, y] = this.position;
    return `${x}:${y}`;
  }
}
