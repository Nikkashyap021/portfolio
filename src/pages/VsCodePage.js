import React from "react";
function VsCodePage({ url = "https://github.com/Nikkashyap021" }) {
    // Convert normal GitHub URL into vscode.dev format
    const vscodeUrl = url.replace("https://github.com/", "https://vscode.dev/github/");

    return (
        <div className="flex flex-col h-full p-2">
            {/* Computer screen container */}
            <div className="flex-1 bg-black/80 border-4 border-gray-700 rounded-xl flex flex-col">

                {/* Top header bar */}
                <div className="flex items-center justify-start bg-gray-900 rounded-t-xl h-8 px-3 gap-2 flex-shrink-0">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>

                {/* Embedded VS Code */}
                <div className="flex-1 overflow-auto p-2">
                    <iframe
                        src={vscodeUrl}
                        width="100%"
                        height="500px"
                        className="rounded-lg border border-gray-700"
                        title="VSCode Embed"
                    />
                </div>
            </div>
        </div>
    );
}

export default VsCodePage;