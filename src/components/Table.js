import React from "react";
import { Icon } from "@iconify/react";
const Table = ({type,onChangeInput,OnclickAddUser,adduser,headerColumn,user,onclickEdit,onClickDelete}) => {
  return (
    <div className="col-lg-12 col-sm-12 col-md-12 ">
      <div className="">
        <div className="row ">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="row my-3">
              <div className="col-6">
                <input
                  type={type}
                  placeholder="Search"
                  className=" border-3 rounded-2 px-2 py- mx-2 p-0 w-50"
                  style={{ fontSize: "15px" }}
                  onChange={onChangeInput}
                />
              </div>
              <div className="col-6">
                <div className="text-end me-3">
                  <button
                    className="px-4 py-1 rounded-2 border-0 bg-secondary-subtle"
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
                        {user.map((item,id)=>(
                          <tr key={id}>
                            <td><button className="border-0 bg-transparent fs-6" onClick={()=>onclickEdit(item)}><Icon icon="clarity:edit-line" /></button></td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.status}</td>
                            <td><button className="border-0 bg-transparent fs-6" onClick={()=>onClickDelete(item.id)}><Icon icon="mdi-light:delete" /></button></td>
                          </tr>//()=>onClickDelete(user.id)
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-md-12 my-0 mb-2">
                <nav aria-label="Page navigation example">
                  <ul className="pagination  justify-content-center m-0">

                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
