import Room from "./room";

export default function App() {
    return (
        <div className="container">
            <Room doors={1} />
            <Room doors={1} />
        </div>
    )
}