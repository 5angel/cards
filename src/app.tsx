import Room from './room';

const DOORS = [
  1000, 100, 10, 1, 1100, 110, 11, 1001, 1101, 1110, 111, 1011, 1111,
];

export default function App() {
  return (
    <div className="container">
      {DOORS.map((value) => (
        <Room doors={value} />
      ))}
    </div>
  );
}
