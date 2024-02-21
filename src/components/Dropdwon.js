import React, { useState } from "react";
const Dropdown = ({handleClickDropdown,dropdownValues,Active1,InActive1,item}) => {
  return (
    <div>
        <div className="dropdown">
          <button
            className="btn bg-transparent dropdown-toggle " //px-2 p-0
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ fontSize: "12px" }} 
          >
            {dropdownValues.dropdownValues[item.id] || "Select"}
            
          </button>
          <ul className="dropdown-menu" style={{ fontSize: "11px" }}>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleClickDropdown("Active", item)}
              >
                {Active1}
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleClickDropdown("inActive", item)}
              >
                {InActive1}
              </a>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Dropdown;
