import React from "react";
import "../assets/styles/DocterVideocal.css";
import bigd from "../assets/images/ddcall.png";
import smalld from "../assets/images/minidoctor.png";
function Chatvet({ show, onClose }) {
  if (!show) return null;
  return (
    <>
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div
            className="modal-content p-4 rounded-4 shadow-lg"
            style={{ backgroundColor: "#FF7F50", position: "relative" }}
          >
            {/* Header */}
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold fs-3 text-black">
                Your first general behaviour consult is on us.
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="container-fluid">
              <textarea name="" id="" cols="90" rows="10"></textarea>

              <div>
                <input
                  placeholder="Send Mesage"
                  style={{
                    color: "black",
                    border: "1px black solid",
                    borderRadius: "10px",
                    width: "94%",
                    height: "50px",
                  }}
                ></input>
              </div>
            </div>

            {/* You can add more modal-body content here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatvet;
