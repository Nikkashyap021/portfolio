import React, { useEffect, useState } from "react";

function Hero() {
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            const date = now.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }).toUpperCase();
            setDateTime(`${time} | ${date}`);
        };

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero">
            <h1>Cloud Engineer</h1>
            <p>{dateTime}</p>
        </div>
    );
}

export default Hero;
