import React, { useState } from "react";
import "../assets/styles/Footer.css";
import Logo from "../assets/images/logo.png";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DocterVideocal from "./docterVideocal";
import Chatvet from "./Chatvet";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [popshow, setpopshow] = useState(false);
  const [chatshow, setchatShow] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    
    <DocterVideocal show={popshow} onClose={() => setpopshow(false)} />
      <Chatvet show={chatshow} onClose={() => setchatShow(false)} />
    



      <footer className="container-fluid footer-Container text-white py-5">
  <div className="container">
    <div className="row align-items-start">
      {/* Logo Section - occupies less space */}
      <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start mb-4 mb-md-0">
        <img src={Logo} alt="Logo" className="img-fluid" style={{ maxWidth: "150px" }} />
      </div>

      {/* Main Links Section - more space */}
      <div className="col-12 col-md-9">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {/* ONLINE SHOPPING */}
          <div className="col">
            <h5>ONLINE SHOPPING</h5>
            <ul className="list-unstyled">
              <li role="button" onClick={()=>navigate("/dog/preventivicare")}>Dogs</li>
              <li  role="button" onClick={()=>navigate("/dog/preventivicare")}>Cats</li>
              <li role="button" onClick={()=>navigate("/dog/preventivicare")}>Fish</li>
              <li role="button" onClick={()=>navigate("/dog/preventivicare")}>Bird</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="col">
            <h5>QUICK LINKS</h5>
            <ul className="list-unstyled">
              <li role="button" onClick={() => setpopshow(true)}>Consult Now</li>
              <li role="button" onClick={() => setchatShow(true)}>Chat with vet</li>
              <li role="button" onClick={() => navigate("/about")}>About Us</li>
              <li role="button" onClick={() => navigate("/contactus")}>Contact Us</li>
            </ul>
          </div>

          {/* SOCIAL + CONTACT */}
          <div className="col">
            <h5>FOLLOW US</h5>
            <div className="d-flex gap-3 mb-3">
              <CiInstagram className="Footer-icons" />
              <CiFacebook className="Footer-icons" />
              <AiFillTwitterCircle className="Footer-icons" />
            </div>
            <h5>GET IN TOUCH</h5>
            <p><FaPhoneAlt className="me-2" /> 90909-23573</p>
            <p><MdEmail className="me-2" /> Pets@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    
    </>



  );
}

export default Footer;
