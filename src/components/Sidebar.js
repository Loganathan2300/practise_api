import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./Layout";

const Sidebar = () => {
  const [nameSubMenu, setNameSubMenu] = useState(false);
  const [emailSubMenu, setEmailSubMenu] = useState(false);
  const [genderSubMenu, setGenderSubMenu] = useState(false);
  // State variables for get method
  const {
    nameList,
    setNameList,
    emailList,
    setEmailList,
    genderList,
    setGenderList,
    filteredUser,
    setFilteredUser,
    user,
    setUser,
  } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fs = user?.filter((animal) => nameList?.includes(animal.name));
    setFilteredUser(fs);
  }, [nameList]);
  useEffect(() => {
    const emailId = user?.filter((animal) => emailList?.includes(animal.email));
    setFilteredUser(emailId);
  }, [emailList]);
  const handleCheckboxChange = (e) => {
    const checkedName = e.target.name;
    if (e.target.checked) {
      setNameList((prevNameList) => {
        if (!Array.isArray(prevNameList)) {
          return [checkedName];
        } else {
          return [...prevNameList, checkedName];
        }
      });
    } else {
      setNameList((prevNameList) => {
        if (!Array.isArray(prevNameList)) {
          return [];
        } else {
          return prevNameList.filter((name) => name !== checkedName);
        }
      });
      setFilteredUser(filteredUser.filter((u) => u.name !== e.target.name));
    }
  };
  const handleCheckboxChangeEmail = (e) => {
    const checkedEmail = e.target.name;
    if (e.target.checked) {
      setEmailList((prevEmailList) => {
        if (!Array.isArray(prevEmailList)) {
          return [checkedEmail];
        } else {
          return [...prevEmailList, checkedEmail];
        }
      });
    } else {
      setEmailList((prevEmailList) => {
        if (!Array.isArray(prevEmailList)) {
          return [];
        } else {
          return prevEmailList.filter((email) => email !== checkedEmail);
        }
      });
      setFilteredUser(filteredUser.filter((u) => u.email !== e.target.name));
    }
  };
  const handleCheckboxChangeGender = (e) => {
    const checkedGender = e.target.name;
    if (e.target.checked) {
      setGenderList((prevGenderList) => {
        if (!Array.isArray(prevGenderList)) {
          return [checkedGender];
        } else {
          return [...prevGenderList, checkedGender];
        }
      });
    } else {
      setGenderList((prevGenderList) => {
        if (!Array.isArray(prevGenderList)) {
          return [];
        } else {
          return prevGenderList.filter((gender) => gender !== checkedGender);
        }
      });
      setFilteredUser(filteredUser.filter((u) => u.gender !== e.target.name));
    }
  };
  const handleReset = () => {
    setNameList([]);
    setEmailList([]);
    setGenderList([]);
    setFilteredUser(user);
    navigate("/dashboard");
  };

  // Fetch user data from API
  const fetchUsers = () => {
    axios
      .get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorization:
            "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c",
        },
      })
      .then((res) => {
        setUser(res.data);
        // setFilteredUser(res.data); // Initialize filteredUser with all users initially
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []); // teiger on the get method

  return (
    <div className="vh-100 bg-secondary text-white py-3">
      <div className="row">
        <div className="col-6">
          <p className="mx-2">Filter</p>
        </div>
        <div className="col-6">
          <p className="mx-3" style={{ color: "blue" }}>
            Favorite
          </p>
        </div>
        <hr />
        <ul className="list-unstyled">
        <li className="pb-1 px-2">
          {/* <span className="px-1">&#10095;</span> */}
          <Link
            to="/dashboard"
            className=" text-dark text-decoration-none fs-5 text-white"
            style={{ cursor: "pointer" }}
          >
            Dashboard
          </Link>
          <span className="px-1">&#10095;</span>
        </li>
        <li
          className="pb-1 px-2"
          onClick={() => {
            setNameSubMenu(!nameSubMenu);
            navigate("/name", { state: { data: filteredUser } });
          }}
        >
          {/* <span className="px-1">&#10095;</span> */}
          <Link
            to="/name"
            className=" text-dark text-decoration-none fs-5 text-white"
            style={{ cursor: "pointer" }}
          >
            Name
          </Link>
          <span className="px-1">&#10095;</span>
        </li>
        <span>
          {nameSubMenu &&
            user.map((u) => (
              <p className="ms-3 mb-1" key={u.id}>
                <input
                  type="checkbox"
                  className="me-1"
                  name={u.name}
                  checked={nameList.includes(u.name)}
                  onChange={handleCheckboxChange}
                />
                {u.name}
              </p>
            ))}
        </span>
        <li
          className="pb-1 px-2"
          onClick={() => {
            setEmailSubMenu(!emailSubMenu);
            navigate("/email", { state: { data: filteredUser } });
          }}
        >
          {/* <span className="px-1">&#10095;</span> */}
          <Link
            to="/email"
            className=" text-dark text-decoration-none fs-5 text-white"
            style={{ cursor: "pointer" }}
          >
            Email
          </Link>
          <span className="px-1">&#10095;</span>
        </li>
        <span>
          {emailSubMenu &&
            user.map((u) => (
              <p className="ms-3 mb-1" key={u.id}>
                <input
                  type="checkbox"
                  className="me-1"
                  style={{fontSize:"6px"}}
                  name={u.email}
                  checked={emailList.includes(u.email)}
                  onChange={handleCheckboxChangeEmail}
                />
                <label style={{fontSize:"15px"}} className="text-wrap">{u.email}</label>  
              </p>
            ))}
        </span>
        <li
          className="pb-1 px-2"
          onClick={() => {
            setGenderSubMenu(!genderSubMenu);
            navigate("/gender", { state: { data: filteredUser } });
          }}
        >
          <Link
            to="/gender"
            className="text-dark text-decoration-none fs-5 text-white"
            style={{ cursor: "pointer" }}
          >
            Gender
          </Link>
          <span className="px-1">&#10095;</span>
        </li>
        <span>
          {genderSubMenu &&
            user.map((g) => (
              <p className="ms-3 mb-1" key={g.id}>
                <input
                  type="checkbox"
                  className="me-1"
                  name={g.gender}
                  checked={genderList.includes(g.gender)}
                  onChange={handleCheckboxChangeGender}
                />
                {g.gender}
              </p>
            ))}
        </span>
        <li className="pb-1 px-2">
          {/* <span className="px-1">&#10095;</span> */}
          <Link
            to="/active"
            className=" text-dark text-decoration-none fs-5 text-white"
            style={{ cursor: "pointer" }}
          >
            Active
          </Link>
          <span className="px-1">&#10095;</span>
        </li>
      </ul>
      <div className="row">
        <div className="col-2">
          <button
            className="btn btn-danger mx-5 my-5"
            onClick={handleReset}
            style={{ cursor: "pointer" }}
          >
            Reset
          </button>
        
        </div>
        </div>
      </div>
    </div>
     );
};

export default Sidebar;


