import React, { useContext, useState } from "react";
import { PostUserData } from "./api";
import  UserContext  from "./userContext";
// import PostUserData from './api';

const CreateUser = () => {

  let users = useContext(UserContext)
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let userData = {
    name: userName, email
  }

  return (
    <>
    <form onSubmit={async (e)=>{
      e.preventDefault();
      // {users.setUserList([...users.userList, userData])}
      await PostUserData(userData);
      alert(`User: ${userData.name} is added!`)
      setUserName("");
      setEmail("")
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input className="form-control" type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
          </div>
          <div className="col-lg-6">
            <label>E-Mail</label>
            <input className="form-control" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </div>
    </form>
    </>
  );
};

export default CreateUser;
