import React from "react";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./Context/UserContext";
import { router } from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;


