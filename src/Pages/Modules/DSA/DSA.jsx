import React from "react";
import "./DSA.css";
import Navbar from "../../../components/Navbar/Navbar";

function DSA() {
  const topics = [
    {
      title: "Arrays",
      description: "Learn the basics of arrays and solve common problems.",
      level: "Beginner",
      progress: 100,
    },
    {
      title: "Strings",
      description: "Master string manipulation and problem-solving techniques.",
      level: "Beginner",
      progress: 80,
    },
    {
      title: "Linked Lists",
      description: "Understand nodes, pointers, and linked list operations.",
      level: "Intermediate",
      progress: 45,
    },
    {
      title: "Stacks & Queues",
      description: "Learn LIFO and FIFO data structures with practical problems.",
      level: "Intermediate",
      progress: 20,
    },
    {
      title: "Trees",
      description: "Explore binary trees, BSTs, traversals, and tree problems.",
      level: "Intermediate",
      progress: 0,
    },
    {
      title: "Graphs",
      description: "Understand graph traversal and common graph algorithms.",
      level: "Advanced",
      progress: 0,
    },
    {
      title: "Dynamic Programming",
      description: "Build strong problem-solving skills with DP techniques.",
      level: "Advanced",
      progress: 0,
    },
    {
      title: "Sorting & Searching",
      description: "Master important sorting and searching algorithms.",
      level: "Intermediate",
      progress: 0,
    },
  ];

  return (
    <div className="dsa-page">
      <Navbar/>
      {/* Hero Section */}
      <section className="dsa-hero">
        <div className="dsa-hero-content">
          <span className="dsa-badge">Technical Preparation</span>

          <h1>
            Data Structures
            <br />
            <span>& Algorithms.</span>
          </h1>

          <p>
            Master problem-solving, algorithms, and core computer
            science fundamentals for technical interviews and placements.
          </p>

          <div className="dsa-buttons">
            <button className="primary-btn">
              Start Learning
            </button>

            <button className="secondary-btn">
              Practice Problems
            </button>
          </div>
        </div>

        {/* Progress Card */}
        <div className="dsa-progress-card">
          <p>Your DSA Progress</p>

          <h2>32%</h2>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "32%" }}
            ></div>
          </div>

          <div className="progress-info">
            <span>12 Topics</span>
            <span>4 Completed</span>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="dsa-topics">
        <div className="section-heading">
          <span>Learning Path</span>

          <h2>Master DSA step by step.</h2>

          <p>
            Follow the learning path from fundamentals to
            advanced problem-solving.
          </p>
        </div>

        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div className="topic-card" key={index}>

              <div className="topic-top">
                <span className="topic-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={`level ${topic.level.toLowerCase()}`}>
                  {topic.level}
                </span>
              </div>

              <h3>{topic.title}</h3>

              <p>{topic.description}</p>

              <div className="topic-progress">
                <div className="topic-progress-bar">
                  <div
                    className="topic-progress-fill"
                    style={{ width: `${topic.progress}%` }}
                  ></div>
                </div>

                <span>{topic.progress}%</span>
              </div>

              <button className="topic-btn">
                {topic.progress === 0
                  ? "Start Topic →"
                  : topic.progress === 100
                  ? "Review Topic →"
                  : "Continue →"}
              </button>

            </div>
          ))}
        </div>
      </section>

      {/* Practice Section */}
      <section className="dsa-practice">

        <div>
          <span className="dsa-badge">Practice</span>

          <h2>
            Turn knowledge
            <br />
            into problem-solving.
          </h2>

          <p>
            Practice coding questions based on difficulty,
            topic, and interview patterns.
          </p>
        </div>

        <div className="practice-stats">

          <div>
            <strong>85+</strong>
            <span>Problems</span>
          </div>

          <div>
            <strong>25</strong>
            <span>Easy</span>
          </div>

          <div>
            <strong>40</strong>
            <span>Medium</span>
          </div>

          <div>
            <strong>20</strong>
            <span>Hard</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default DSA;