import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen.js";
import RightClickMenu from "./components/RightClickMenu.js";
import Popup from "./components/Popup";
// import background_image from "./assets/day.png";
import background_image from "./assets/background.jpg";
// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Education from "./pages/Education";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import SpotifyPage from "./pages/SpotifyPage";
import LinkedInPage from "./pages/LinkedInPage";
import MediumPage from "./pages/MediumPage";
import VsCodePage from "./pages/VsCodePage.js";
import Certificate from "./pages/Certificate.js";
function App() {
  const location = useLocation();

  // pages where Header should be hidden
  const hideHeaderOn = ["/linkedin", "/github", "/spotify", "/vscode", "/blog", "/medium", "/certificates"];
  const [showSplash, setShowSplash] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Block Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
        setShowPopup(true);
      }
      // Block F12
      if (e.key === "F12") {
        e.preventDefault();
        setShowPopup(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900 p-2">
      <div
        className="h-full w-full rounded-3xl overflow-hidden shadow-2xl flex"
        style={{ backgroundImage: `url(${background_image})` }}
      >
        <Sidebar />
        <main className="flex-1 flex flex-col text-white bg-black/0 p-2">
          {/* Right click menu */}

          <RightClickMenu />

          {/* Hide header on specific pages */}
          {!hideHeaderOn.includes(location.pathname) && <Header />}

          <div className="flex-1 overflow-y-auto p-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/education" element={<Education />} />
              <Route path="/certificates" element={<Certificate />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/spotify" element={<SpotifyPage />} />
              <Route path="/linkedin" element={<LinkedInPage />} />
              <Route path="/medium" element={<MediumPage />} />
              <Route path="/vscode" element={<VsCodePage />} />
            </Routes>
          </div>

          <Footer />
        </main>
      </div>
      {/* Popup */}
      {showPopup && (
        <Popup
          message="You are not authorize to use this key🚫"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default App;
