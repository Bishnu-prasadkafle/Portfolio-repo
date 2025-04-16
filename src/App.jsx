import React from "react";
import logoImg from "./assets/logo.png";
import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import image from "./assets/profile.jpg";
import ProjectCard from "./components/ProjectCard";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  const navbar = [
    { text: "Home", href: "home" },
    { text: "About", href: "/about" },
    { text: "Projects", href: "/projects" },
    { text: "Skills", href: "/skill" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <Header logo={logoImg} links={navbar} />
      <div>
        <About
          image={image}
          details='I am a junior front-end developer and Professional User Experience Designer.'
        />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}
