import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import background_image from "./assets/background.jpg";
function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900">
      {/* Main Container with rounded background */}
      <div
        className="h-[95vh] w-[95vw] rounded-3xl overflow-hidden shadow-2xl flex"
        style={{ backgroundImage: `url(${background_image})` }}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <main className="flex-1 flex flex-col justify-between p-6 text-white bg-black/40">
          <Header />
          <Hero />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
