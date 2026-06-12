import React, { useState, useEffect, useRef } from "react";
import { Mail, ArrowRight, Download } from "lucide-react";
import { Github, Linkedin } from "../Icons";
import "./Hero.css";

function Typewriter({ text, delay = 40 }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className="typewriter-text">{currentText}</span>;
}

function CanvasParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particlesArray = [];
    let mouse = { x: null, y: null, radius: 160 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener("mousemove", handleMouseMove);
    canvas.parentNode.addEventListener("mouseleave", handleMouseLeave);

    class Particle {
      constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = dx;
        this.directionY = dy;
        this.size = size;
        this.color = color;
        this.baseSize = size;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (mouse.x !== null && distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 2;
          this.y -= Math.sin(angle) * force * 2;
          this.size = this.baseSize * (1 + force * 1.5);
        } else {
          this.size = Math.max(this.baseSize, this.size - 0.05);
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 100);
      // Marvel Orange and White particles
      const colors = ["rgba(240, 90, 40, 0.4)", "rgba(240, 90, 40, 0.2)", "rgba(255, 255, 255, 0.15)"];

      for (let i = 0; i < count; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let dx = (Math.random() - 0.5) * 0.4;
        let dy = (Math.random() - 0.5) * 0.4;
        let color = colors[Math.floor(Math.random() * colors.length)];

        particlesArray.push(new Particle(x, y, dx, dy, size, color));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const connect = () => {
      let opacity;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            opacity = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(240, 90, 40, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { label: "Hackathons Won", val: "1 🏆", color: "stat-orange" },
    { label: "Projects Built", val: "8+", color: "stat-white" },
    { label: "Current CGPA", val: "7.0 / 10", color: "stat-orange" },
    { label: "GitHub Repos", val: "9+", color: "stat-white" },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <CanvasParticles />

      {/* Spotlight coordinates */}
      <div
        className="mouse-spotlight"
        style={{
          left: mousePos.x - 250,
          top: mousePos.y - 250,
        }}
      />

      <div className="hero-container container">
        <div className="hero-grid">
          {/* Info Side */}
          <div className="hero-info">
            <div className="status-badge slanted-badge">
              <span>Open to Work (Vijayawada · Remote · Hybrid)</span>
            </div>

            <h1 className="hero-title">
              Sangam
              <span className="hero-title-highlight marvel-text">Bhuvan Reddy</span>
            </h1>

            <div className="hero-subtitle">
              <span className="sub-orange">Software</span> &amp;{" "}
              <span className="sub-white">AI Developer</span>
              <span className="sub-divider">|</span>
              <span className="sub-orange">Hackathon Expert</span>
            </div>

            <div className="hero-desc">
              <Typewriter text="Building intelligent, resilient systems for a sustainable future." />
            </div>

            <div className="hero-actions">
              <button onClick={scrollToContact} className="btn btn-primary slanted-btn">
                Hire Me <ArrowRight size={16} />
              </button>
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume download triggered. Points to Sangam_Bhuvan_Reddy_Resume.pdf.");
                }}
                className="btn btn-secondary slanted-btn"
              >
                Download Resume <Download size={16} />
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/bhuvan-reddy-921496341/"
                target="_blank"
                rel="noreferrer"
                className="social-node ln"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/bhuvan1439"
                target="_blank"
                rel="noreferrer"
                className="social-node gh"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:bhuvan18reddy@gmail.com"
                className="social-node ml"
                title="Email"
              >
                <Mail size={18} />
              </a>
              <span className="social-divider" />
              <span className="social-email">bhuvan18reddy@gmail.com</span>
            </div>
          </div>

          {/* Card Side */}
          <div className="hero-visual">
            <div className="floating-card glass-card marvel-card-skew">
              <div className="card-top-accent" />
              
              <div className="card-header">
                <div className="profile-wrapper">
                  <div className="profile-avatar">👨‍💻</div>
                </div>
                <h3>Bhuvan Reddy</h3>
                <p>VIT-AP University (2024-2029)</p>
              </div>

              <div className="card-stats">
                {stats.map((st, idx) => (
                  <div key={idx} className="card-stat-row">
                    <span className="stat-label">{st.label}</span>
                    <span className={`stat-val ${st.color}`}>{st.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
