import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import Model from "../components/Modal";
import Input from "../components/Input";
import LableField from "../components/LableField";
// import Dropdown from "../components/Dropdwon";

const Dashboard = () => {
  const [user, setUser] = useState([]); // State get method
  const header = ["NAME", "EMAIL", "GENDER", "STATUS"]; //table header show details
  const [inputValues, setInputValues] = useState({
    // State inputs for post method
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  const [id, setId] = useState();
  const [show, setShow] = useState(false); //add show state
  const [editShow, setEditShow] = useState(false); //edit show state
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const edithandleClose = () => setEditShow(false);
  const editHandleShow = (val) => {
    setEditShow(true);
    setInputValues({
      name: val.name,
      email: val.email,
      gender: val.gender,
      status: val.status,
    });
    console.log(val, "......................");
    setId(val.id);
  };
  const handelChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value }); //e.target.value
    // console.log(inputValues);
  };
  const editHandleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const getValue = () => {
    axios
      .get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorization:
            "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c",
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };
  useEffect(() => {
    getValue();
  }, [inputValues]); //auto triger on post value
  const postValue = () => {
    axios
      .post("https://gorest.co.in/public/v2/users", inputValues, {
        headers: {
          Authorization:
            "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c",
        },
      })
      .then((response) => {
        console.log("Post request successful:", response.data);
        handleClose(); //use to close
        setInputValues({
          // Clear input fields
          name: "",
          email: "",
          gender: "",
          status: "",
        });
        // setUser([...user, response.data]);   // Add the new user data to the users state
        // alert("success");
      })
      .catch((error) => {
        console.error("Post request failed:", error);
        // alert("Not success")
      });
  };
  const putValue = () => {
    axios
      .put(`https://gorest.co.in/public/v2/users/${id}`, inputValues, {
        headers: {
          Authorization:
            "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c",
        },
      })
      .then((res) => {
        setEditShow(false);
        getValue();
      });
  };
  const deleteValue = (id) => {
    axios
      .delete(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
          Authorization:
            "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c",
        },
      })
      .then(() => {
        getValue();
        alert("success ....");
      });
  };
  return (
    <>
      <div className="text-center my-1">
        <h2>User Detail's</h2>
      </div>
      <div className="card my-5 me-3">
        <Table
          type="text"
          // onChangeInput={mddd} //search bar
          OnclickAddUser={handleShow} //add show on model
          onclickEdit={editHandleShow} //edit show on model
          onClickDelete={deleteValue} //delete tha row or data
          adduser="ADD USER"
          headerColumn={header}
          user={user}
        />
        {/* <NameOnly user={user}/> */}
        <Model
          show={show}
          title="Add User"
          button1="Cancel"
          button2="Submit"
          onclick1={postValue} //api call
          onClick={handleClose}
          onHide={handleClose}
          className="m-4"
          body={
            <form>
              <div>
                <div className="row">
                  <div className="col-3 py-2">
                    <LableField Name="NAME" />
                  </div>
                  <div className="col-9">
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Name..."
                      handelInputChange={(e) => handelChange(e)}
                      value={inputValues.name}
                      name1="name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 py-2">
                    <LableField Name="EMAIL ID" />
                  </div>
                  <div className="col-9">
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Email..."
                      handelInputChange={(e) => handelChange(e)}
                      value={inputValues.email}
                      name1="email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 py-2">
                    <LableField Name="GENDER" />
                  </div>
                  <div className="col-9">
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Gender..."
                      handelInputChange={(e) => handelChange(e)}
                      value={inputValues.gender}
                      name1="gender"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-3 py-2">
                    <LableField Name="STATUS" />
                  </div>
                  <div className="col-9">
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Status..."
                      handelInputChange={(e) => handelChange(e)}
                      value={inputValues.status}
                      name1="status"
                    />
                  </div>
                </div>
              </div>
            </form>
          }
        />
        <Model
          show={editShow} // Use separate state for edit method
          title="Edit User"
          button1="Cancel"
          button2="Save"
          onClick={edithandleClose}
          onHide={edithandleClose}
          onclick1={putValue}
          className="m-4"
          body={
            <form>
              <div>
                <LableField Name="Name" />
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Name..."
                  handelInputChange={(e) => editHandleChange(e)}
                  value={inputValues.name} // Display current value on Name
                  name1="name"
                />
              </div>
              <div>
                <LableField Name="EMAIL ID" />
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Email..."
                  handelInputChange={(e) => editHandleChange(e)}
                  value={inputValues.email} // Display current value on Email
                  name1="email"
                />
              </div>
              <div>
                <LableField Name="GENDER" />
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Gender..."
                  handelInputChange={(e) => editHandleChange(e)}
                  value={inputValues.gender} // Display current value
                  name1="gender"
                />
              </div>
              <div>
                <LableField Name="STATUS" />
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Status..."
                  handelInputChange={(e) => editHandleChange(e)}
                  value={inputValues.status} // Display current value
                  name1="status"
                />
              </div>
            </form>
          }
        />
      </div>
    </>
  );
};
export default Dashboard;
