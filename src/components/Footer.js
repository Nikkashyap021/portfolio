import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vscode from "../assets/icons/vscode.png";
import git from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";

function Footer() {
    const navigate = useNavigate();
    const [activeIcon, setActiveIcon] = useState(null); // track active icon

    const handleClick = (icon, path) => {
        if (activeIcon === icon) {
            // If already active, go back to home
            setActiveIcon(null);
            navigate("/"); // Home page
        } else {
            setActiveIcon(icon);
            navigate(path);
        }
    };

    return (
        <footer className="flex flex-col md:flex-row justify-between items-center bg-black/60 p-4 rounded-lg shadow-inner gap-4">

            {/* Left: Copyright */}
            <div className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </div>

            {/* Center: Social icons */}
            <div className="flex gap-6">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src={vscode}
                        alt="VS Code"
                        className={`w-8 h-8 hover:scale-110 transition-transform ${activeIcon === "vscode" ? "ring-2 ring-white rounded-full" : ""}`}
                        onClick={() => handleClick("vscode", "/vscode")}
                    />
                </a>

                <img
                    src={git}
                    alt="GitHub"
                    onClick={() => handleClick("github", "/github")}
                    className={`w-8 h-8 cursor-pointer hover:scale-110 transition ${activeIcon === "github" ? "ring-2 ring-white rounded-full" : ""}`}
                />

                <div className="relative w-8 h-8 cursor-pointer" onClick={() => handleClick("linkedin", "/linkedin")}>
                    <img
                        src={linkedin}
                        alt="LinkedIn"
                        className="w-8 h-8 hover:scale-110 transition"
                    />
                    {activeIcon === "linkedin" && (
                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full" />
                    )}
                </div>


            </div>

            {/* Right: Optional quick links */}
            <div className="flex gap-4 text-xs md:text-sm text-gray-400">
                <a href="#home" className="hover:underline">Home</a>
                <a href="#blog" className="hover:underline">Blog</a>
                <a href="#projects" className="hover:underline">Projects</a>
            </div>

        </footer>
    );
}

export default Footer;
