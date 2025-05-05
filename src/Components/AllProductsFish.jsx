import React from "react";
import { Outlet } from "react-router-dom";
import fishbanner from "../assets/images/Rectangle 42.png"
// import fishbanner from "../assets/images/Rectangel 42.png "
export default function AllProductsFish() {
  return (
    <div  style={{ marginTop: "110px" }}>
      <div className="containerxl">
        <img src={fishbanner} className="img-fluid w-100" alt="Dog Banner" />
      </div>
        <Outlet></Outlet>
    </div>
  );
}
