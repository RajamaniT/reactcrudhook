import React, { useEffect, useState } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChnage = (event) => {
    debugger;
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleonsubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.username) return;
    debugger;
    props.updateUser(user.id, user);
    console.log(user);
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
          name="name"
          onChange={handleInputChnage}
        />
      </div>
      <div className="form-group mt-3">
        <label className="form-label">User Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputUserName"
          name="username"
          value={user.username}
          onChange={handleInputChnage}
          placeholder="User Name"
        />
      </div>

      <button type="submit" className="btn btn btn-outline-primary mt-3" style={{ marginRight: "10px" }}>
        Update User
      </button>
      <button
        type="submit"
        onClick={() => props.SetEditing(false)}
        className="btn btn btn-outline-primary mt-3"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
