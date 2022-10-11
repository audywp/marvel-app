import Comics from "../pages/Comics";
import Event from "../pages/Events";
import Series from "../pages/Series";

export const routeList = [
  {
    name: "Home",
    path: "/",
    element: <Event />,
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
