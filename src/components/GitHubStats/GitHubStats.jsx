import React, { useState, useEffect } from "react";
import { GitFork, Star, Book, Terminal } from "lucide-react";
import { Github } from "../Icons";
import "./GitHubStats.css";

export default function GitHubStats() {
  const username = "bhuvan1439";
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

    const el = document.getElementById("githubstats");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const repos = [
    {
      name: "aim-ops-1",
      description: "AI-driven manufacturing intelligence system optimizing industrial batch processes and energy patterns. Winner of 1st place in Yuvaan Hackathon.",
      stars: 5,
      forks: 1,
      language: "TypeScript",
      languageColor: "#3178c6",
      url: `https://github.com/${username}/aim-ops-1`
    },
    {
      name: "UpYield",
      description: "Trust-first FinTech platform unifying wealth management with real-time stock dashboards, PAN validations, and AI fraud checks.",
      stars: 4,
      forks: 0,
      language: "JavaScript",
      languageColor: "#f1e05a",
      url: `https://github.com/${username}/UpYield`
    },
    {
      name: "HappyTrip4",
      description: "Travel portal dedicated to Indian heritage, itinerary building, weather checks, Leaflet maps, and a custom CSS heritage look.",
      stars: 3,
      forks: 2,
      language: "JavaScript",
      languageColor: "#f1e05a",
      url: `https://github.com/${username}/HappyTrip4`
    },
    {
      name: "RAG-Assistant-",
      description: "Retrieval-Augmented Generation assistant leveraging LangChain, vector databases, and custom document embeddings.",
      stars: 2,
      forks: 0,
      language: "Python",
      languageColor: "#3572A5",
      url: `https://github.com/${username}/RAG-Assistant-`
    },
    {
      name: "empower_g",
      description: "Civic civic empowerment portal supporting local feedback aggregation, municipal issue reporting, and public voting registries.",
      stars: 3,
      forks: 1,
      language: "TypeScript",
      languageColor: "#3178c6",
      url: `https://github.com/${username}/empower_g`
    },
    {
      name: "CommunityPulse",
      description: "Civic engagement dashboard facilitating neighborhood feedback and localized problem resolution workflows.",
      stars: 2,
      forks: 0,
      language: "JavaScript",
      languageColor: "#f1e05a",
      url: `https://github.com/${username}/CommunityPulse`
    },
    {
      name: "git_workshop",
      description: "Freshmen student workshop guides, command reference sheets, and interactive labs for Git and GitHub workflow education.",
      stars: 10,
      forks: 4,
      language: "HTML",
      languageColor: "#e34c26",
      url: `https://github.com/${username}/git_workshop`
    }
  ];

  return (
    <section id="githubstats" className={`github-section reveal ${isVisible ? "active" : ""}`}>
      {/* Background shape */}
      <div className="github-glow" />

      <div className="container">
        <div className="section-header">
          <span className="badge">Git Activity</span>
          <h2>GitHub Profile Analytics</h2>
          <p>
            Real-time contribution history, statistics, and repositories directly pulled from my active development profile.
          </p>
        </div>

        <div className="github-visuals-container">
          {/* Contributions calendar - Orange themed (f05a28) */}
          <div className="git-calendar-card glass-card">
            <h3 className="git-card-title">
              <Terminal size={14} className="git-card-icon" />
              <span>Contributions Calendar</span>
            </h3>
            <div className="git-calendar-wrapper">
              <img
                src={`https://ghchart.rshah.org/f05a28/${username}`}
                alt="Sangam Bhuvan Reddy GitHub Contributions Calendar"
                className="git-calendar-img"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* Badges and statistics - Orange themed (f05a28) */}
          <div className="git-stats-grid">
            <div className="git-stats-card glass-card">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=f05a28&icon_color=ffffff&text_color=cbd5e1&border_color=ffffff00&hide_border=true&bg_color=00000000`}
                alt="Sangam Bhuvan Reddy General Stats"
                className="readme-stats-img"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            <div className="git-stats-card glass-card">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=f05a28&icon_color=ffffff&text_color=cbd5e1&border_color=ffffff00&hide_border=true&bg_color=00000000`}
                alt="Sangam Bhuvan Reddy Top Languages"
                className="readme-stats-img"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* Trophy Case */}
          <div className="git-trophy-card glass-card">
            <h3 className="git-card-title">
              <Book size={14} className="git-card-icon" />
              <span>GitHub Trophy Case</span>
            </h3>
            <div className="git-trophies-wrapper">
              <img
                src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=onedark&column=5&margin-w=10&margin-h=10&no-bg=true&no-frame=true`}
                alt="Sangam Bhuvan Reddy Trophies"
                className="git-trophies-img"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>
        </div>

        {/* Repositories */}
        <h3 className="repos-section-title">Popular Repositories</h3>
        <div className="repos-grid">
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="repo-card glass-card"
            >
              <div className="repo-header">
                <Github size={16} className="repo-github-icon" />
                <h4 className="repo-name">{repo.name}</h4>
              </div>

              <p className="repo-desc">{repo.description}</p>

              <div className="repo-footer">
                <span className="repo-lang-wrapper">
                  <span className="lang-dot" style={{ backgroundColor: repo.languageColor }} />
                  <span className="repo-lang">{repo.language}</span>
                </span>
                <div className="repo-metrics">
                  <span className="metric-item">
                    <Star size={11} />
                    {repo.stars}
                  </span>
                  <span className="metric-item">
                    <GitFork size={11} />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
