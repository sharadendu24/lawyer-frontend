import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (isLogin) {
      if (formData.email && formData.password) {
        // Simulate login success
        navigate("/survey");
      }
    } else {
      if (
        formData.email &&
        formData.password &&
        formData.confirmPassword &&
        formData.fullName
      ) {
        if (formData.password === formData.confirmPassword) {
          // Simulate signup success
          navigate("/survey");
        } else {
          alert("Passwords do not match!");
        }
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left side - Legal Aid Image */}
        <div className="login-image-section">
          <div className="legal-aid-image">
            <div className="image-placeholder">
              <div className="legal-icon">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L3 7L12 12L21 7L12 2Z"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 17L12 22L21 17"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 12L12 17L21 12"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2>Legal Aid Portal</h2>
              <p>
                Access to justice for all. Get legal assistance and support for
                your rights.
              </p>
            </div>
          </div>
          <div className="image-overlay">
            <h1>Welcome to Legal Aid</h1>
            <p>Empowering communities through accessible legal services</p>
            <ul className="features-list">
              <li>Free legal consultation</li>
              <li>Document assistance</li>
              <li>Court representation</li>
              <li>Legal awareness programs</li>
            </ul>
          </div>
        </div>

        {/* Right side - Login/Signup Form */}
        <div className="login-form-section">
          <div className="form-container">
            <div className="form-header">
              <h2>{isLogin ? "Sign In" : "Create Account"}</h2>
              <p>
                {isLogin
                  ? "Welcome back! Please sign in to your account."
                  : "Join us to access legal aid services."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                </div>
              )}

              <button type="submit" className="btn btn-primary login-btn">
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            <div className="form-footer">
              <p>
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  type="button"
                  className="toggle-form-btn"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
