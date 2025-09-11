import React, { useEffect, useState } from "react";
import "../css/SplashScreen.css"; // keep styles separate

const texts = [
    "Connecting To Cloud",
    "Creating Docker Image",
    "Running Backend Server",
    "Oppening Portfolio"
];
function SplashScreen({ onFinish }) {
    const [i, setI] = useState(0);
    const [text, setText] = useState(texts[0]);

    useEffect(() => {
        if (i < texts.length) {
            setText(texts[i]);

            const timeout = setTimeout(() => {
                setI(i + 1);
            }, 2200);
            return () => clearTimeout(timeout);
        } else {
            onFinish();
        }
    }, [i, onFinish]);

    return (
        <div className="splash-container">
            <div key={i} className="text">{text}</div>
            <div className="loader">
                <div key={i} className="bar" />
            </div>
        </div>
    );
}

export default SplashScreen;