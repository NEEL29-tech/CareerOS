import React from "react";
import "./Features.css";
function Features() {
  return (
    <section id="features" className="wrap features-section">

      <div className="section-head">
        <span className="eyebrow">The modules</span>
        <h2 className="display">Four systems. Running on you.</h2>
      </div>

      <div className="feature-grid">

        {/* Card 1 */}
        <div className="feature-card">

          <div className="feature-status">
            <span>module.skillgap</span>
            <span className="active">● ACTIVE</span>
          </div>

          <svg
            className="feature-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5647ff"
            strokeWidth="1.6"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>

          <h3>Skill Gap Tracker</h3>

          <p>
            Every quiz, mock test, and coding round feeds one map of where
            you're strong and where you're guessing.
          </p>

        </div>

        {/* Card 2 */}

        <div className="feature-card">

          <div className="feature-status">
            <span>module.roadmap</span>
            <span className="active">● ACTIVE</span>
          </div>

          <svg
            className="feature-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00c896"
            strokeWidth="1.6"
          >
            <path d="M4 19V9m7 10V4m7 15v-6" />
          </svg>

          <h3>Personalized Roadmap</h3>

          <p>
            Your plan shifts week to week—more time on what's dragging your
            score down, less on what you've already mastered.
          </p>

        </div>

        {/* Card 3 */}

        <div className="feature-card">

          <div className="feature-status">
            <span>module.interview</span>
            <span className="active">● ACTIVE</span>
          </div>

          <svg
            className="feature-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff9f1c"
            strokeWidth="1.6"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
          </svg>

          <h3>Interview & Coding Prep</h3>

          <p>
            Timed coding rounds, aptitude sets, and mock interviews scored
            against real placement patterns.
          </p>

        </div>

        {/* Card 4 */}

        <div className="feature-card">

          <div className="feature-status">
            <span>module.dashboard</span>
            <span className="active">● ACTIVE</span>
          </div>

          <svg
            className="feature-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5647ff"
            strokeWidth="1.6"
          >
            <rect x="3" y="3" width="7" height="9" rx="1.5" />
            <rect x="14" y="3" width="7" height="5" rx="1.5" />
            <rect x="14" y="12" width="7" height="9" rx="1.5" />
            <rect x="3" y="16" width="7" height="5" rx="1.5" />
          </svg>

          <h3>Placement Dashboard</h3>

          <p>
            One readiness score across every subject and skill so you always
            know exactly what to improve next.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;