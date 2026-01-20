import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const usersData = [
    { id: 1, name: "Raja", username: "Mani " },
    { id: 2, name: "Arun", username: "Kumar" },
    { id: 3, name: "Senthil", username: "Genesh" },
  ];

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  
  const initialFormData = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        deleteUser,
        updateUser,
        editing,
        setEditing,
        currentUser,
        editRow
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
