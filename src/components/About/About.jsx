import React, { useState, useEffect } from "react";
import { Terminal, Target, Compass, Sparkles, Code, Server, Database, Brain, Cpu, Shield, BarChart, FileCode, Smartphone, GitBranch } from "lucide-react";
import "./About.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const el = document.getElementById("about");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const techInterests = [
    { name: "Full Stack Development", icon: <Code className="interest-red" /> },
    { name: "Frontend & UI/UX Design", icon: <Sparkles className="interest-red" /> },
    { name: "React & Modern Web", icon: <FileCode className="interest-red" /> },
    { name: "Backend with Node.js", icon: <Server className="interest-red" /> },
    { name: "Database Architectures", icon: <Database className="interest-red" /> },
    { name: "Machine Learning & AI", icon: <Brain className="interest-red" /> },
    { name: "Cloud Infrastructure", icon: <Cpu className="interest-red" /> },
    { name: "Cybersecurity & CTFs", icon: <Shield className="interest-red" /> },
    { name: "Data Analytics & BI", icon: <BarChart className="interest-red" /> },
    { name: "Open Source Engagement", icon: <GitBranch className="interest-red" /> },
    { name: "Mobile App Development", icon: <Smartphone className="interest-red" /> },
    { name: "Best Coding Practices", icon: <Terminal className="interest-red" /> },
  ];

  const tabs = [
    { id: "about", label: "My Background", icon: <Compass size={14} /> },
    { id: "goals", label: "Career Goals", icon: <Target size={14} /> },
    { id: "unique", label: "What Makes Me Unique", icon: <Sparkles size={14} /> },
  ];

  const content = {
    about: {
      title: "Building scalable architectures & integrating AI to solve physical-world challenges.",
      text: "I'm a full-stack developer who specializes in building scalable web architecture, integrating AI models to solve real-world problems, and delivering clean code under pressure. My portfolio ranges from developing highly transparent FinTech portals to designing telemetry trip-chaining applications. I'm at my best when working in fast-paced teams, architecting solutions from the ground up—which helped my team secure a 1st place hackathon finish against 250 competing teams.",
    },
    goals: {
      title: "Architecting resilient, intelligent algorithms for measurable impact.",
      text: "My primary objective is to build high-efficiency AI integrations that address industrial bottlenecks. By bridging the gap between back-end infrastructure and machine learning, I aim to develop tools that enhance security, efficiency, and sustainability. I seek roles where I can design robust microservices, leverage vector embeddings, and build resilient products for mass-market users.",
    },
    unique: {
      title: "Where full-stack execution meets a security-first mind.",
      text: "What sets me apart is the combination of full-stack engineering capability, an AI integration toolkit, and the rigorous mindset of a CTF competitor. I excel at rapid software prototyping—taking complex algorithm designs and scaling them into production-ready responsive dashboards. I build with defensive programming strategies, ensuring telemetry pipelines and payment services are as secure as they are fast.",
    },
  };

  return (
    <section id="about" className={`about-section reveal ${isVisible ? "active" : ""}`}>
      <div className="container">
        <div className="section-header">
          <span className="badge">Get To Know Me</span>
          <h2>About Me</h2>
          <p>
            Passionate developer building intelligent systems at the intersection of web technology, AI models, and real-world impact.
          </p>
        </div>

        <div className="about-grid">
          {/* Left panel: Info Tabs */}
          <div className="about-tabs-container">
            <div className="about-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="about-content-card glass-card">
              <h3 className="about-content-title">
                {content[activeTab].title}
              </h3>
              <p className="about-content-text">
                {content[activeTab].text}
              </p>
            </div>
          </div>

          {/* Right panel: Interests */}
          <div className="about-interests-container">
            <h3 className="interests-title">Technical Focus Areas</h3>
            <div className="interests-grid">
              {techInterests.map((interest, idx) => (
                <div key={idx} className="interest-card glass-card">
                  <div className="interest-icon-wrapper">
                    {interest.icon}
                  </div>
                  <span className="interest-name">{interest.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
