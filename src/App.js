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
  const [activeView, setActiveView] = useState("addUser");

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
    setActiveView("addUser"); // Switch to form view when editing
  };

  return (
    <div className="app-wrapper">
      {/* Left Sidebar */}
      <nav className="sidebar">
        <h4 className="sidebar-title">Menu</h4>
        <ul className="sidebar-menu">
          <li 
            className={`sidebar-menu-item ${activeView === "addUser" ? "active" : ""}`}
            onClick={() => setActiveView("addUser")}
          >
            ➕ Add User
          </li>
          <li 
            className={`sidebar-menu-item ${activeView === "viewUser" ? "active" : ""}`}
            onClick={() => setActiveView("viewUser")}
          >
            👥 View Users
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <div className="container main-container">
          <h2 className="page-title">CRUD Operations</h2>
          
          {activeView === "addUser" && (
            <>
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
            </>
          )}

          {activeView === "viewUser" && (
            <div className="view-users-container">
              <h5>View Users</h5>
              <UserTable
                users={users}
                deleteUser={deleteUser}
                editRow={editRow}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
