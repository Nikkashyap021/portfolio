import React from "react";
import { useNavigate } from "react-router-dom";
import vscode from "../assets/icons/vscode.png";
import git from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";

function Footer({ activeIcon, setActiveIcon }) {
  const navigate = useNavigate();

  const handleClick = (icon, path) => {
    if (activeIcon === icon) {
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
        <img
          src={vscode}
          alt="VS Code"
          className={`w-8 h-8 hover:scale-110 transition-transform cursor-pointer ${
            activeIcon === "vscode" ? "ring-2 ring-white rounded-full" : ""
          }`}
          onClick={() => handleClick("vscode", "/vscode")}
        />

        <img
          src={git}
          alt="GitHub"
          className={`w-8 h-8 hover:scale-110 transition-transform cursor-pointer ${
            activeIcon === "github" ? "ring-2 ring-white rounded-full" : ""
          }`}
          onClick={() => handleClick("github", "/github")}
        />

        <div
          className="relative w-8 h-8 cursor-pointer"
          onClick={() => handleClick("linkedin", "/linkedin")}
        >
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

<div></div>

    </footer>
  );
}

export default Footer;
