import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routeList } from "../../routes";

export default function Navbar() {
  const [routes, setRoutes] = useState(routeList);

  return (
    <nav className="flex justify-between items-center h-20">
      <div>
        <Link to="/" className="text-4xl tracking-wider">
          MARVEL
        </Link>
      </div>
      <div className="w-1/2 flex justify-evenly">
        {routes.map((route, index) => (
          <Link key={index.toString()} to={route.path}>
            {route.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
