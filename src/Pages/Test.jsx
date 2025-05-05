import React from "react";
import "../assets/styles/Log.css"; // Custom styles here

const LoginModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop-custom">
      <div className="login-modal-custom">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="text-center">Login</h2>

        <button className="google-btn">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="google-icon"
          />
          Sign in with Google
        </button>

        <div className="or-separator">OR</div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control custom-input" placeholder="Enter Your email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control custom-input" placeholder="Enter Your password" />
          <div className="text-end">
            <small className="forgot-password">Forget Password?</small>
          </div>
        </div>

        <button className="btn sign-in-btn">Sign in</button>

        <div className="text-center mt-3">
          <span>New User? </span>
          <a href="#" className="create-account-link">Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
