import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routeList } from "../../routes";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [routes, setRoutes] = useState(routeList);
  const [isShow, setIsShow] = useState(false);

  const handleHideMenu = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
  };

  return (
    <>
      <nav className="flex justify-between items-center h-20 z-10">
        <div>
          <Link to="/" className="text-4xl tracking-wider">
            MARVEL
          </Link>
        </div>

        <div className="hidden sm:w-1/2 sm:flex sm:justify-evenly">
          {routes.map((route, index) => (
            <Link key={index.toString()} to={route.path}>
              {route.name}
            </Link>
          ))}
        </div>

        <div className="sm:hidden">
          <a href="/" onClick={handleHideMenu} className="cursor-pointer ">
            <AiOutlineMenu className="text-2xl" />
          </a>
        </div>
      </nav>

      {isShow ? (
        <div
          onClick={handleHideMenu}
          className="sm:hidden h-screen fixed top-0 left-0 text-white w-screen "
        >
          <div
            onClick={() => {}}
            className="flex flex-col bg-blue-500 w-40 items-end h-screen px-10 py-10"
          >
            {routes.map((route, index) => (
              <Link className="mb-4" key={index.toString()} to={route.path}>
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
