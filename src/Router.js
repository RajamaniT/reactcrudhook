import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import AddUserView from "./Views/AddUserView";
import ViewUsersView from "./Views/ViewUsersView";
import { Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/add-user" replace />,
      },
      {
        path: "add-user",
        element: <AddUserView />,
      },
      {
        path: "view-users",
        element: <ViewUsersView />,
      },
    ],
  },
]);
