import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { HashRouter } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

const router = createHashRouter([
  {
    path: "/*",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
