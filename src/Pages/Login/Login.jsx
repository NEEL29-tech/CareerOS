import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Login Data:", formData);
    alert("Login successful!");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Left Side */}
        <div className="login-left">
          <div className="login-brand">
            <h1>LMS</h1>
            <p>Learn. Grow. Succeed.</p>
          </div>

          <div className="login-welcome">
            <h2>Welcome Back!</h2>
            <p>
              Continue your learning journey and unlock
              your potential with our courses.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="login-right">
          <div className="login-box">

            <h2>Login</h2>
            <p className="login-subtitle">
              Sign in to continue to your account
            </p>

            <form onSubmit={handleSubmit}>

              {/* Email */}
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Username */}
              <div className="input-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="input-group">
                <label>Password</label>

                <div className="password-box">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="input-group">
                <label>Confirm Password</label>

                <div className="password-box">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button type="submit" className="login-btn">
                Login
              </button>

            </form>

            {/* Divider */}
            <div className="divider">
              <span>OR</span>
            </div>

            {/* Google */}
            <button className="social-btn google-btn">
              <span className="google-icon">G</span>
              Continue with Google
            </button>

            {/* Apple / Mac */}
            <button className="social-btn apple-btn">
              <span className="apple-icon">●</span>
              Continue with Mac OS
            </button>

            <p className="signup-text">
              Don't have an account?
              <a href="/register"> Sign Up</a>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;