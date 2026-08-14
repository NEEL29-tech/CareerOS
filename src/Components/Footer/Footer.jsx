import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">

        <div className="footer-grid">

          {/* Logo */}
          <div className="footer-col footer-about">
            <a href="#top" className="logo">
              <span className="logo-mark"></span>
              CareerOS
            </a>

            <p>
              The AI operating system that takes engineering students from
              Semester 1 to their first job.
            </p>
          </div>

          {/* Product */}
          <div className="footer-col">
            <h4>Product</h4>

            <a href="#features">Modules</a>
            <a href="#">For Colleges</a>
            <a href="#">Pricing</a>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>

            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h4>Legal</h4>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 CareerOS. System status: All modules operational.
          </span>

          <div className="socials">
            <a href="#">IG</a>
            <a href="#">LI</a>
            <a href="#">X</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;