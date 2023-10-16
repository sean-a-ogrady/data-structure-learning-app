import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import AddStructureForm from "./routes/addStructureForm";
import StructuresList from "./routes/structuresList";

const url = "http://localhost:3000/structures";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/add",
        element: <AddStructureForm />,
      },
      {
        path: "/data-structures",
        element: <StructuresList />,
        loader: async () => fetch(url).then(res => res.json())
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
