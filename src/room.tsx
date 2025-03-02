type RoomProps = {
    doors: number;
}

export default function Room({ doors }: RoomProps) {
    console.log(doors, doors << 0)
    return (
        <div className="room">
            <h3 className="room__title">Crossroads</h3>
            { doors << 0 > 0 && <div className="door tp" />}
            { doors << 1 > 0 && <div className="door rt" />}
            { doors << 2 > 0 && <div className="door bt" />}
            { doors << 3 > 0 && <div className="door lt" />}
        </div>
    )
}