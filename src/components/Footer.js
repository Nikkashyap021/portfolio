import React from "react";
import { useNavigate } from "react-router-dom";
import vscode from "../assets/icons/vscode.png";
import git from "../assets/icons/github.png";
import spotify from "../assets/icons/spotify.png"
import linkedin from "../assets/icons/linkedin.png";
function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center bg-black/60 p-4 rounded-lg shadow-inner gap-4">
      <div className="text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Nikhil Kashyap. All rights reserved.
      </div>

      <div className="flex gap-6">
        <img
          src={vscode}
          alt="VS Code"
          className="w-8 h-8 cursor-pointer hover:scale-110 transition"
          onClick={() => navigate("/vscode")}
        />
        <img
          src={spotify}
          alt="spotify"
          className="w-8 h-8 cursor-pointer hover:scale-110 transition"
          onClick={() => navigate("/spotify")}
        />
        <img
          src={linkedin}
          alt="LinkedIn"
          className="w-8 h-8 cursor-pointer hover:scale-110 transition"
          onClick={() => navigate("/linkedin")}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png"
          alt="Medium"
          className="w-8 h-8 cursor-pointer hover:scale-110 transition"
          onClick={() => navigate("/medium")}
        />

      </div>
      <div></div>

    </footer>
  );
}

export default Footer;
