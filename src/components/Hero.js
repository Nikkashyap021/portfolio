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
        <div className="text-center my-10">
            <h1 className="text-4xl font-bold">Cloud Engineer</h1>
            <p className="mt-2 text-lg text-gray-200">{dateTime}</p>
        </div>
    );
}

export default Hero;
