import React from 'react';
import firstOne from "../assets/images/Screenshot (18) 1.png";
import Two from "../assets/images/Group_3566_1 1.png";
import "../assets/styles/Home.css";

export default function Consoltnow() {
  return (
    <div>
      {/* Section 1 */}
      <div className="container consult-container p-5 my-3">
        <div className="row align-items-center">
          <div className="consul1-col1 col-12 col-md-6">
            <p className='fs-3 fw-bold'>Speak to Behaviour <br />Expert Online</p>
            <p className='mt-5 fs-1'>Your First general behaviour<br />Consult is on us</p>
            <button className="consult-btn mt-md-5 btn fs-md-3 fs-6 fw-bolder">Consult Now</button>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={firstOne} className="img-fluid" alt="consult" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container consult-container p-5 my-5">
        <div className="row align-items-center">
          <div className="consul1-col1 col-12 col-md-6">
            <p className='fs-3 fw-bold'>Get instant advice <br />From our highly <br />Qualified vets</p>
            <p className='mt-5 fs-1'>Save time ,chat with vets</p>
            <button className="consult-btn mt-md-5 btn fs-md-3 fs-6 fw-bolder">Chat With a Vet</button>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={Two} className="img-fluid" alt="vet" />
          </div>
        </div>
      </div>
    </div>
  );
}
