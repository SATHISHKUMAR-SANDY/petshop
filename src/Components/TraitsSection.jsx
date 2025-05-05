// TraitsSection.jsx
import React from "react";
import TraitBar from "./TraitBar";

const TraitsSection = () => {
  return (
    <div className="container py-5">
      <h4 className="fw-bold mb-4">Traits</h4>
      <div className="row">
        <div className="col-md-4">
          <TraitBar label="Friendliness" value={5} />
        </div>
        <div className="col-md-4">
          <TraitBar label="Good with other dogs" value={5} />
        </div>
        <div className="col-md-4">
          <TraitBar label="Good with kids" value={5} />
        </div>
        <div className="col-md-4">
          <TraitBar label="Energy level" value={4} />
        </div>
        <div className="col-md-4">
          <TraitBar label="Barking tendencies" value={3} />
        </div>
        <div className="col-md-4">
          <TraitBar label="Playfulness" value={4} />
        </div>
      </div>
    </div>
  );
};

export default TraitsSection;
