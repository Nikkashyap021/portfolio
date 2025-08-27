import React, { useState, useEffect } from "react";

function Home() {
    const [dateTime, setDateTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const projects = [
        { title: "Project One", description: "This is project one description." },
        { title: "Project Two", description: "This is project two description." },
        { title: "Project Three", description: "This is project three description." },
    ];

    return (
        <div className="p-6 text-white flex flex-col gap-6">
            {/* Heading */}
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>

            {/* Date & Time */}
            <p className="text-sm text-gray-300">
                {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
            </p>

            {/* Projects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-black/50 p-4 rounded-xl shadow-lg hover:scale-105 transition transform"
                    >
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-300">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
