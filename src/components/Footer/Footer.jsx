import React from "react";
import { ArrowUp, Terminal, Mail } from "lucide-react";
import { Github, Linkedin } from "../Icons";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("bhuvan18reddy@gmail.com");
    alert("Email address copied to clipboard: bhuvan18reddy@gmail.com");
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand" onClick={scrollToTop}>
            <div className="marvel-logo-block">SANGAM</div>
            <span className="logo-subtext">REDDY</span>
          </div>

          <div className="footer-links-row">
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#achievements" className="footer-link">Achievements</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <div className="footer-social-row">
            <a
              href="https://www.linkedin.com/in/bhuvan-reddy-921496341/"
              target="_blank"
              rel="noreferrer"
              className="footer-soc-link"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/bhuvan1439"
              target="_blank"
              rel="noreferrer"
              className="footer-soc-link"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <button
              onClick={copyEmail}
              className="footer-soc-link button-link"
              title="Copy Email Address"
            >
              <Mail size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Sangam Bhuvan Reddy. All rights reserved. Deployed with premium React structures.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
