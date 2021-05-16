import React from "react";
import { useEffect, useState } from "react";
import { getUserByID, updateUserByID } from "./api";

const EditUser = (props) => {
  
  
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
  
    let userData = {
        name : userName, 
        email : userEmail
    }

    useEffect(async () => {
    let user = await getUserByID(props.match.params.userid);
    setUserName(user.data.name);
    setUserEmail(user.data.email);
  }, []);

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // {users.setUserList([...users.userList, userData])}
          await updateUserByID( props.params.match.userid, userData);
        //   alert(`User: ${userData.name} is added!`);
          setUserName("");
          setUserEmail("");
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label>E-Mail</label>
              <input
                className="form-control"
                type="text"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <button className="btn btn-primary">Edit User</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditUser;
