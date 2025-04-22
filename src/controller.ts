import { Room, Resource } from './types';
import { Player } from './player';
import { initialDeck } from './deck';

export class GameController {
  private player: Player;
  private board: Record<string, [Room, number]> = {};
  private locks: Record<string, (0 | 1 | 2)[]> = {};
  private pool: Room[] = [...initialDeck];
  private hand: Room[] = [];

  constructor() {
    this.player = new Player();
  }

  isDoorLocked(direction: number): boolean {
    const [currentRoom, rotation] = this.board[this.player.where()];
    const adjustedDoors = currentRoom.doors.map(
      (door) => (door + rotation) % 4
    );

    if (!adjustedDoors.includes(direction)) {
      throw new Error('Invalid direction');
    }

    const [x, y] = this.calculateNextPosition(direction);
    const key = `${x}:${y}`;

    return this.locks[key]?.includes(direction as 0 | 1 | 2) ?? false;
  }

  removeLock(direction: number) {
    const [x, y] = this.calculateNextPosition(direction);
    const key = `${x}:${y}`;

    if (!this.locks[key]?.includes(direction as 0 | 1 | 2)) {
      throw new Error('No lock to remove');
    }

    this.player.lose('key');
    this.locks[key] = this.locks[key].filter((d) => d !== direction);
  }

  placeRoom(index: number, direction: number) {
    if (index < 0 || index >= this.hand.length) {
      throw new Error('Invalid room index');
    }

    const room = this.hand[index];
    const [x, y] = this.calculateNextPosition(direction);
    const key = `${x}:${y}`;

    if (this.board[key]) {
      throw new Error('Room already exists at this position');
    }

    const rotation = direction;
    this.board[key] = [room, rotation];
    this.hand.splice(index, 1);
    this.player.teleport([x, y]);
    this.player.changeSanity(-1);
  }

  drawRooms(count = 3): Room[] {
    this.hand = [];
    for (let i = 0; i < count; i++) {
      if (this.pool.length === 0) break;

      const randomIndex = Math.floor(Math.random() * this.pool.length);
      const room = this.pool.splice(randomIndex, 1)[0];
      this.hand.push(room);
    }
    return this.hand;
  }

  getAvailableDirections(): number[] {
    const [currentRoom, rotation] = this.board[this.player.where()];

    return currentRoom.doors.map((door) => (door + rotation) % 4);
  }

  private calculateNextPosition(direction: number): [number, number] {
    const [x, y] = this.player.position;
    return [
      [x, y - 1], // North
      [x + 1, y], // East
      [x, y + 1], // South
      [x - 1, y], // West
    ][direction] as [number, number];
  }
}
