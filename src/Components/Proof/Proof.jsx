import React from "react";
import "./Proof.css";
function Proof() {
  return (
    <section id="proof" className="proof-section">
      
      {/* Stats */}

      <div className="stats-bar">

        <div className="stat">
          <span className="num">22,000+</span>
          <span className="label">students on the roadmap</span>
        </div>

        <div className="stat">
          <span className="num">1.4M</span>
          <span className="label">practice questions solved</span>
        </div>

        <div className="stat">
          <span className="num">500+</span>
          <span className="label">companies' patterns mapped</span>
        </div>

        <div className="stat">
          <span className="num">2.6x</span>
          <span className="label">more mock interviews completed</span>
        </div>

      </div>

      {/* Heading */}

      <div className="section-head">
        <span className="eyebrow">Status Log</span>

        <h2 className="display">
          What students and placement cells are seeing
        </h2>
      </div>

      {/* Testimonials */}

      <div className="log">

        <div className="log-entry">

          <span className="log-status"></span>

          <p className="log-quote">
            I stopped guessing what to study next. It just told me my DSA was
            fine but my aptitude scores were tanking my readiness — so that's
            where I went.
            <span className="who">
              Rohit K. · Final Year, CSE
            </span>
          </p>

          <span className="log-tag">skillgap</span>

        </div>

        <div className="log-entry">

          <span
            className="log-status"
            style={{ background: "#5647ff" }}
          ></span>

          <p className="log-quote">
            Our placement cell used to run separate aptitude and mock interview
            drives. Now every student walks in with a readiness score we can
            actually act on.
            <span className="who">
              Dr. Meena S. · Training & Placement Officer
            </span>
          </p>

          <span className="log-tag">dashboard</span>

        </div>

        <div className="log-entry">

          <span
            className="log-status"
            style={{ background: "#ff9f1c" }}
          ></span>

          <p className="log-quote">
            The mock interviews were the first thing that actually made me
            nervous in a useful way. Real prep, not just flashcards.
            <span className="who">
              Ayesha P. · 3rd Year, ECE
            </span>
          </p>

          <span className="log-tag">interview</span>

        </div>

      </div>

    </section>
  );
}

export default Proof;