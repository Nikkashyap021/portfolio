import React from "react";

function SocialScreen({ url }) {
    return (
        <div className="flex flex-col h-full p-2">
            {/* Computer screen container */}
            <div className="flex-1 bg-black/80 border-4 border-gray-700 rounded-xl flex flex-col">

                {/* Top header bar (just for style, no buttons) */}
                <div className="flex items-center justify-start bg-gray-900 rounded-t-xl h-8 px-3 gap-2 flex-shrink-0">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>

                {/* Content iframe */}
                <div className="flex-1 overflow-auto p-2">
                    <iframe
                        src={url}
                        className="w-full h-full rounded-md border-2 border-gray-600"
                        title="Social Content"
                    />
                </div>
            </div>
        </div>
    );
}

export default SocialScreen;
