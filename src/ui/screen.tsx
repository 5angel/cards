import Controls from './controls';
import LocksUI from './locks';
import RoomUI from './room';
import { useModelStore } from '@/controllers/model';

export default function ScreenUI() {
  const { target, view } = useModelStore();

  return (
    <div className="container">
      <LocksUI />
      {view.map((room, index) => {
        if (room != null) {
          const config = room.valueOf();
          return <RoomUI {...config} index={index} />;
        }

        return null;
      })}
      <Controls doors={target.doors} />
    </div>
  );
}
