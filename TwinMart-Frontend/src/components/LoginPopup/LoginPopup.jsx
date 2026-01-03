import React, { useState } from "react";
import "./LoginPopup.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currState, setCurrState] = useState("Login");
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <form className="login-container">
        <h2>{currState}</h2>
        {currState === "Login" ? null : (
          <input type="text" placeholder="Your Name" required />
        )}
        <input type="email" placeholder="Your Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <p className="terms">
          <input type="checkbox" required /> I agree to the Terms & Privacy Policy
        </p>

        {currState === "Login" ? (
          <p>
            Don’t have an account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Sign Up</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login</span>
          </p>
        )}

        <p className="back" onClick={() => navigate("/")}>
          ← Back to Home
        </p>
      </form>
    </div>
  );
};

export default Login;
