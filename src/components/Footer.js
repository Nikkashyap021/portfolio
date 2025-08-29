import React from "react";
import { useNavigate } from "react-router-dom";
import vscode from "../assets/icons/vscode.png";
import git from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import medium from "../assets/icons/black_medium.svg";
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
          src={git}
          alt="GitHub"
          className="w-8 h-8 cursor-pointer hover:scale-110 transition"
          onClick={() => navigate("/github")}
        />
        <img
          src={linkedin}
          alt="LinkedIn"
          className="w-8 h-8 cursor-pointer hover:scale-110 transition"
          onClick={() => navigate("/linkedin")}
        />
        <img
          src={medium}
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
