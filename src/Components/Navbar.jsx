import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import LoginFormModal from "../Pages/LoginFormModal";
import SignupFormModal from "../Pages/SignupFormModal";
import "../assets/styles/Nav.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <div className="fixed-top">
      {/* Modals */}
      <LoginFormModal show={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <SignupFormModal show={showSignupModal} onClose={() => setShowSignupModal(false)} />

      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" style={{ maxWidth: "160px", height: "100px" }} />
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="w-100 px-3 py-2">
              {/* Search and Login/Signup */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-2">
                <input
                  placeholder="Search"
                  className="custom-search-input mb-2 mb-md-0 me-md-3 w-100 w-md-auto"
                />
                <div className="d-flex">
                  <button className="btn me-2" style={{backgroundColor:"#FF7A51"}}  onClick={() => setShowLoginModal(true)}>
                    Login
                  </button>
                  <button className="btn btn-outline-danger" onClick={() => setShowSignupModal(true)}>
                    Signup
                  </button>
                </div>
              </div>

              {/* Dropdowns and Cart */}
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center">
                <div className="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                  <DropdownMenu label="Shop By Pets" open={open} setOpen={setOpen} links={["dog", "cat", "fish", "bird"]} labelClass="text-success fw-bold" />
                  <DropdownMenu  label="Shop By Category" open={open2} setOpen={setOpen2} links={["food", "toys", "accessories", "clothing"]} columns={2} />
                  <DropdownMenu className="text-white" label="Shop By Brand" open={open3} setOpen={setOpen3} links={["pedigree", "whiskas", "drools", "royal canin"]} />
                </div>

                <div className="d-flex align-items-center">
                  <CiLocationOn className="location" />
                  <input placeholder="Search location" className="delivery-input mx-2" />
                  <FiShoppingCart className="cart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

function DropdownMenu({ label, open, setOpen, links, columns = 1, }) {
  const groupedLinks = Array.from({ length: columns }, (_, i) =>
    links.slice(i * (links.length / columns), (i + 1) * (links.length / columns))
  );

  return (
    <div className="dropdown position-relative">
      <button
        className="btn dropdown-menus d-flex align-items-center"
        onClick={() => setOpen(!open)} // Toggle dropdown
      >
        {label} <RiArrowDropDownLine className="arrow" />
      </button>
      {open && (
        <ul className="dropdown-menu d-flex show mt-2 p-2">
          {groupedLinks.map((group, i) => (
            <div className="col p-2" key={i}>
              {group.map((item) => (
                <li key={item}>
                  <Link className="nav-dropp-listes" to={`/${item}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
