import React from "react";
import "../assets/styles/Husky.css"
const TraitBar = ({ label, value, max = 5 }) => {
  const filled = Array(value).fill("filled");
  const empty = Array(max - value).fill("empty");

  return (
    <div className="text-center mb-4">
      <div className="d-flex justify-content-center align-items-center gap-1 mb-2">
        {[...filled, ...empty].map((type, index) => (
          <div
            key={index}
            className={`rounded-pill border ${type === "filled" ? "bg-orange" : "bg-white"} ${type === "empty" ? "border-orange" : "border-orange"}`}
            style={{
              width: "35px",
              height: "20px",
              borderWidth: "2px",
            }}
          ></div>
        ))}
      </div>
      <div className="fw-semibold">{label}</div>
    </div>
  );
};

export default TraitBar;
