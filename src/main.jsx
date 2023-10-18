import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import AddStructureForm from "./routes/addStructureForm";
import StructuresList from "./routes/structuresList";
import DataStructure from "./dataStructure";
import Homepage from "./routes/homepage";

const url = "http://localhost:3000/structures";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/add",
        element: <AddStructureForm url={url} />,
      },
      {
        path: "/data-structures",
        element: <StructuresList />,
        loader: async () => fetch(url).then(res => res.json()),
        children: [
          {
            path: ":structureId",
            element: <DataStructure />,
            loader: async ({params}) => {
              const structureData = await fetch(`${url}/${params.structureId.split("-")[0]}`)
                .then(res => res.json());
              return structureData;
            }
          }
        ]
      },
      {
        path: "/",
        element: <Homepage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
