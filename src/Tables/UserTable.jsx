import React from "react";

const UserTable = (props) => {

  debugger;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button type="button" onClick={() => props.editRow(user)} className="btn btn-outline-warning">
                  Edit
                </button>
                <button type="button" onClick={() => props.deleteUser(user.id)} className="btn btn-outline-danger ml-3">
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
