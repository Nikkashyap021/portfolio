import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import background_image from "./assets/background.jpg";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Education from "./pages/Education";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings"
import GitHubPage from "./pages/GitHubPage";
import LinkedInPage from "./pages/LinkedInPage";
function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900">
      {/* Main container with rounded background */}
      <div
        className="h-[95vh] w-[95vw] rounded-3xl overflow-hidden shadow-2xl flex"
        style={{ backgroundImage: `url(${background_image})` }}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <main className="flex-1 flex flex-col text-white bg-black/40 p-2">
          {/* Header */}
          <Header />

          {/* Page content grows to fill the space between header and footer */}
          <div className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/education" element={<Education />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/github" element={<GitHubPage />} />
              <Route path="/linkedin" element={<LinkedInPage />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
