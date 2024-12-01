import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Parallax from "./Parallax/Parallax";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {
  return (
    <div id="Homepage">
      <Navbar />
      <Hero />
      <Parallax />
      <Portfolio to="/projects" />
      <Contact />
    </div>
  );
};

export default Home;
