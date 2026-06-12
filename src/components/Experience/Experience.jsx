import React, { useState, useEffect } from "react";
import { Calendar, Star, Briefcase } from "lucide-react";
import "./Experience.css";

export default function Experience() {
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

    const el = document.getElementById("experience");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "Full Stack Web Development Intern",
      company: "SprintM Technologies Pvt. Ltd.",
      duration: "2025 · 1 Month",
      colorClass: "accent-purple-border",
      accentColor: "var(--accent-purple)",
      description: "Immersed in the complete software development lifecycle, from UI wireframing to engineering backend server routers. Built features that optimized client-side load speeds.",
      network: "Backed by Startup India & AWS Partner Network",
      points: [
        "Developed responsive web dashboard apps using React, Node.js, and MongoDB.",
        "Created optimized component states, reducing initial paint delays by 15%.",
        "Configured modular utility hooks, improving component reusability across pages.",
        "Collaborated with project managers to debug APIs and draft system wireframes."
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git & GitHub"]
    },
    {
      role: "Machine Learning Intern",
      company: "Cognify",
      duration: "2025 · 1 Month",
      colorClass: "accent-rose-border",
      accentColor: "var(--accent-rose)",
      description: "Focused on clean data collection pipelines, exploratory data distribution profiles, and model performance reports.",
      network: "AI/ML Intern",
      points: [
        "Prepared, filtered, and normalized tabular features from unstructured raw sources.",
        "Mapped statistical correlations and distributions to flag training biases.",
        "Trained classification and regression estimators using Scikit-learn and XGBoost libraries.",
        "Engineered visual model benchmark dashboards to represent validation scores."
      ],
      skills: ["Python", "Machine Learning", "Data Preprocessing", "EDA", "Scikit-learn", "XGBoost"]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Future Interns",
      duration: "2024 · 1 Month",
      colorClass: "accent-cyan-border",
      accentColor: "var(--accent-cyan)",
      description: "Built responsive templates, managed server models, and connected interactive triggers with external API routers.",
      network: "Full Stack Intern",
      points: [
        "Designed responsive layout wireframes using CSS grid structures and modern flex systems.",
        "Integrated Express.js endpoints with Mongo client routers, validating secure exchanges.",
        "Utilized version control frameworks for clean merging and trunk branches.",
        "Participated in active team inspections to review system performance."
      ],
      skills: ["React.js", "HTML5 & CSS3", "JavaScript (ES6)", "Express.js", "MongoDB", "Git"]
    }
  ];

  return (
    <section id="experience" className={`experience-section reveal ${isVisible ? "active" : ""}`}>
      {/* Glow shapes */}
      <div className="experience-glow-left" />
      <div className="experience-glow-right" />

      <div className="container">
        <div className="section-header">
          <span className="badge">Work History</span>
          <h2>Internship Experience</h2>
          <p>
            Practical professional experience building full-stack web applications, integrating AI pipelines, and writing clean production code.
          </p>
        </div>

        <div className="timeline-container">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="timeline-items">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`timeline-item ${isEven ? "even-align" : "odd-align"}`}
                >
                  {/* Timeline circle node */}
                  <div className="timeline-node">
                    <div className="node-dot" />
                  </div>

                  {/* Spacer for symmetry */}
                  <div className="timeline-spacer" />

                  {/* Card wrapper */}
                  <div className="timeline-content-wrapper">
                    <div className={`experience-card glass-card ${exp.colorClass}`}>
                      <div className="card-top">
                        <div>
                          <h3 className="role-title">{exp.role}</h3>
                          <span className="company-name">{exp.company}</span>
                        </div>
                        <div className="duration-wrapper">
                          <span className="duration-text">
                            <Calendar size={12} />
                            {exp.duration}
                          </span>
                          {exp.network && (
                            <span className="network-badge">{exp.network}</span>
                          )}
                        </div>
                      </div>

                      <p className="experience-desc">"{exp.description}"</p>

                      <ul className="experience-points">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx}>
                            <Star size={12} className="bullet-star" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="experience-skills">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="skill-pill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
