import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center">
      <span className="font-bold ">React 2022</span>
      <span>
        <NavLink to="/" className="mr-2">
          Products
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </span>
    </nav>
  );
};

export default Navigation;
