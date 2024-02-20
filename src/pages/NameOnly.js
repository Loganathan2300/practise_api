import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import Model from "../components/Modal";
import Input from "../components/Input";
import LableField from "../components/LableField";

const itemPage = 5;

const NameOnly = () => {
  const [user, setUser] = useState([]); // State variables for get method
  const [filteredUser, setFilteredUser] = useState([]); // State variable for filtered user list
  const [header] = useState(["NAME", "EMAIL", "GENDER", "STATUS"]); // Table header show details
  const [inputValues, setInputValues] = useState({
    // State variables for form inputs for post method
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  // const [id, setId] = useState();
  // const [show, setShow] = useState(false); // Add show state
  // const [editShow, setEditShow] = useState(false); // Edit show state

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
        setFilteredUser(res.data); // Initialize filteredUser with all users initially
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []); // Fetch users on component mount

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  // Function to filter users based on name
  const filterUsersByName = (name) => {
    const filteredUsers = user.filter((u) =>
      u.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredUser(filteredUsers);
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    const name = e.target.name;
    if (e.target.checked) {
      // Add user to filtered list
      filterUsersByName(name);
    } else {
      // Remove user from filtered list
      setFilteredUser(filteredUser.filter((u) => u.name !== name));
    }
  };

  // Function to reset filtered user list
  const resetFilter = () => {
    setFilteredUser(user);
  };
  // Rest of your code...
  return (
    <div>
      <div className="card my-5 me-3">
      <div className="sidebar">
      <h4 className="px-2 py-2">Filter by Name:</h4>
      <input
        type="text"
        placeholder="Enter name"
        className="mx-2"
        value={inputValues.name}
        onChange={(e) => {
          handleInputChange(e);
          filterUsersByName(e.target.value);
        }}
      />
      <button onClick={resetFilter} className="px-2">Reset Filter</button>
      <ul>
        {user.map((u) => (
          <li key={u.id}>
            <input
              type="checkbox"
              name={u.name}
              checked={filteredUser.some((fu) => fu.name === u.name)}
              onChange={handleCheckboxChange}
            />
            {u.name}
          </li>
        ))}
      </ul>
    </div>
    <Table
      type="text"
      // OnclickAddUser={handleShow}
      // onclickEdit={editHandleShow}
      // onClickDelete={deleteValue}
      adduser="ADD USER"
      headerColumn={header}
      user={filteredUser} // Pass filteredUser instead of user
    />
    {/* Modals and other components */}
  </div>
  </div>
  )
}
 export default NameOnly
