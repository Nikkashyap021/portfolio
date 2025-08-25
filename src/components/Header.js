import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-black/60 px-4 py-2 rounded-lg font-bold">
        🌥️ NIKHIL KASHYAP
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 rounded-xl bg-transparent border border-white text-white placeholder-gray-300 outline-none"
      />
    </div>
  );
}

export default Header;
