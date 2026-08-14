import React from "react";
import "./Path.css";
function Path() {
  return (
    <section id="path" className="wrap path-section">
      <div className="section-head">
        <span className="eyebrow">Your four years, mapped</span>

        <h2 className="display">
          From Semester 1 to your first offer letter.
        </h2>

        <p>
          CareerOS doesn't hand you a static syllabus — it re-plans your path
          every time you finish a module or fall behind on one.
        </p>
      </div>

      <div className="rail-wrap">
        <div className="rail">

          <div className="rail-node">
            <div className="rail-dot">S1</div>
            <div className="rail-label">Foundations</div>
          </div>

          <div className="rail-node">
            <div className="rail-dot">S2</div>
            <div className="rail-label">Core CS</div>
          </div>

          <div className="rail-node">
            <div className="rail-dot">S3</div>
            <div className="rail-label">DSA Begins</div>
          </div>

          <div className="rail-node current">
            <div className="rail-dot">S4</div>
            <div className="rail-label">You are here</div>
          </div>

          <div className="rail-node pending">
            <div className="rail-dot">S5</div>
            <div className="rail-label">Aptitude</div>
          </div>

          <div className="rail-node pending">
            <div className="rail-dot">S6</div>
            <div className="rail-label">Mock Rounds</div>
          </div>

          <div className="rail-node pending">
            <div className="rail-dot">S7</div>
            <div className="rail-label">Applications</div>
          </div>

          <div className="rail-node pending">
            <div className="rail-dot">✓</div>
            <div className="rail-label">Placed</div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Path;