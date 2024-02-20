import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="vh-100 bg-secondary text-white py-3">
      <ul className="list-unstyled">
        <li className="pb-1 px-2">
          <span className="px-1">&#10095;</span>
          <Link
            to="/dashboard"
            className=" text-dark text-decoration-none fs-6 text-white"
            style={{ cursor: "pointer" }}
          >
            Dashboard
          </Link>
        </li>
        <li className="pb-1 px-2">
          <span className="px-1">&#10095;</span>
          <Link
            to="/name"
            className=" text-dark text-decoration-none fs-6 text-white"
            style={{ cursor: "pointer" }}
          >
            Name
          </Link>
        </li>
        <li className="pb-1 px-2">
          <span className="px-1">&#10095;</span>
          <Link
            to="/email"
            className=" text-dark text-decoration-none fs-6 text-white"
            style={{ cursor: "pointer" }}
          >
            Email
          </Link>
        </li>
        <li className="pb-1 px-2">
          <span className="px-1">&#10095;</span>
          <Link
            to="/gender"
            className=" text-dark text-decoration-none fs-6 text-white"
            style={{ cursor: "pointer" }}
          >
            Gender
          </Link>
        </li>
        <li className="pb-1 px-2">
          <span className="px-1">&#10095;</span>
          <Link
            to="/active"
            className=" text-dark text-decoration-none fs-6 text-white"
            style={{ cursor: "pointer" }}
          >
            Active
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
