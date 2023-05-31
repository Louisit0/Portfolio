import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BsHouseDoorFill, BsCodeSlash, BsPersonFill } from "react-icons/bs";

const Nav = ({ togglerDrawer, drawerOpen }) => {
  return (
    <header
      className="w-auto md:w-auto py-4 top-0 z-50 lg:w-1/2 lg:px-4 mx-auto"
      style={{ backgroundColor: "#121212" }}
    >
      <nav className=" flex flex-col lg:flex-row justify-between">
        <div className="flex justify-between flex-row">
          <Link to={"/"} className="text-2xl my-auto ml-4 font-bold md:ml-0">
            <span className="text-white p-2 mr-1">Portfolio</span>
          </Link>
          <label className="swap swap-rotate mr-4 lg:hidden">
            {/* this hidden checkbox controls the state  */}
            <input
              id="my-drawer-4"
              onClick={togglerDrawer}
              type="checkbox"
              defaultChecked={drawerOpen}
            />

            {/* hamburger icon */}
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-between w-3/5">
          <a
            onClick={togglerDrawer}
            className=" select-none cursor-pointer hover:text-warning active:text-warning transition-all"
            href="#Home"
          >
            Home
          </a>
          <a
            onClick={togglerDrawer}
            className=" select-none cursor-pointer hover:text-warning active:text-warning transition-all"
            href="#About"
          >
            About
          </a>
          <a
            onClick={togglerDrawer}
            className=" select-none cursor-pointer hover:text-warning active:text-warning transition-all"
            href="#Projects"
          >
            Projects
          </a>
          <a
            onClick={togglerDrawer}
            className=" select-none cursor-pointer hover:text-warning active:text-warning transition-all"
            href="#Contact"
          >
            Contact
          </a>
          <a
            href="#"
            className="btn btn-outline rounded-2xl w-1/2 mt-10 md:my-auto md:w-auto hover:bg-white"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
