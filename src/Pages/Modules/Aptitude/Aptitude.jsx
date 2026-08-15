import React from "react";
import "./Aptitude.css";
import Navbar from "../../../Components/Navbar/Navbar";

function Aptitude() {
  const topics = [
    {
      title: "Percentages",
      description:
        "Master percentage calculations and solve common placement problems.",
      level: "Beginner",
      progress: 100,
    },
    {
      title: "Profit & Loss",
      description:
        "Learn cost price, selling price, discounts, and profit-loss problems.",
      level: "Beginner",
      progress: 70,
    },
    {
      title: "Time & Work",
      description:
        "Solve work efficiency, pipes, and combined work problems.",
      level: "Intermediate",
      progress: 40,
    },
    {
      title: "Time, Speed & Distance",
      description:
        "Build speed and accuracy with motion and distance-based questions.",
      level: "Intermediate",
      progress: 20,
    },
    {
      title: "Number System",
      description:
        "Understand divisibility, remainders, factors, and number properties.",
      level: "Intermediate",
      progress: 0,
    },
    {
      title: "Probability",
      description:
        "Learn probability concepts and solve placement-level questions.",
      level: "Advanced",
      progress: 0,
    },
    {
      title: "Permutation & Combination",
      description:
        "Master counting techniques and arrangement-based problems.",
      level: "Advanced",
      progress: 0,
    },
    {
      title: "Data Interpretation",
      description:
        "Improve your ability to analyze tables, charts, and graphs quickly.",
      level: "Intermediate",
      progress: 0,
    },
  ];

  return (
    <div className="aptitude-page">
      <Navbar/>
      {/* Hero */}
      <section className="aptitude-hero">
        <div className="aptitude-hero-content">

          <span className="aptitude-badge">
            PLACEMENT APTITUDE
          </span>

          <h1>
            Quantitative
            <br />
            <span>Aptitude.</span>
          </h1>

          <p>
            Build speed, accuracy, and confidence to crack
            aptitude tests in campus and off-campus placements.
          </p>

          <div className="aptitude-buttons">
            <button className="aptitude-primary-btn">
              Start Learning
            </button>

            <button className="aptitude-secondary-btn">
              Practice Quiz
            </button>
          </div>

        </div>

        {/* Progress */}
        <div className="aptitude-progress-card">

          <p>Your Aptitude Progress</p>

          <h2>28%</h2>

          <div className="aptitude-progress-bar">
            <div
              className="aptitude-progress-fill"
              style={{ width: "28%" }}
            ></div>
          </div>

          <div className="aptitude-progress-info">
            <span>12 Topics</span>
            <span>3 Completed</span>
          </div>

        </div>
      </section>


      {/* Topics */}
      <section className="aptitude-topics">

        <div className="aptitude-section-heading">

          <span>LEARNING PATH</span>

          <h2>
            Master aptitude step by step.
          </h2>

          <p>
            Practice important concepts commonly asked
            in placement aptitude tests.
          </p>

        </div>


        <div className="aptitude-topics-grid">

          {topics.map((topic, index) => (

            <div
              className="aptitude-topic-card"
              key={index}
            >

              <div className="aptitude-topic-top">

                <span className="aptitude-topic-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`aptitude-level ${topic.level.toLowerCase()}`}
                >
                  {topic.level}
                </span>

              </div>


              <h3>{topic.title}</h3>

              <p>{topic.description}</p>


              <div className="aptitude-topic-progress">

                <div className="aptitude-topic-progress-bar">

                  <div
                    className="aptitude-topic-progress-fill"
                    style={{
                      width: `${topic.progress}%`,
                    }}
                  ></div>

                </div>

                <span>{topic.progress}%</span>

              </div>


              <button className="aptitude-topic-btn">

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


      {/* Practice */}
      <section className="aptitude-practice">

        <div>

          <span className="aptitude-badge">
            PRACTICE
          </span>

          <h2>
            Improve your speed.
            <br />
            Increase your accuracy.
          </h2>

          <p>
            Take timed quizzes and practice questions
            designed around real placement examinations.
          </p>

        </div>


        <div className="aptitude-practice-stats">

          <div>
            <strong>150+</strong>
            <span>Questions</span>
          </div>

          <div>
            <strong>50</strong>
            <span>Easy</span>
          </div>

          <div>
            <strong>65</strong>
            <span>Medium</span>
          </div>

          <div>
            <strong>35</strong>
            <span>Hard</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Aptitude;