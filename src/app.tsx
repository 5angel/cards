import { useState } from "react";
import Room from "./room";
import Controls from "./controls";

type RoomConfig = {
  doors: number;
}

function generateDoors() {
  return parseInt(Math.max(1, Math.floor(Math.random() * 16)).toString(2), 10);
}

export default function App() {
  const [doors, setDoors] = useState(generateDoors())

  console.log(doors)

  return (
    <div className="container" onClick={() => {
      setDoors(generateDoors())
    }}>
        <Controls />
        <Room doors={doors} />
    </div>
  );
}