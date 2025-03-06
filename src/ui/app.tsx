import Controls from './controls';
import RoomUI from './room';
import { useModelStore } from '@/controllers/model';

export default function App() {
  const { target, view } = useModelStore();

  return (
    <div className="container">
      {view.map((room, index) => {
        if (room != null) {
          return <RoomUI {...room} index={index} />;
        }

        return null;
      })}
      <Controls doors={target.doors} />
    </div>
  );
}
