import React from "react";
import vscode from "../assets/icons/vscode.png";
import git from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";

function Footer() {
    return (
        <div className="footer flex justify-center  bg-black/60 items-center gap-5 p-2 rounded-lg">
            <img className="footer-icon" src={vscode} alt="VS Code" />
            <img className="footer-icon" src={git} alt="GitHub" />
            <img className="footer-icon" src={linkedin} alt="LinkedIn" />

        </div>
    );
}

export default Footer;
