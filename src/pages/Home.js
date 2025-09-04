import React, { useState, useEffect } from "react";
import Nikhil_Logo from "../assets/Nikhil_Logo.png"
function Home() {
    const [dateTime, setDateTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);



    return (
        <div className="p-6 text-white flex flex-col gap-6">
            {/* Heading */}
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>

            {/* Date & Time */}
            <div className="flex justify-around items-center gap-3">
                <img className="w-1/4 h-min  bg-transparent rounded-lg" src={Nikhil_Logo} />
                <p className="text-9xl text-gray-300 ">
                    {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
                </p>
            </div>


           
        </div>
    );
}

export default Home;
