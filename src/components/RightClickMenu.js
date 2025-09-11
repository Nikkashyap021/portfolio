import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function RightClickMenu() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();

            const screenW = window.innerWidth;
            const screenH = window.innerHeight;
            const menuW = menuRef.current?.offsetWidth || 192;
            const menuH = menuRef.current?.offsetHeight || 240;

            let x = e.pageX;
            let y = e.pageY;

            // Prevent overflow
            if (x + menuW > screenW) x = screenW - menuW - 10;
            if (y + menuH > screenH) y = screenH - menuH - 10;

            setPosition({ x, y });
            setMenuVisible(true);
        };

        const handleClick = () => setMenuVisible(false);

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
        setMenuVisible(false);
    };


    return (
        <>
            {menuVisible && (
                <div
                    className="absolute z-50"
                    style={{ top: position.y, left: position.x }}
                    ref={menuRef}
                >
                    <ul className="bg-gray-900/95 text-white rounded-lg shadow-xl py-2 w-48">
                        <li
                            onClick={() => handleNavigate("/")}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        >
                            🏠 Home
                        </li>
                        <li
                            onClick={() => handleNavigate("/blog")}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        >
                            📝 Blog
                        </li>
                        <li
                            onClick={() => handleNavigate("/education")}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        >
                            🎓 Education
                        </li>
                        <li
                            onClick={() => handleNavigate("/certificates")}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        >
                            📜 Certificates
                        </li>
                        <li
                            onClick={() => handleNavigate("/profile")}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        >
                            👤 Profile
                        </li>
                        <li
                            onClick={() => handleNavigate("/settings")}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        >
                            ⚙️ Settings
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default RightClickMenu;
