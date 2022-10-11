import { createBrowserRouter } from "react-router-dom";
import Character from "../pages/Character";
import Comics from "../pages/Comics";
import Event from "../pages/Events";
import Series from "../pages/Series";
import Stories from "../pages/Stories";

export const routeList = [
  {
    name: "Event",
    path: "/",
    element: <Event />,
  },
  {
    name: "Character",
    path: "/character",
    element: <Character />,
  },

  {
    name: "Stories",
    path: "/stories",
    element: <Stories />,
  },
  {
    name: "Series",
    path: "/series",
    element: <Series />,
  },
  {
    name: "Comics",
    path: "/comics",
    element: <Comics />,
  },
];
