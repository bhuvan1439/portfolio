import React, { useState, useEffect } from "react";
import { Award, Star, Cpu, Shield, Sparkles, TrendingUp, Trophy } from "lucide-react";
import "./Achievements.css";

export default function Achievements() {
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

    const el = document.getElementById("achievements");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "1 🏆", label: "Hackathon Win", colorClass: "highlight-purple" },
    { value: "250+", label: "Teams Beaten", colorClass: "highlight-rose" },
    { value: "8+", label: "Hackathons Completed", colorClass: "highlight-cyan" },
    { value: "96%", label: "Steering Tech Savings", colorClass: "highlight-emerald" },
  ];

  const milestones = [
    {
      title: "🏆 Hackathon Winner — 1st Place",
      subtitle: "Yuvaan Hackathon (AIM-OPS)",
      desc: "Secured top position out of 250+ teams by conceptualizing and coding AIM-OPS, a real-time process monitoring system designed to map industrial telemetry and optimize energy loads.",
      badge: "250+ Teams",
      icon: <Award size={20} className="ach-icon-purple" />,
      borderClass: "ach-purple"
    },
    {
      title: "🏆 Smart India Hackathon Finalist",
      subtitle: "Team Echelon Minds",
      desc: "Represented VIT-AP University at the national level. Engineered TripLogger, a telemetry application analyzing background transit trip chaining for travel planning boards.",
      badge: "National Finalist",
      icon: <Star size={20} className="ach-icon-rose" />,
      borderClass: "ach-rose"
    },
    {
      title: "🚗 Adaptive Steering Headlight",
      subtitle: "IoT & Hardware Integration",
      desc: "Built a steering-responsive headlight retrofitting mass-market commuter cars at ₹3,500. Guided by Dr. Arunkumar Sivakumar. Projected to reduce blind-spot accidents by 25%.",
      badge: "96% Cost Save",
      icon: <Cpu size={20} className="ach-icon-emerald" />,
      borderClass: "ach-emerald"
    },
    {
      title: "🛡️ Capture The Flag (CTF)",
      subtitle: "Cybersecurity Competitions",
      desc: "Active competitor designing vulnerability scanners, executing binary analysis, and mapping system privilege escalations during university CTF hackathons.",
      badge: "CTF Player",
      icon: <Shield size={20} className="ach-icon-purple" />,
      borderClass: "ach-purple"
    },
    {
      title: "⚛️ Quantum Valley Hackathon 2025",
      subtitle: "APSCHE, IBM & TCS Collaboration",
      desc: "Participated in the deep tech challenge, mapping optimization workflows and exploring simulated quantum gates to model supply chain logistics.",
      badge: "Deep Tech",
      icon: <Sparkles size={20} className="ach-icon-cyan" />,
      borderClass: "ach-cyan"
    },
    {
      title: "📊 Google Analytics Certified",
      subtitle: "Digital Telemetry Credential",
      desc: "Demonstrated competence in deploying analytical tags, tracking user retention paths, setting up conversion triggers, and evaluating digital marketing funnels.",
      badge: "Certified Specialist",
      icon: <TrendingUp size={20} className="ach-icon-rose" />,
      borderClass: "ach-rose"
    }
  ];

  return (
    <section id="achievements" className={`achievements-section reveal ${isVisible ? "active" : ""}`}>
      <div className="container">
        <div className="section-header">
          <span className="badge">Recognition</span>
          <h2>Key Achievements</h2>
          <p>
            Honors, hackathon victories, and security credentials earned under competitive, fast-paced environments.
          </p>
        </div>

        {/* Highlight Stats Banner */}
        <div className="ach-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="ach-stat-card glass-card">
              <div className="ach-stat-bg-glow" />
              <h3 className={`ach-stat-val ${stat.colorClass}`}>{stat.value}</h3>
              <p className="ach-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Detailed Milestones */}
        <div className="ach-milestones-grid">
          {milestones.map((milestone, idx) => (
            <div key={idx} className={`ach-card glass-card ${milestone.borderClass}`}>
              <div className="ach-card-header">
                <div className="ach-icon-box">{milestone.icon}</div>
                <span className="ach-badge">{milestone.badge}</span>
              </div>
              <h3 className="ach-title">{milestone.title}</h3>
              <p className="ach-subtitle">{milestone.subtitle}</p>
              <p className="ach-desc">{milestone.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
