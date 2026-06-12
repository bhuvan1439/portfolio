import React, { useState, useEffect } from "react";
import { ExternalLink, ShieldAlert, Award, Compass, Eye, X, Terminal, Code, Cpu } from "lucide-react";
import { Github } from "../Icons";
import "./Projects.css";

import imgWomenSafety from "../../assets/images/Screenshot 2026-06-09 122030.png";
import imgUpYield from "../../assets/images/Screenshot 2026-06-09 122437.png";
import imgHappyTrip from "../../assets/images/Screenshot 2026-06-09 122457.png";
import imgAimOps from "../../assets/images/Screenshot 2026-06-09 122608.png";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = document.getElementById("projects");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const categories = ["All", "Web Dev", "AI/ML", "Mobile", "Hardware"];

  const projectsData = [
    {
      id: 1,
      title: "Women's Shield",
      category: "Web Dev",
      description: "A comprehensive, AI-enhanced personal safety application built at Code4Change Hackathon. Features My Safety Hub with a discreet 'Fake Call Tool', Smart Mapping with anomaly detection, Community SOS broadcasts, Safe Spots navigation, and an AI conversational safety assistant.",
      longDescription: "Women's Shield is a social-impact project engineered during the Code4Change Hackathon. It integrates Google Maps API to chart safe corridors, utilizes local storage caches for instant offline emergency contacts, and deploys a conversational AI safety assistant. The signature feature is a 'Fake Call Tool' designed to help users exit uncomfortable situations. It also includes peer-to-peer SOS broadcasts via background sockets to notify nearby volunteers.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps API", "AI Chat Integration"],
      github: "https://github.com/hima-chandana/women_safety.git",
      demo: "https://github.com/hima-chandana/women_safety.git",
      image: imgWomenSafety,
      badge: "Social Impact Project",
      colorClass: "accent-purple-shadow",
      icon: "🛡️"
    },
    {
      id: 2,
      title: "AIM-OPS",
      category: "AI/ML",
      description: "An AI-driven Manufacturing Intelligence system optimizing industrial batch processes and analyzing energy patterns. Winner of 1st place out of 250+ competing teams at Yuvaan Hackathon.",
      longDescription: "AIM-OPS provides modern manufacturing lines with real-time process monitoring, anomaly triggers, and automated logging. By analyzing sensor metrics and energy consumption grids, it predicts batch failures before they happen. Deployed during a time-compressed hackathon, it features clean, reactive metrics panels, SVG gauge charts, and instant Slack/Email alerts for floor supervisors.",
      tags: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Chart.js"],
      github: "https://github.com/bhuvan1439/aim-ops-1",
      demo: "https://github.com/bhuvan1439/aim-ops-1",
      image: imgAimOps,
      badge: "🏆 1st Place (250+ Teams)",
      colorClass: "accent-purple-shadow",
      icon: "📈"
    },
    {
      id: 3,
      title: "HappyTrip",
      category: "Web Dev",
      description: "An Indian heritage discovery and travel planning portal built at Google TechSprint. Mimics ancient architectural styles using custom CSS grids and layouts.",
      longDescription: "HappyTrip helps travelers organize custom itineraries while exploring historic monuments across India. It integrates Leaflet maps, weather predictions, and local food recommendations. Built under constraints during Google TechSprint, it features custom CSS grid patterns, SVG heritage arches, expense calculators, and JWT authentication flows.",
      tags: ["React.js", "Node.js", "MongoDB", "Leaflet.js", "OpenStreetMap API", "Custom CSS Grid"],
      github: "https://github.com/bhuvan1439/HappyTrip4",
      demo: "https://github.com/bhuvan1439/HappyTrip4",
      image: imgHappyTrip,
      badge: "Google TechSprint Selection",
      colorClass: "accent-emerald-shadow",
      icon: "✈️"
    },
    {
      id: 4,
      title: "UpYield",
      category: "Web Dev",
      description: "A trust-first FinTech platform unifying wealth management. Built at Radiothon. Features real-time stock dashboards, PAN validations, and AI fraud checks.",
      longDescription: "UpYield is a MERN stack financial portal featuring aggregate wealth monitors, interest calendars, and peer-to-peer ledger flows. It validates user authenticity using simulated PAN registration endpoints and scans transactions using heuristic anomaly algorithms to flag suspicious wealth spikes.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Recharts", "Heuristic Analytics"],
      github: "https://github.com/bhuvan1439/UpYield",
      demo: "https://github.com/bhuvan1439/UpYield",
      image: imgUpYield,
      badge: "FinTech Innovation",
      colorClass: "accent-cyan-shadow",
      icon: "💳"
    },
    {
      id: 5,
      title: "TripLogger",
      category: "Mobile",
      description: "An automated transit trip-chain detection app using GPS and sensor telemetry. Built at Smart India Hackathon 2025 for planners (NATPAC).",
      longDescription: "TripLogger was built for the National Transportation Planning and Research Centre (NATPAC) to track citizen travel habits without exhausting device batteries. It runs low-power background location filters, parses raw coordinates, and structures trip endpoints (origins and destinations) using internal state machine parameters.",
      tags: ["Android Studio", "Java", "XML", "Firebase DB", "Google Location API"],
      github: "https://github.com/bhuvan1439",
      demo: null,
      badge: "SIH National Finalist",
      colorClass: "accent-purple-shadow",
      icon: "📱"
    },
    {
      id: 6,
      title: "Adaptive Steering Headlight",
      category: "Hardware",
      description: "A cost-effective steering-adaptive headlight adjusting beams on curves. Retrofits commuter vehicles at ₹3,500 (96% cost save vs luxury OEMs).",
      longDescription: "Guided by Dr. Arunkumar Sivakumar, this IoT hardware prototype uses micro-servos and ultrasonic telemetry linked to an Arduino controller. When the vehicle pivots, the servo rotates the headlight housing to eliminate blind spots, bringing luxury safety capabilities to budget hatchbacks.",
      tags: ["Arduino UNO", "Servo Motors", "Ultrasonic Sensors", "LDR Sensors", "C++ IoT"],
      github: "https://github.com/bhuvan1439",
      demo: null,
      badge: "IoT Patent Candidate",
      colorClass: "accent-emerald-shadow",
      icon: "🚗"
    },
    {
      id: 7,
      title: "Empower-G",
      category: "Web Dev",
      description: "A civic empowerment dashboard facilitating neighborhood feedback, local problem logging, and community voting registries.",
      longDescription: "Empower-G helps local administrations gather feedback on public services. Citizens log municipal problems (potholes, water leaks), vote on community projects, and monitor resolution logs. Built with React and TypeScript for maximum maintainability.",
      tags: ["TypeScript", "React.js", "HTML5", "CSS3", "REST APIs"],
      github: "https://github.com/bhuvan1439/empower_g",
      demo: "https://github.com/bhuvan1439/empower_g",
      badge: "Civic Tech",
      colorClass: "accent-purple-shadow",
      icon: "🌐"
    },
    {
      id: 8,
      title: "RAG-Assistant",
      category: "AI/ML",
      description: "A Retrieval-Augmented Generation assistant leveraging document embeddings and vector retrievers for contextual knowledge chats.",
      longDescription: "An AI search tool parsing local documents, indexing them into vector databases, and answering queries with references. Leverages LangChain frameworks, custom embedding weights, and open-source LLM APIs.",
      tags: ["Python", "LangChain", "Vector DB", "Embeddings", "LLM Integration"],
      github: "https://github.com/bhuvan1439/RAG-Assistant-",
      demo: "https://github.com/bhuvan1439/RAG-Assistant-",
      badge: "AI Research",
      colorClass: "accent-cyan-shadow",
      icon: "🧠"
    }
  ];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className={`projects-section reveal ${isVisible ? "active" : ""}`}>
      <div className="container">
        <div className="section-header">
          <span className="badge">What I've Built</span>
          <h2>Featured Projects</h2>
          <p>
            A curated showcase of applications built under hackathon timelines, covering full stack web development, machine learning, and IoT hardware.
          </p>
        </div>

        {/* Filters */}
        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`project-card glass-card ${project.colorClass}`}
            >
              <div className="project-media">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                ) : (
                  <div className="project-placeholder">
                    <span className="placeholder-icon">{project.icon}</span>
                  </div>
                )}
                
                <span className="project-badge-tag">{project.badge}</span>

                <div className="project-hover-overlay">
                  <span className="overlay-prompt">View Details</span>
                </div>
              </div>

              <div className="project-details">
                <div className="project-header-row">
                  <h3 className="project-title-text">{project.title}</h3>
                  <span className="project-category-tag">{project.category}</span>
                </div>

                <p className="project-summary-text">{project.description}</p>

                <div className="project-tags-list">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="project-tag-pill more-tags">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>

            <div className="modal-grid">
              <div className="modal-media-side">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-img"
                  />
                ) : (
                  <div className="modal-placeholder">
                    <span className="modal-placeholder-icon">{selectedProject.icon}</span>
                  </div>
                )}
              </div>

              <div className="modal-info-side">
                <div className="modal-header">
                  <span className="modal-badge">{selectedProject.badge}</span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <span className="modal-cat">{selectedProject.category}</span>
                </div>

                <p className="modal-desc">{selectedProject.longDescription}</p>

                <div className="modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="modal-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="modal-actions">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      <Github size={16} /> Codebase
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      <Eye size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
