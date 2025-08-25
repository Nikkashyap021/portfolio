import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Header />
        <Hero />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
