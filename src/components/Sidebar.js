import React from "react";
// import home from "../assets/home.png";
// import blog from "../assets/blog.png";
// import user from "../assets/user.png";
// import settings from "../assets/settings.png";

function Sidebar() {
  return (
    <div className="w-20 bg-black/60 flex flex-col justify-between items-center py-6">
      <div className="flex flex-col gap-6">
        {/* <img src={home} alt="Home" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
        <img src={blog} alt="Blog" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
        <img src={user} alt="About" className="w-8 h-8 cursor-pointer hover:scale-110 transition" /> */}
      </div>
      <div className="flex flex-col gap-6">
        {/* <img src={settings} alt="Settings" className="w-8 h-8 cursor-pointer hover:rotate-90 transition" /> */}
      </div>
    </div>
  );
}

export default Sidebar;
