import React from "react";
import { Outlet } from "react-router-dom";
import bridbanner from "../assets/images/Rectangle 42-1.png"

export default function AllProductsbird() {
  return (
    <div  style={{ marginTop: "110px" }}>
      <div className="containerxl">
        <img src={bridbanner} className="img-fluid w-100" alt="Dog Banner" />
      </div>
        <Outlet></Outlet>
    </div>
  );
}
