import React, { useState } from "react";

const AddUserForm = (props) => {
  const initalformstate = {
    id: null,
    name: "",
    username: ""    
  };

  const [user, setUser] = useState(initalformstate);

  const handleInputChnage = (event) => {
    debugger;
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });

    console.log(user);
  };

  const handleonsubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.username) return;
    debugger;
    props.adduser(user);
    console.log(user);
    setUser(initalformstate);
  };

  

  return (
    <form onSubmit={handleonsubmit}>
      <div className="form-group mt-3">
        <label className="form-label">User</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputUser"
          placeholder="User"
          value={user.name}
          name ="name"
          onChange={handleInputChnage}
        />
      </div>
      <div className="form-group mt-3">
        <label className="form-label">User Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputUserName"
          name ="username"
          value={user.username}
          onChange={handleInputChnage}
          placeholder="User Name"
        />
      </div>

      <button type="submit" className="btn btn btn-outline-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default AddUserForm;
