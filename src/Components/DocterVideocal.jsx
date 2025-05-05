import React from "react";
import "../assets/styles/DocterVideocal.css";
import  bigd  from "../assets/images/ddcall.png"
import smalld from "../assets/images/minidoctor.png"

function DocterVideocal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div
          className="modal-content p-4 rounded-4 shadow-lg"
          style={{ backgroundColor: "#FF7F50", position: "relative" }}
        >
          {/* Header */}
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold fs-3">
              Your first general behaviour consult is on us.
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="container-fluid">
            <div className="row ">
                <div className="col-8">
                    <img src={bigd} className=" dimg img-fluid"></img>
                </div>
                <div className="col-4  " style={{marginTop:"160px"}} >
                    <img src={smalld} className="dimg img-fluid"></img>
                </div>
            </div>

          </div>

          {/* You can add more modal-body content here */}
        </div>
      </div>
    </div>
  );
}

export default DocterVideocal;
