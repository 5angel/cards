import { create } from 'zustand';
import { IRoom, Resource, Way } from './types';
import Controller from './controller';

type GameModel = {
  ways: (boolean | null)[];
  rotation: number; // 0, 90, 180, 270 degrees
  player: {
    position: [number, number];
    sanity: number;
    pockets: Resource[];
  };
  hand: IRoom[];

  interact: React.MouseEventHandler<HTMLButtonElement>;
  draw: () => void;
  place: () => void;
  rotateLeft: () => void;
  rotateRight: () => void;
};

const controller = new Controller();

export const useModelStore = create<GameModel>((set, get) => ({
  ways: controller.getWays(),
  rotation: 0,
  player: {
    position: [0, 0],
    sanity: 100,
    pockets: [],
  },
  hand: [],

  interact: (event) => {
    const value = event.currentTarget.dataset['dir'] ?? '0';
    const dir = parseInt(value, 10);
    const state = get();

    if (state.ways[dir] == null) {
      return;
    }

    console.log('Allowed!');
  },

  draw: () => {},

  place: () => {},

  rotateLeft: () => {
    set((state) => ({
      rotation: (state.rotation - 90 + 360) % 360
    }));
  },

  rotateRight: () => {
    set((state) => ({
      rotation: (state.rotation + 90) % 360
    }));
  },
}));
