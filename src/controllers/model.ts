import { create } from 'zustand';
import Player from './player';
import Level from './level';
import Compass from '@/compass';
import Room from './room';

type Model = {
  view: (Room | null)[];
  target: Room;
  position: [number, number];
  action: (arrow: Compass) => void;
};

const level = Level.getInstance();
const player = Player.getInstance();

export const useModelStore = create<Model>((set) => {
  const position = player.where();
  const view = level.view(position);
  const target = level.at(position)!;

  return {
    view,
    target,
    position,
    action: (arrow: Compass) =>
      set((state) => {
        return state;
      }),
  };
});
