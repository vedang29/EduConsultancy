// src/components/Signup.js
import React from "react";
import GoogleLogo from "../assets/Google.png"; 
import FacebookLogo from "../assets/Facebook.png"; 
import ArtImage from "../assets/Art.jpg";
import "./Auth.css"; // We'll create a CSS file to style this

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Get Started!</h2>
        <p>Sign up now and begin shaping your educational future.</p>
        <form>
            <p>Username</p>
          <input type="text" placeholder="XYZ" name="username" required />
          <p> Email</p>
          <input type="email" placeholder="Example@email.com" name="email" required />
          <p>Password</p>
          <input type="password" placeholder="At least 8 characters" name="password" required />
          <button type="submit" className="auth-button" >Sign Up</button>
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
          Already have an account? <a href="/signin">Sign in</a>
        </p>
      </div>
      <div className="auth-image">
      <img src={ArtImage} alt="Art" />
      </div>
    </div>
  );
};

export default Signup;
