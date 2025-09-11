import React from "react";

function Popup({ message, onClose }) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
            <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-6 w-80 text-center">
                <h2 className="text-lg font-bold mb-4">⚠️ Warning</h2>
                <p className="mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Popup;
