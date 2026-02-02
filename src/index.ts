import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import SingleAircraftDetails from "./views/SingleAircraft/SingleAircraftDetails";
import CompareAircrafts from "./views/compareAircrafts/CompareAircrafts";
import Sample from "./views/Sample/Sample";
import NotFound from "./views/NotFound/NotFound";
import NotAuthorized from "./views/NotAuthorized";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/:aircraft_name/",
    element: <SingleAircraftDetails />,
    errorElement: <NotFound />,
  },
  {
    path: "/compare/",
    element: <CompareAircrafts />,
    errorElement: <NotFound />,
  },
  { path: "/sample", element: <Sample /> },
  { path: "/not-found", element: <NotFound />, errorElement: <NotFound /> },
  {
    path: "/not-authorized",
    element: <NotAuthorized />,
    errorElement: <NotFound />,
  },
]);
root.render(<RouterProvider router={router} />);
