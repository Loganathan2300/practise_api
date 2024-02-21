import React, { createContext, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
export const UserContext = createContext();

const Layout = () => {
  const [nameList, setNameList] = useState([]); // State variable for filtered Name list
  const [emailList,setEmailList] = useState([])
  const [genderList, setGenderList] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]); // State variable for filtered user list
  const [user, setUser] = useState([]); // State variable for filtered userValue list
  return (
    <div>
      <UserContext.Provider
        value={{
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
        }}
      >
        <div className="row w-100">
          <div className="col-2 bg-secondary">
            <Sidebar />
          </div>
          <div className="col-10 ">
            <Outlet />
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default Layout;
