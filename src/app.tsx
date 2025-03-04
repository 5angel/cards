import Controls from './controls';
import Room from './room';

export default function App() {
  return (
    <div className="container">
      <Controls />
      <Room doors={1111} />
    </div>
  );
}
