import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";
import { GetUserData } from "./api";
const User = () => {
  // let users = useContext(UserContext);
  let [userdata, setUserData] = useState([]);
  
  useEffect(async () => {
    let users = await GetUserData();
    setUserData(...userdata, users.data);
  }, []);


  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link to="/CreateUser"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create Users
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>EMail</th>
                  {/* <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>EMail</th>
                  {/* <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th> */}
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {
                  userdata.map((user) => {
                    return <tr>
                    <td>
                      <Link to="/Profile/:id" exact="true">{user.name}</Link>
                    </td>
                    <td>{user.email}</td>
                    {/* <td>C 137</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td> */}
                    <td><Link to={`/EditUser/${user.name}`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i class="fas fa-download fa-sm text-white-50"></i> Edit
          </Link></td>
                  </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
