import React from "react";

const CreateUser = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input className="form-control" type="text" />
          </div>
          <div className="col-lg-6">
            <label>E-Mail</label>
            <input className="form-control" type="text"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
