import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BsHouseDoorFill, BsCodeSlash, BsPersonFill } from "react-icons/bs";

const Nav = ({ togglerDrawer, drawerOpen }) => {
  return (
    <header className="w-full py-6 top-0 bg-base-300 z-50">
      <nav className="md:mx-14 mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex justify-between flex-row">
          <Link to={"/"} className="text-2xl my-auto ml-4 font-bold md:ml-0">
            <span className="text-warning p-2 mr-1">Luis.dev</span>
          </Link>
          <label className="swap swap-rotate mr-4 md:hidden">
            {/* this hidden checkbox controls the state  */}
            <input
              id="my-drawer-4"
              onClick={togglerDrawer}
              type="checkbox"
              defaultChecked={drawerOpen}
            />

            {/* hamburger icon */}
            <svg
              className="fill-current text-warning"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
        </div>
        <ul className="hidden flex-row md:flex md:w-1/4">
          <li className="w-full flex">
            <a
              onClick={togglerDrawer}
              className="py-3 px-4 hover:bg-base-100 rounded-lg active:text-base active:bg-base-300 transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center md:my-auto md:px-0"
              href="#About"
            >
              About
            </a>
          </li>
          <li className="w-full flex">
            <a
              onClick={togglerDrawer}
              className="py-3 px-4 hover:bg-base-100 rounded-lg active:text-base active:bg-base-300 transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center md:my-auto md:px-0"
              href="#Projects"
            >
              Projects
            </a>
          </li>
          <li className="w-full flex">
            {/*  -- color warning --
            className="py-3 px-4 hover:bg-base-200 rounded-lg active:text-black active:bg-warning transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center" */}
            <a
              onClick={togglerDrawer}
              className="py-3 px-4 hover:bg-base-100 rounded-lg active:text-base active:bg-base-300 transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center md:my-auto md:mr-4 md:px-0"
              href="#Contact"
            >
              Contact
            </a>
          </li>
          <a
            href="#"
            className="btn btn-outline btn-warning w-1/2 mx-auto mt-10 md:my-auto md:w-auto "
          >
            Resume
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
