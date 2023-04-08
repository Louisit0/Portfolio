import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Nav from "../components/Nav";
import HomeCover from "../components/HomeCover";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Index = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const togglerDrawer = () => {
    if (window.innerWidth >= 768) return;
    setDrawerOpen(!drawerOpen);
    console.log(drawerOpen);
  };

  return (
    <>
      <div className="drawer drawer-end">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
          onChange={() => setDrawerOpen(!drawerOpen)}
        />
        <div className={`drawer-content ${drawerOpen ? "blur-sm" : ""}`}>
          <Nav togglerDrawer={togglerDrawer} drawerOpen={drawerOpen} />
          <div className="mx-6">
            <HomeCover />
            {/* <Skills /> */}
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

          <ul className=" p-4 pt-6 w-80 bg-base-100  flex flex-col">
            <label className="swap swap-rotate justify-end mb-20">
              {/* this hidden checkbox controls the state  */}
              <input
                id="my-drawer-4"
                onClick={togglerDrawer}
                type="checkbox"
                defaultChecked={drawerOpen}
              />

              {/* close icon */}
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            <li className="w-full flex">
              <a
                onClick={togglerDrawer}
                className="py-3 px-4 hover:bg-base-200 rounded-lg active:text-base active:bg-base-300 transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center"
                href="#Home"
              >
                Home
              </a>
            </li>
            <li className="w-full flex">
              <a
                onClick={togglerDrawer}
                className="py-3 px-4 hover:bg-base-200 rounded-lg active:text-base active:bg-base-300 transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center"
                href="#About"
              >
                About
              </a>
            </li>
            <li className="w-full flex">
              <a
                onClick={togglerDrawer}
                className="py-3 px-4 hover:bg-base-200 rounded-lg active:text-base active:bg-base-300 transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center"
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
                className="py-3 px-4 hover:bg-base-200 rounded-lg active:text-base active:bg-base-300 transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center"
                href="#Contact"
              >
                Contact
              </a>
            </li>
            <a
              href="#"
              className="btn btn-outline btn-warning w-1/2 mx-auto mt-10"
            >
              Resume
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;
