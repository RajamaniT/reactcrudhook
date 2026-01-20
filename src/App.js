import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserTable from "./Tables/UserTable";
import AddUserForm from "./Forms/AddUserForm";
import EditUserForm from "./Forms/EditUserForm";

function App() {
  const usersData = [
    { id: 1, name: "Raja", username: "Mani " },
    { id: 2, name: "Arun", username: "Kumar" },
    { id: 3, name: "Senthil", username: "Genesh" },
  ];
  const [users, setUsers] = useState(usersData);

  const initialFormData = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormData);

  const adduser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const updateUser = (id, updatedUser) => {
    SetEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    SetEditing(false);
  };

  const [editing, SetEditing] = useState(false);

  const editRow = (user) => {
    SetEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <div className="container main-container">
      <h2 className="page-title">CRUD operations</h2>
      {/* First Row - Add/Edit Users */}
      <div className="row">
        <div className="col-12">
          {editing ? (
            <div className="edit-user-container">
              <h5>Edit User</h5>
              <EditUserForm
                currentUser={currentUser}
                SetEditing={SetEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div className="add-user-container">
              <h5>Add Users</h5>
              <AddUserForm adduser={adduser} />
            </div>
          )}
        </div>
      </div>

      {/* Second Row - View Users */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="view-users-container">
            <h5>View Users</h5>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editRow={editRow}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
