import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LinkedInPage() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Trigger open animation
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => navigate("/"), 300); // navigate after animation
    };

    const iframeContent = `
    <html>
      <head>
        <style>
          body { font-family: sans-serif; margin: 0; padding: 20px; background: #f3f3f3; }
          h1 { font-size: 20px; margin-bottom: 10px; }
          p { margin-bottom: 15px; }
        </style>
      </head>
      <body>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
         <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
         <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
         <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
         <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
         <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
         <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
         <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>
        <h1>Nikhil Kashyap - LinkedIn</h1>
        <p>Experience, Posts, and Projects content goes here...</p>s
      </body>
    </html>
  `;

    return (
        <div className="flex flex-col h-full p-2">
            <div
                className={`flex flex-col bg-black/80 border-4 border-gray-700 rounded-xl transform transition-all duration-300 w-full h-full
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
                {/* Top bar */}
                <div className="flex items-center justify-between bg-gray-900 rounded-t-xl h-10 px-3 flex-shrink-0">
                    <div className="flex items-center gap-2">
                        <span
                            onClick={handleClose}
                            className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
                        />
                        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <span className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                </div>

                {/* Scrollable iframe content */}
                <iframe
                    srcDoc={iframeContent}
                    className="flex-1 w-full h-full border-0 rounded-b-xl"
                    title="LinkedIn Content"
                />
            </div>
        </div>
    );
}

export default LinkedInPage;
