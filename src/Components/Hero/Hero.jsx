import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-content">

          <span className="hero-badge">
            AI Career Operating System
          </span>

          <h1>
            One <span>OS</span> for your
            <br />
            entire college
            <br />
            journey.
          </h1>

          <p>
            Track your skills, build your roadmap,
            prepare for placements and crack interviews —
            all from one dashboard.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Free
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>
          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-dashboard">

          <div className="window">

            <div className="window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="dashboard">

              <div className="score-card">
                <small>Placement Readiness</small>
                <h2>74%</h2>
              </div>

              <div className="progress">
                <p>DSA</p>
                <div className="bar">
                  <div className="fill dsa"></div>
                </div>
              </div>

              <div className="progress">
                <p>Aptitude</p>
                <div className="bar">
                  <div className="fill apt"></div>
                </div>
              </div>

              <div className="progress">
                <p>Resume</p>
                <div className="bar">
                  <div className="fill resume"></div>
                </div>
              </div>

              <div className="terminal">
                <span>$</span> Next task:
                Complete 2 mock interviews.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;