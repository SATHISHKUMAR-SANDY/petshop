// components/CustomDropdown.js
import React, { useState } from "react";

function CustomDropdown({ label, options, selected, onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="custom-dropdown me-md-3">
      <div
        className="dropdown-toggle-box"
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        tabIndex={0}
      >
        {selected || label}
        <span className="arrow">▼</span>
      </div>
      {open && (
        <ul className="dropdown-menu-list show">
          {options.map((opt) => (
            <li key={opt} onClick={() => { onSelect(opt); setOpen(false); }}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomDropdown;
