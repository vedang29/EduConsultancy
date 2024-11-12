// src/components/Signin.js
import React from "react";
import GoogleLogo from "../assets/Google.png"; 
import FacebookLogo from "../assets/Facebook.png"; 
import ArtImage from "../assets/Art.jpg"; // Import the image
import "./Auth.css";

const Signin = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Welcome Back!👋</h2>
        <p className="subtitle">Unlock Your Path to Success.</p>
        <p className="subtitle">Sign in to Begin Your Educational Journey</p><br></br>
        <form>
          <p>Username</p>
          <input type="email" placeholder="XYZ" name="email" required />
          <p>Password</p>
          <input type="password" placeholder="At least 8 characters" name="password" required />
          
          <p>
            <a href="/forgot-password" className="forgot-password-link">Forgot password?</a>
          </p>

          <button type="submit" className="auth-button">Sign In</button>
        </form>
        <div className="auth-alternatives">
          <div className="center-text">
            <p>Or</p>
          </div>

          <button className="google-button">
            <img src={GoogleLogo} alt="Google logo" className="logo" /> Sign in with Google
          </button>
          <button className="facebook-button">
            <img src={FacebookLogo} alt="Facebook logo" className="logo" /> Sign in with Facebook
          </button>
        </div>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
      <div className="auth-image">
        <img src={ArtImage} alt="Art" />
      </div>
    </div>
  );
};

export default Signin;
