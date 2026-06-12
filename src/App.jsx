import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Certifications from "./components/Certifications/Certifications";
import GitHubStats from "./components/GitHubStats/GitHubStats";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  useEffect(() => {
    // Reveal animation triggers on scroll
    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.08, // trigger when 8% is visible
        rootMargin: "0px 0px -50px 0px" // trigger slightly before entering viewport
      }
    );

    reveals.forEach((el) => revealObserver.observe(el));

    return () => {
      reveals.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <GitHubStats />
      <Contact />
      <Footer />
    </div>
  );
}
