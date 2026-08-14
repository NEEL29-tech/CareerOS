import React from "react";
import "./Hackathons.css";
import Navbar from "../../../components/Navbar/Navbar";

const hackathons = [
  {
    id: "01",
    title: "Hackathon Readiness",
    level: "Beginner",
    description:
      "Prepare yourself for hackathons with problem-solving, teamwork, and time-management skills.",
    topics: ["Problem Solving", "Teamwork", "Time Management"],
    progress: 70,
    button: "Continue",
  },
  {
    id: "02",
    title: "Project Ideas",
    level: "Beginner",
    description:
      "Explore practical project ideas that help you build skills and strengthen your portfolio.",
    topics: ["Web Development", "AI & ML", "Full Stack"],
    progress: 50,
    button: "Explore Projects",
  },
  {
    id: "03",
    title: "Open Source",
    level: "Intermediate",
    description:
      "Learn how to contribute to open-source projects and collaborate with developers.",
    topics: ["Git & GitHub", "Contributing", "Collaboration"],
    progress: 30,
    button: "Start Learning",
  },
  {
    id: "04",
    title: "Pitching & Presentation",
    level: "Intermediate",
    description:
      "Learn how to present your ideas clearly and confidently in hackathons and interviews.",
    topics: ["Pitching", "Presentation", "Communication"],
    progress: 20,
    button: "Start Learning",
  },
];

function Hackathons() {
  return (
    <div className="hackathons-page">
        <Navbar/>
      <div className="hackathons-header">
        <h1>Build. Compete. Create.</h1>

        <p>
          Build real-world projects, participate in hackathons, and create a
          portfolio that gets noticed.
        </p>
      </div>

      <div className="hackathons-grid">
        {hackathons.map((item) => (
          <div className="hackathon-card" key={item.id}>
            <div className="hackathon-top">
              <span className="hackathon-number">{item.id}</span>

              <span
                className={`hackathon-level ${item.level.toLowerCase()}`}
              >
                {item.level}
              </span>
            </div>

            <div className="hackathon-content">
              <h2>{item.title}</h2>

              <p>{item.description}</p>
            </div>

            <div className="hackathon-topics">
              {item.topics.map((topic, index) => (
                <span key={index}>{topic}</span>
              ))}
            </div>

            <div className="hackathon-progress-section">
              <div className="hackathon-progress-bar">
                <div
                  className="hackathon-progress-fill"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>

              <span>{item.progress}%</span>
            </div>

            <button className="hackathon-button">
              {item.progress === 100
                ? "Review Topic →"
                : `${item.button} →`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hackathons;