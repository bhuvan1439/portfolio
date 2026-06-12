import React, { useState, useEffect } from "react";
import { ShieldCheck, Award, GraduationCap, Server, Terminal, Layers } from "lucide-react";
import "./Certifications.css";

export default function Certifications() {
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

    const el = document.getElementById("certifications");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const certs = [
    {
      name: "TechSprint Hackathon Selection",
      provider: "Google Developer Groups (GDG)",
      year: "2026",
      borderClass: "cert-cyan",
      icon: <Layers size={18} className="cert-icon-cyan" />
    },
    {
      name: "Radiothon Hackathon Finalist",
      provider: "Radiothon FinTech Challenge",
      year: "2025",
      borderClass: "cert-rose",
      icon: <Award size={18} className="cert-icon-rose" />
    },
    {
      name: "Code4Change – Social Hackathon",
      provider: "Code4Change Org",
      year: "2025",
      borderClass: "cert-purple",
      icon: <ShieldCheck size={18} className="cert-icon-purple" />
    },
    {
      name: "AI ML Mastery Certification",
      provider: "Unstop / DevTown",
      year: "2024",
      borderClass: "cert-purple",
      icon: <GraduationCap size={18} className="cert-icon-purple" />
    },
    {
      name: "GitHub Workflow Mastery",
      provider: "GitHub Student Program",
      year: "2024",
      borderClass: "cert-emerald",
      icon: <Terminal size={18} className="cert-icon-emerald" />
    },
    {
      name: "Serverless Agentic Workflows",
      provider: "DeepLearning.AI (Amazon Bedrock)",
      year: "2024",
      borderClass: "cert-cyan",
      icon: <Server size={18} className="cert-icon-cyan" />
    },
    {
      name: "LangChain LLM Development",
      provider: "DeepLearning.AI",
      year: "2024",
      borderClass: "cert-purple",
      icon: <Layers size={18} className="cert-icon-purple" />
    },
    {
      name: "ChatGPT Prompt Engineering",
      provider: "DeepLearning.AI & OpenAI",
      year: "2024",
      borderClass: "cert-cyan",
      icon: <Award size={18} className="cert-icon-cyan" />
    },
    {
      name: "LLM Deep Learning Systems",
      provider: "DeepLearning.AI",
      year: "2024",
      borderClass: "cert-rose",
      icon: <ShieldCheck size={18} className="cert-icon-rose" />
    },
    {
      name: "National Hackathon Finalist",
      provider: "AVEVA of YUVAAN",
      year: "2024",
      borderClass: "cert-emerald",
      icon: <Award size={18} className="cert-icon-emerald" />
    },
    {
      name: "Linux: Zero to Hero Workshop",
      provider: "Null Chapter, VIT-AP University",
      year: "2024",
      borderClass: "cert-cyan",
      icon: <Terminal size={18} className="cert-icon-cyan" />
    }
  ];

  return (
    <section id="certifications" className={`certifications-section reveal ${isVisible ? "active" : ""}`}>
      <div className="container">
        <div className="section-header">
          <span className="badge">Credentials</span>
          <h2>Certifications</h2>
          <p>
            Continuous academic and developer learning across vector databases, AI agents, cloud architectures, and command-line operating systems.
          </p>
        </div>

        <div className="certs-grid">
          {certs.map((cert, idx) => (
            <div key={idx} className={`cert-card glass-card ${cert.borderClass}`}>
              <div className="cert-header">
                <div className="cert-icon-wrapper">{cert.icon}</div>
                <span className="cert-year-tag">{cert.year}</span>
              </div>
              
              <h3 className="cert-name-text">{cert.name}</h3>
              <p className="cert-provider-text">{cert.provider}</p>

              <div className="cert-footer">
                <span className="verified-badge">
                  <span className="verified-dot" />
                  Verified Credential
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
