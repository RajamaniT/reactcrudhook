import React, { useContext } from "react";
import AddUserForm from "../Forms/AddUserForm";
import EditUserForm from "../Forms/EditUserForm";
import { UserContext } from "../Context/UserContext";

const AddUserView = () => {
  const { editing, currentUser, setEditing, updateUser, addUser } = useContext(UserContext);

  return editing ? (
    <div className="edit-user-container">
      <h5>Edit User</h5>
      <EditUserForm
        currentUser={currentUser}
        SetEditing={setEditing}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div className="add-user-container">
      <h5>Add Users</h5>
      <AddUserForm adduser={addUser} />
    </div>
  );
};

export default AddUserView;
