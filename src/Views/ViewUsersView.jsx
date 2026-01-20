import React, { useContext } from "react";
import UserTable from "../Tables/UserTable";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const ViewUsersView = () => {
  const { users, deleteUser, editRow } = useContext(UserContext);
  const navigate = useNavigate();

  const handleEditRow = (user) => {
    editRow(user);
    navigate("/add-user");
  };

  return (
    <div className="view-users-container">
      <h5>View Users</h5>
      <UserTable
        users={users}
        deleteUser={deleteUser}
        editRow={handleEditRow}
      />
    </div>
  );
};

export default ViewUsersView;
