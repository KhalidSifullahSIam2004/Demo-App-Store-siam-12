import React from "react";
import { NavLink } from "react-router";

const NavbarLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "font-semibold text-violet-600 underline" : "font-semibold"
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default NavbarLink;
