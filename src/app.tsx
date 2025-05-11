import React from "react";
import { useModelStore } from "./model";

const App: React.FC = () => {
    const model = useModelStore();

    return <div>
        <div className="scene">
            <div className="cube" style={{ transform: `translate3d(200px, 100px, 200px) rotateY(${model.rotation}deg)` }}>
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
            </div>
        </div>
        <div className="controls">
            <div className="rotation-controls">
                <button onClick={model.rotateLeft}>Rotate Left</button>
                <button onClick={model.rotateRight}>Rotate Right</button>
            </div>
            <div className="interaction-controls">
                {model.ways.map((value, index) => {
                    if (value != null) {
                        const dir = index.toString(10);
                        return <button key={dir} onClick={model.interact} data-dir={dir}>Interact {dir}</button>
                    }
                    return null;
                })}
            </div>
        </div>
    </div>
}

export default App;