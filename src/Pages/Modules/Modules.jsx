import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Modules.css";
import Navbar from "../../Components/Navbar/Navbar";

function Modules() {
  const navigate = useNavigate();

  return (
    <div className="modules-page">
      {/* HERO */}
      <Navbar/>
      <section className="modules-hero">
        <span className="modules-badge">LEARNING & PREPARATION</span>

        <h1>
          Everything you need
          <br />
          to become <span>placement ready.</span>
        </h1>

        <p>
          Build technical skills, sharpen your aptitude, improve your reasoning,
          and gain real-world experience through practical projects.
        </p>

        <div className="module-filters">
          <button className="filter active">All</button>
          <button className="filter">Technical</button>
          <button className="filter">Aptitude</button>
          <button className="filter">Competitions</button>
        </div>
      </section>

      {/* MODULES */}
      <section className="modules-section">
        <div className="modules-heading">
          <span>YOUR LEARNING PATH</span>

          <h2>Choose your module.</h2>
        </div>

        <div className="modules-grid">
          {/* DSA */}
          <div className="module-card">
            <div className="module-card-top">
              <span className="module-number">01</span>

              <span className="module-badge">Technical Prep</span>
            </div>

            <h3>Data Structures & Algorithms</h3>

            <p>Master problem solving, algorithms, and core CS fundamentals.</p>

            <div className="module-topics">
              <span>Arrays & Strings</span>
              <span>Linked Lists</span>
              <span>Trees & Graphs</span>
              <span>Dynamic Programming</span>
            </div>

            <Link to="/modules/dsa" className="module-btn">
              Explore Module →
            </Link>
          </div>

          {/* APTITUDE */}
          <div className="module-card">
            <div className="module-card-top">
              <span className="module-number">02</span>

              <span className="module-badge">Written Test</span>
            </div>

            <h3>Quantitative Aptitude</h3>

            <p>Build speed and accuracy for placement aptitude tests.</p>

            <div className="module-topics">
              <span>Percentages</span>
              <span>Time & Work</span>
              <span>Profit & Loss</span>
              <span>Probability</span>
            </div>

            <Link to="/modules/aptitude" className="module-btn">
              Explore Module →
            </Link>
          </div>

          {/* LOGICAL REASONING & VERBAL */}
          <div className="module-card">
            <div className="module-card-top">
              <span className="module-number">03</span>

              <span className="module-badge">Analytical</span>
            </div>

            <h3>Logical Reasoning & Verbal Ability</h3>

            <p>
              Improve logical thinking, reasoning, and verbal communication.
            </p>

            <div className="module-topics">
              <span>Puzzles</span>
              <span>Syllogisms</span>
              <span>Coding-Decoding</span>
              <span>Reading Comprehension</span>
            </div>

            <Link to="/modules/reasoning" className="module-btn">
              Explore Module →
            </Link>
          </div>

          {/* HACKATHONS */}
          <div className="module-card">
            <div className="module-card-top">
              <span className="module-number">04</span>

              <span className="module-badge">Practical Skills</span>
            </div>

            <h3>Hackathons & Real-World Projects</h3>

            <p>
              Build projects, participate in hackathons, and strengthen your
              portfolio.
            </p>

            <div className="module-topics">
              <span>Hackathon Readiness</span>
              <span>Project Ideas</span>
              <span>Open Source</span>
              <span>Pitching & Presentation</span>
            </div>

            <button
              className="module-btn"
              onClick={() => navigate("/modules/hackathons")}
            >
              Explore Module →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="modules-cta">
        <div>
          <span>BUILD YOUR FUTURE</span>

          <h2>
            Learn the skills.
            <br />
            Get the opportunity.
          </h2>

          <p>
            Follow a structured learning path and prepare yourself for your
            placement journey.
          </p>
        </div>

        <Link to="/login" className="cta-btn">
          Start Learning →
        </Link>
      </section>
    </div>
  );
}

export default Modules;
