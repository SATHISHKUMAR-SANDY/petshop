import React from "react";
import "../assets/styles/ContactUs.css";
export default function ContactUs() {
  return (
    <>
      <div className="contact-us">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-question">Have a question or need assistance?</p>
        <p className="contact-message">
          Our friendly, pet-loving team will do their very best to help you out!
        </p>
      </div>

      <div className="container my-5">
        <div
          className="row  p-3"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
        >
          {/* Contact Information Column */}
          <div className="col-md-6 mb-4">
            <div
              className=" h-100"
              style={{
                backgroundColor: "#f8f9f",
              }}
            >
              <div className="card-body p-4">
                <h2
                  className="card-title mb-4"
                  style={{
                    color: "#2c3e50",
                    fontWeight: "600",
                    fontSize: "1.8rem",
                  }}
                >
                  Call us at:
                </h2>
                <p
                  className="mb-3"
                  style={{
                    fontWeight: "600",
                    fontSize: "1.5rem",
                  }}
                >
                  1800 - 1234 - 5678
                </p>
                <p
                  className="card-text"
                  style={{
                    color: "#7f8c8d",
                    fontSize: "1.1rem",
                  }}
                >
                  We are open Monday-Saturday,
                  <br />
                  9am to 9pm.
                </p>

                <h2
                  className="mt-5 mb-3"
                  style={{
                    color: "#2c3e50",
                    fontWeight: "600",
                    fontSize: "1.8rem",
                  }}
                >
                  For Support and Queries:
                </h2>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "1.2rem",
                  }}
                >
                  petstore@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-md-6">
            <div
              className="card border-0 shadow-sm"
              style={{
                backgroundColor: "#FF7A51",
                borderRadius: "15px",
              }}
            >
              <div className="card-body p-4">
                <h2
                  className="mb-4"
                  style={{
                    color: "#2c3e50",
                    fontWeight: "600",
                    fontSize: "1.8rem",
                  }}
                >
                  Send us a Message
                </h2>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="firstName"
                        className="form-label"
                        style={{
                          color: "#34495e",
                          fontWeight: "500",
                        }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        required
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #dfe6e9",
                          padding: "12px",
                        }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="lastName"
                        className="form-label"
                        style={{
                          color: "#34495e",
                          fontWeight: "500",
                        }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        required
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #dfe6e9",
                          padding: "12px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="email"
                        className="form-label"
                        style={{
                          color: "#34495e",
                          fontWeight: "500",
                        }}
                      >
                        Email ID
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #dfe6e9",
                          padding: "12px",
                        }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="phone"
                        className="form-label"
                        style={{
                          color: "#34495e",
                          fontWeight: "500",
                        }}
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #dfe6e9",
                          padding: "12px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="form-label"
                      style={{
                        color: "#34495e",
                        fontWeight: "500",
                      }}
                    >
                      Send Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      required
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #dfe6e9",
                        padding: "12px",
                      }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn px-4 py-2"
                    style={{
                      backgroundColor:"#EEC14C",
                      color: "white",
                      fontWeight: "600",
                      borderRadius: "8px",
                      position:"relative",
                      left:"200px",
                      border: "none",
                      fontSize: "1rem",
                      padding: "12px 24px",
                      boxShadow: "0 4px 6px rgba(52, 152, 219, 0.3)",
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
