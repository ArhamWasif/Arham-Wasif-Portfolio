import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parallax from "./Components/Parallax/Parallax";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        {" "}
        <Router>
          <Routes>
            <Route element={<Navbar />} path="/navbar" />
            <Route element={<Hero />} path="/hero" />
            <Route element={<Home />} path="/" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Portfolio />} path="/projects" />
            <Route element={<Parallax />} path="/parallax" />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
