import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login({ email, password });

    if (!success) {
      alert("Invalid email or password");
      return;
    }

    if (user?.role === "student") navigate("/student");
    else if (user?.role === "staff") navigate("/staff");
    else if (user?.role === "admin") navigate("/admin");
  };

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        {/* LEFT INFO PANEL */}
        <div className="auth-info">
          <h1>Sentra System</h1>
          <p>
            A secure incident reporting and safety management platform for
            educational institutions.
          </p>
          <ul>
            <li>✔ Secure login access</li>
            <li>✔ Role-based dashboards</li>
            <li>✔ Fast incident tracking</li>
          </ul>
        </div>

        {/* LOGIN CARD */}
        <form className="auth-card" onSubmit={handleSubmit}>
          <h2>🔐 Login</h2>
          <p className="auth-subtitle">
            Access your Sentra System account
          </p>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>

          <p className="auth-footer-text">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/")}>Register here</span>
          </p>
        </form>
      </div>

    </div>
  );
}
