import React from "react";
import "./Reasoning.css";
import Navbar from "../../../Components/Navbar/Navbar";

function Reasoning() {
  const topics = [
    {
      number: "01",
      title: "Logical Puzzles",
      description:
        "Develop structured thinking and solve complex logic-based problems.",
      level: "Beginner",
      progress: 100,
    },
    {
      number: "02",
      title: "Syllogisms",
      description:
        "Learn statements, conclusions, and logical relationships.",
      level: "Beginner",
      progress: 70,
    },
    {
      number: "03",
      title: "Coding-Decoding",
      description:
        "Identify patterns and solve coding and decoding questions quickly.",
      level: "Intermediate",
      progress: 40,
    },
    {
      number: "04",
      title: "Blood Relations",
      description:
        "Understand family relationships and solve relation-based questions.",
      level: "Intermediate",
      progress: 20,
    },
    {
      number: "05",
      title: "Series & Patterns",
      description:
        "Improve pattern recognition through number, letter, and figure series.",
      level: "Intermediate",
      progress: 0,
    },
    {
      number: "06",
      title: "Reading Comprehension",
      description:
        "Improve reading speed, comprehension, and accuracy.",
      level: "Advanced",
      progress: 0,
    },
    {
      number: "07",
      title: "Grammar & Vocabulary",
      description:
        "Strengthen grammar, vocabulary, sentence correction, and usage.",
      level: "Beginner",
      progress: 0,
    },
    {
      number: "08",
      title: "Verbal Ability",
      description:
        "Practice sentence arrangement, completion, and verbal reasoning.",
      level: "Advanced",
      progress: 0,
    },
  ];

  return (
    <div className="reasoning-page">
      <Navbar/>
      {/* HERO */}
      <section className="reasoning-hero">

        <div className="reasoning-hero-content">

          <span className="reasoning-badge">
            ANALYTICAL PREP
          </span>

          <h1>
            Logical Reasoning
            <br />
            & <span>Verbal Ability.</span>
          </h1>

          <p>
            Sharpen your logical thinking, improve your
            communication skills, and build the accuracy
            needed for placement assessments.
          </p>

          <div className="reasoning-buttons">

            <button className="reasoning-primary-btn">
              Start Learning
            </button>

            <button className="reasoning-secondary-btn">
              Practice Quiz
            </button>

          </div>

        </div>


        {/* Progress Card */}

        <div className="reasoning-progress-card">

          <p>Your Reasoning Progress</p>

          <h2>32%</h2>

          <div className="reasoning-progress-bar">
            <div
              className="reasoning-progress-fill"
              style={{ width: "32%" }}
            ></div>
          </div>

          <div className="reasoning-progress-info">
            <span>16 Topics</span>
            <span>5 Completed</span>
          </div>

        </div>

      </section>


      {/* TOPICS */}

      <section className="reasoning-topics">

        <div className="reasoning-section-heading">

          <span>LEARNING PATH</span>

          <h2>
            Think better. Communicate better.
          </h2>

          <p>
            Practice the reasoning and verbal concepts
            frequently asked in placement assessments.
          </p>

        </div>


        <div className="reasoning-topics-grid">

          {topics.map((topic) => (

            <div
              className="reasoning-topic-card"
              key={topic.number}
            >

              <div className="reasoning-topic-top">

                <span className="reasoning-topic-number">
                  {topic.number}
                </span>

                <span
                  className={`reasoning-level ${topic.level.toLowerCase()}`}
                >
                  {topic.level}
                </span>

              </div>


              <h3>
                {topic.title}
              </h3>

              <p>
                {topic.description}
              </p>


              <div className="reasoning-topic-progress">

                <div className="reasoning-topic-progress-bar">

                  <div
                    className="reasoning-topic-progress-fill"
                    style={{
                      width: `${topic.progress}%`,
                    }}
                  ></div>

                </div>

                <span>
                  {topic.progress}%
                </span>

              </div>


              <button className="reasoning-topic-btn">

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


      {/* PRACTICE */}

      <section className="reasoning-practice">

        <div>

          <span className="reasoning-badge">
            DAILY PRACTICE
          </span>

          <h2>
            Train your brain.
            <br />
            Improve your speed.
          </h2>

          <p>
            Take short timed drills and build the
            accuracy needed to perform under pressure.
          </p>

        </div>


        <div className="reasoning-practice-stats">

          <div>
            <strong>200+</strong>
            <span>Questions</span>
          </div>

          <div>
            <strong>10</strong>
            <span>Min Drills</span>
          </div>

          <div>
            <strong>75%</strong>
            <span>Avg. Accuracy</span>
          </div>

          <div>
            <strong>20+</strong>
            <span>Practice Sets</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Reasoning;