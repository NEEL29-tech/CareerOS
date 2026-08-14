import React from "react";
import "./ProblemSolution.css";
const ProblemSolution = () => {
  return (
    <section className="problem-section">
      <div className="section-head">
        <span className="eyebrow">Why it's different</span>

        <h2 className="display">
          Ten open tabs is not a career strategy.
        </h2>

        <p>
          Most students prep for placements across a dozen disconnected tools,
          with no single view of what's actually working.
        </p>
      </div>

      <div className="versus">
        {/* Current Way */}
        <div className="versus-card old">
          <span className="versus-tag">Right now</span>

          <h3 className="display">Scattered prep</h3>

          <div className="tab-list">
            <div className="tab-item">
              <span className="dot"></span>
              LeetCode for DSA, no idea what's next
            </div>

            <div className="tab-item">
              <span className="dot"></span>
              YouTube playlists, half-finished
            </div>

            <div className="tab-item">
              <span className="dot"></span>
              A WhatsApp group for "placement tips"
            </div>

            <div className="tab-item">
              <span className="dot"></span>
              No record of your actual weak spots
            </div>
          </div>
        </div>

        {/* CareerOS Way */}
        <div className="versus-card new">
          <span className="versus-tag">With CareerOS</span>

          <h3 className="display">One tracked system</h3>

          <div className="tab-list">
            <div className="tab-item">
              <span className="dot"></span>
              Every weak topic logged and revisited
            </div>

            <div className="tab-item">
              <span className="dot"></span>
              A roadmap that re-orders itself around you
            </div>

            <div className="tab-item">
              <span className="dot"></span>
              Mock interviews scored like the real thing
            </div>

            <div className="tab-item">
              <span className="dot"></span>
              One readiness score, updated daily
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;