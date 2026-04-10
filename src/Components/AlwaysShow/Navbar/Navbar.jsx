import React from "react";
import logoImage from "../../../assets/images/logo.png";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import NavbarLink from "../../RepeatedCodes/NavbarLink";

const navItems = [
  {
    to: "/",
    children: "Home",
  },
  {
    to: "/allapps",
    children: "Apps",
  },
  {
    to: "/installedapps",
    children: "Installation",
  },
  {
    to: "/dashboard",
    children: "Dashboard",
  },
];
const Navbar = () => {
  return (
    <div className=" shadow bg-base-100">
      <div className="navbar container mx-auto py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((navItem, index) => (
                <NavbarLink key={index} to={navItem.to}>{navItem.children}</NavbarLink>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <img src={logoImage} className="w-10 h-10" />
            <p className="font-bold bg-linear-to-b from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">
              HERO.IO
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">
            {navItems.map((navItem, index) => (
              <NavbarLink key={index} to={navItem.to}>{navItem.children}</NavbarLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn font-semibold bg-linear-to-b from-[#632ee3] to-[#9f62f2] text-white">
            <FaGithub />
            Contribute
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
