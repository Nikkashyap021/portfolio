import React from "react";
import { NavLink } from "react-router-dom";

import home from "../assets/icons/white_home.svg";
import blog from "../assets/icons/white_blog.svg";
import education from "../assets/icons/white_education.svg";
import settings from "../assets/icons/white_setting.svg";
import user from "../assets/icons/white_user.svg";

function Sidebar() {
  const topLinks = [
    { to: "/", icon: home, label: "Home" },
    { to: "/blog", icon: blog, label: "Blog" },
    { to: "/education", icon: education, label: "Education" },
    { to: "/settings", icon: settings, label: "Settings" },
  ];

  const bottomLinks = [
    { to: "/profile", icon: user, label: "Profile" },
  ];

  return (
    <div className="w-20 bg-black/60 flex flex-col justify-between items-center py-6">

      {/* Top Section */}
      <div className="flex flex-col gap-6 items-center">
        {topLinks.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 cursor-pointer transition ${isActive ? "text-blue-400 scale-110" : "text-white hover:scale-110"
              }`
            }
          >
            <img
              src={icon}
              alt={label}
              className={`w-8 h-8 transition-transform duration-500 
    ${label === "Settings" ? "hover:rotate-180" : ""}`}
            />
            <span className="text-xs">{label}</span>
          </NavLink>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-6 items-center">
        {bottomLinks.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 cursor-pointer transition ${isActive ? "text-blue-400 scale-110" : "text-white hover:scale-110"
              }`
            }
          >
            <img src={icon} alt={label} className="w-8 h-8" />
            <span className="text-xs">{label}</span>
          </NavLink>
        ))}
      </div>

    </div>
  );
}

export default Sidebar;
