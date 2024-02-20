import React, { useState } from "react";
const Dropdown = ({handleClickDropdown,dropdownValues,Active1,InActive1,item}) => {
//   //State variables for form inputs for dropdown
//   const [dropdownValues, setDropdownValues] = useState({});
//   //  Dropdown handler
//   const handleClickDropdown = (val, item) => {
//     setDropdownValues((prevValues) => ({
//       ...prevValues,
//       [item.id]: val,
//     }));
//   };
//  console.log(dropdownValues.dropdownValues[6562852],"gvhbjknm")
//  console.log(item);
  return (
    <div>
      <td>
        <div className="dropdown">
          <button
            className="btn bg-secondary-subtle dropdown-toggle " //px-2 p-0
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ fontSize: "13px" }}
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
      </td>
    </div>
  );
};

export default Dropdown;
