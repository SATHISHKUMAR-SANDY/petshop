// LoginFormModal.js
import React, { useState } from "react";
import "../assets/styles/Log.css";
import Swal from 'sweetalert2'

function LoginFormModal({ show, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User Not Exist!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      Swal.fire({
        icon: "success",
        title: `Welcome back, ${user.name}!`,
        showConfirmButton: false,
        timer: 1500,
      });
    
      setError("");
      setEmail("");
      setPassword("");
      onClose(); // close modal
    }
    
  };

  if (!show) return null; // modal hidden

  return (
    <div className="modal d-block custom-login-modal" tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content p-4 rounded-4 shadow-lg text-center" style={{ backgroundColor: "#FF7F50" }}>
        <div className="modal-header border-0">
          <h5 className="modal-title mx-auto fs-3 fw-bold">Login</h5>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
  
        <div className="modal-body">
          {/* Google Sign-In Button */}
          <button className="btn btn-light w-100 mb-3 d-flex align-items-center justify-content-center shadow-sm">
            <img src="https://img.icons8.com/color/16/google-logo.png" alt="google" className="me-2" />
            Sign in with Google
          </button>
  
          <div className="text-center fw-bold mb-3">OR</div>
  
          {/* Login Form */}
          <form onSubmit={handleLogin}>
            {error && <div className="alert alert-danger">{error}</div>}
  
            <div className="mb-3 text-start">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your email"
                required
              />
            </div>
  
            <div className="mb-1 text-start">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your password"
                required
              />
            </div>
  
            <div className="text-end mb-3">
              <small className="text-dark">Forget Password?</small>
            </div>
  
            <button type="submit" className="btn w-100 fw-bold text-dark" style={{ backgroundColor: "#FFD966" }}>
              Sign in
            </button>
          </form>
  
          <div className="mt-3">
            <span>New User? </span>
            <a href="#" className="fw-bold text-dark">Create Account</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default LoginFormModal;
