import React from "react";

function SpotifyPage() {
    return (
        <div className="flex flex-col h-full p-2">
            {/* Computer screen container */}
            <div className="flex-1 bg-[rgba(0,94,70,1)] rounded-xl flex flex-col">

                {/* Top bar for style (no buttons) */}
                <div className="flex items-center gap-2 bg-gray-900 rounded-t-xl h-8 px-3 flex-shrink-0">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>

                </div>

                {/* Iframe content */}
                <div className="flex-1 overflow-auto">
                    <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLZ52XmnySJg"
                        className="w-full h-full p-2"
                        title="Spotify"
                    />
                </div>
            </div>
        </div>
    );
}

export default SpotifyPage;
