import React, { useState, useEffect } from "react";
import { GraduationCap, BookOpen, School, Calendar, Award } from "lucide-react";
import "./Education.css";

export default function Education() {
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

    const el = document.getElementById("education");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: "Integrated M.Tech in Software Engineering",
      institution: "VIT-AP University",
      year: "2024 – 2029",
      score: "CGPA: 7.0 / 10",
      status: "Currently Pursuing",
      colorClass: "edu-purple",
      icon: <GraduationCap size={22} className="edu-icon-purple" />,
      highlights: [
        "Specializing in database engineering structures, software architecture, and algorithm designs.",
        "Active student developer across campus coding leagues, engineering clubs, and hackathon teams."
      ]
    },
    {
      degree: "Intermediate (11th & 12th Standard)",
      institution: "BVK Junior College / Amaravathi IIT Academy",
      year: "2022 – 2024",
      score: "93.6%",
      status: "State Board (MPC Group)",
      colorClass: "edu-cyan",
      icon: <BookOpen size={22} className="edu-icon-cyan" />,
      highlights: [
        "Advanced course studies in Mathematics, Physics, and Chemistry (MPC).",
        "Trained extensively in algebraic algorithms, mathematical proofs, and analytical modeling."
      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Red Cherries School",
      year: "2022",
      score: "90%",
      status: "CBSE Board",
      colorClass: "edu-emerald",
      icon: <School size={22} className="edu-icon-emerald" />,
      highlights: [
        "Scored outstanding grades in school-level mathematics and physical sciences.",
        "Participated in school debates, science exhibitions, and athletic competitions."
      ]
    }
  ];

  return (
    <section id="education" className={`education-section reveal ${isVisible ? "active" : ""}`}>
      <div className="container">
        <div className="section-header">
          <span className="badge">Academic Journey</span>
          <h2>Education</h2>
          <p>
            Building a strong theoretical foundation in software systems, database engineering, and analytical problem-solving.
          </p>
        </div>

        <div className="edu-timeline">
          {/* Vertical connector track */}
          <div className="edu-timeline-line" />

          <div className="edu-timeline-items">
            {educationData.map((edu, idx) => (
              <div key={idx} className="edu-timeline-item">
                {/* Node icon */}
                <div className="edu-node-wrapper">
                  <div className="edu-node-glow" />
                  <div className="edu-node-icon">{edu.icon}</div>
                </div>

                {/* Content card */}
                <div className={`edu-card glass-card ${edu.colorClass}`}>
                  <div className="edu-card-header">
                    <div>
                      <h3 className="edu-degree">{edu.degree}</h3>
                      <p className="edu-inst">{edu.institution}</p>
                    </div>

                    <div className="edu-meta">
                      <span className="edu-year">
                        <Calendar size={12} />
                        {edu.year}
                      </span>
                      <span className="edu-status-badge">{edu.status}</span>
                    </div>
                  </div>

                  <ul className="edu-highlights">
                    {edu.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx}>{hl}</li>
                    ))}
                  </ul>

                  <div className="edu-score-row">
                    <span className="score-label">
                      <Award size={13} />
                      Grade / Achievement
                    </span>
                    <span className="score-val">{edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
