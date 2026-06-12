import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

function SkillBar({ name, percent, color, delay }) {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(percent);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percent, delay]);

  return (
    <div ref={barRef} className="skill-bar-card glass-card">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percent" style={{ color: color, borderColor: color + "33" }}>
          {percent}%
        </span>
      </div>
      <div className="skill-track">
        <div
          className="skill-progress"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}, ${color}bb)`,
            boxShadow: `0 0 10px ${color}35`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [skillCategory, setSkillCategory] = useState("technical");
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

    const el = document.getElementById("skills");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: "HTML5 & CSS3", percent: 95, color: "#ef4444" },
    { name: "JavaScript (ES6+)", percent: 90, color: "#f59e0b" },
    { name: "React.js", percent: 88, color: "#38bdf8" },
    { name: "Node.js & Express.js", percent: 85, color: "#10b981" },
    { name: "Python", percent: 82, color: "#6366f1" },
    { name: "Java", percent: 75, color: "#ec4899" },
    { name: "C Programming", percent: 75, color: "#64748b" },
    { name: "R Programming", percent: 72, color: "#0ea5e9" },
    { name: "MySQL & MongoDB", percent: 80, color: "#06b6d4" },
    { name: "Firebase & Supabase", percent: 82, color: "#f59e0b" },
    { name: "Google Cloud Platform", percent: 76, color: "#3b82f6" },
    { name: "Tailwind CSS", percent: 85, color: "#38bdf8" },
    { name: "REST APIs", percent: 88, color: "#ec4899" },
    { name: "Machine Learning (Scikit, XGBoost)", percent: 78, color: "#8b5cf6" },
    { name: "Data Visualization (Chart.js, Recharts)", percent: 80, color: "#14b8a6" },
    { name: "Git & Version Control", percent: 90, color: "#a78bfa" },
    { name: "IoT Hardware (Arduino)", percent: 80, color: "#10b981" },
    { name: "Prompt Engineering", percent: 85, color: "#a78bfa" }
  ];

  const softSkills = [
    { name: "Team Collaboration", percent: 95, color: "#10b981" },
    { name: "Structured Communication", percent: 92, color: "#38bdf8" },
    { name: "Problem Solving Under Time-limits", percent: 94, color: "#8b5cf6" },
    { name: "Hackathon Project Leadership", percent: 90, color: "#f59e0b" },
    { name: "Technical Presentation", percent: 88, color: "#ec4899" },
    { name: "Time Management", percent: 85, color: "#6366f1" }
  ];

  const currentSkills = skillCategory === "technical" ? technicalSkills : softSkills;

  return (
    <section id="skills" className={`skills-section reveal ${isVisible ? "active" : ""}`}>
      {/* Visual glow backdrop */}
      <div className="skills-backdrop-glow" />

      <div className="container">
        <div className="section-header">
          <span className="badge">Technical Arsenal</span>
          <h2>Skills &amp; Expertise</h2>
          <p>
            A comprehensive breakdown of my software technologies, programming languages, system libraries, and core professional soft skills.
          </p>
        </div>

        {/* Tab Swiper */}
        <div className="skills-tabs">
          <button
            onClick={() => setSkillCategory("technical")}
            className={`skills-tab-btn ${skillCategory === "technical" ? "active" : ""}`}
          >
            Technical Stack
          </button>
          <button
            onClick={() => setSkillCategory("soft")}
            className={`skills-tab-btn ${skillCategory === "soft" ? "active" : ""}`}
          >
            Professional Strengths
          </button>
        </div>

        {/* Grid layout */}
        <div className="skills-grid">
          {currentSkills.map((skill, idx) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percent={skill.percent}
              color={skill.color}
              delay={idx * 40}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
