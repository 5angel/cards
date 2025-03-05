import Level from '@/controllers/level';
import Player from '@/controllers/player';

import Controls from './controls';
import RoomUI from './room';

const level = Level.getInstance();
const player = Player.getInstance();

export default function App() {
  const [x, y] = player.where();
  const view = level.view(x, y);

  return (
    <div className="container">
      {view.map((room, index) => {
        if (room != null) {
          return <RoomUI {...room} index={index} />;
        }

        return null;
      })}
      {/* <Controls /> */}
    </div>
  );
}
