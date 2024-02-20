import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "./Dropdwon";
import Pagination from "./Pagination";
// import Dropdown from "./Dropdwon";
const itemPage = 5;
const Table = ({type,OnclickAddUser,adduser,headerColumn,user,onclickEdit,onClickDelete}) => {
   //State variables for form inputs for dropdown
   const [dropdownValues, setDropdownValues] = useState({});
   //for pagechange code
   const [pageChange, setPageChange] = useState(1);
   //for use search type
   const [searchTerms, setSearchTeams] = useState("");
    // console.log(pageChange,"jbfjbjrbgjfb");

   const filterData = user.filter((item) =>
     Object.values(item).some((value) =>
       String(value).toLowerCase().includes(searchTerms.toLowerCase())
     )
   );  
 //for pagechange code start
   const pageLength = filterData.length;
   const totalPages = Math.ceil(pageLength / itemPage);
   const dataShowDetail = filterData.slice((pageChange - 1) * itemPage, pageChange * itemPage);
   console.log(dataShowDetail);
   const startingNumnber = (pageChange - 1) * itemPage + 1;
 
   let pages = [];
   for (let i = 1; i <= totalPages; i++) {
     pages.push(i);
   }
 //for pagechange code end
  //  Dropdown handler
   const handleClickDropdown = (val, item) => {
     setDropdownValues((prevValues) => ({
       ...prevValues,
       [item.id]: val,
     }));
   };
  //  console.log(user,"----------------------------")
  return (
    <div className="col-lg-12 col-sm-12 col-md-12 ">
      <div className="">
        <div className="row ">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="row my-3">
              <div className="col-6">
                <input                   //input component irukku..
                  type={type}
                  placeholder="Search"
                  className=" border-3 rounded-2 px-2 py-1 mx-2 p-0 w-50"
                  style={{ fontSize: "15px" }}
                  onChange={(e) => setSearchTeams(e.target.value)}
                  value={searchTerms}
                />
              </div>
              <div className="col-6">
                <div className="text-end me-3">
                  <button
                    className="px-4 py-2 rounded-2 border-0 bg-secondary-subtle"
                    style={{ fontSize: "13px" }} onClick={OnclickAddUser}
                  >
                    {adduser} 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100">
            <div className=" row">
              <div className="col-lg-12 col-sm-12 col-md-12 ">
                <div className="table-responsive rounded-3 m-2 mb-0">
                  <div
                    style={{
                      maxHeight: "300px",
                      overflowY: "auto",
                      fontSize: "13px",
                    }}
                  >
                    <table
                      className="table table-striped table-hover text-center table-responsive"
                      style={{ fontSize: "13px" }}
                    >
                      <thead className="table-secondary sticky-top ">
                        <tr>
                          <th>EDIT</th>
                          {headerColumn.map((item,i)=>(
                          <th key={i}>{item}</th>
                          ))}
                          <th>DELETE</th>
                          </tr>
                      </thead>
                      <tbody>
                        {dataShowDetail.map((item,id)=>(
                          <tr key={id}>
                            <td><button className="border-0 bg-transparent fs-6" onClick={()=>onclickEdit(item)}><Icon icon="clarity:edit-line" /></button></td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            {/* <td>{item.status}</td> */}
                            {/* <td>
                              <div className="dropdown">
                                <button
                                  className="btn bg-secondary-subtle dropdown-toggle "    //px-2 p-0
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  style={{ fontSize: "13px" }}
                                >
                                  {dropdownValues[item.id] || "Select"}
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  style={{ fontSize: "11px" }}
                                >
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                      onClick={() =>handleClickDropdown("Active", item)}
                                      >
                                      Active
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                      onClick={() => handleClickDropdown("inActive", item)}   
                                       > 
                                      InActive
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td> */}
                            <Dropdown
                                handleClickDropdown={handleClickDropdown}
                                dropdownValues={{dropdownValues}}
                                Active1="Active"
                                InActive1="InActive"
                                item={item}
                              />
                            {/* <Dropdown handleClickDropdown={handleClickDropdown} dropdownValues={dropdownValues} Active1="Active" InActive1="InActive" item={item}  /> */}
                            <td>
                              <button className="border-0 bg-transparent fs-6" onClick={()=>onClickDelete(item.id)}><Icon icon="mdi-light:delete" /></button>
                              </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
      <div className="col-lg-12 col-sm-12 col-md-12 my-1 mb-0">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {pages.map((pageNumber) => (
              <li key={pageNumber} className="page-item">
                <button className="page-link" onClick={() => setPageChange(pageNumber)}>
                  {pageNumber}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
            {/* <Pagination user={user} setPageChange={setPageChange} pageChange={pageChange} searchTerms={searchTerms}  /> */}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Table;
