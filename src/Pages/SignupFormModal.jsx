import React, { useState } from "react";
import "../assets/styles/Log.css";
import Swal from 'sweetalert2'
import { useEffect } from "react";
function SignupFormModal({ show, onClose }) {
  if (!show) return null;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some((u) => u.email === email);

    if (exists) {
      setError("Email already exists!");
    } else {
      const fullName = `${firstName} ${lastName}`;
      users.push({ name: fullName, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      Swal.fire({
        icon: "success",
        title: `Login Successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
      setError("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      onClose();
    }
  };
 
  


  return (
    <div className="modal d-block signup-modal-custom" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div
          className="modal-content p-4 rounded-4 shadow-lg text-center"
          style={{ backgroundColor: "#FF7F50" }}
        >
          {/* Modal Header */}
          <div className="modal-header border-0">
            <h5 className="modal-title mx-auto fw-bold fs-3">Create Account</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          {/* Google Button */}
          <div className="mb-3">
            <button className="btn btn-light w-100 fw-semibold d-flex align-items-center justify-content-center shadow-sm">
              <img
                src="https://img.icons8.com/color/16/google-logo.png"
                alt="google"
                className="me-2"
              />
              Sign up with Google
            </button>
          </div>

          <div className="fw-bold">OR</div>

          {/* Form without scroll */}
          <form onSubmit={handleSignup} className="text-start mt-3">
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
              <label className="form-label fw-semibold">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email id</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-100 fw-bold text-dark"
              style={{ backgroundColor: "#FFD966" }}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupFormModal;
