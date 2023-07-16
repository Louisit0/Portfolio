import { useState, createContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Drawer from "../components/Drawer";

export const TogglerDrawerContext = createContext(null);

export const Root = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const togglerDrawer = () => {
    setDrawerOpen(!drawerOpen);
    console.log(drawerOpen);
  };

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        onChange={() => setDrawerOpen(!drawerOpen)}
      />
      <div className={`drawer-content ${drawerOpen ? "blur-sm" : ""}`}>
        <div className="flex flex-col h-screen">
          <header>
            <Nav togglerDrawer={togglerDrawer} />
          </header>
          <main className="flex flex-row max-w-4xl mx-auto">
            <TogglerDrawerContext.Provider value={togglerDrawer}>
              <Outlet />
            </TogglerDrawerContext.Provider>
          </main>
          <Drawer drawerOpen={drawerOpen} togglerDrawer={togglerDrawer} />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <ul className="p-4 pt-4 w-80 flex flex-col bg-white">
          <label className="swap swap-rotate ml-auto mr-4 w-5 mb-20">
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
            <Link
              to={"/"}
              onClick={togglerDrawer}
              className="py-3 px-4 rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center"
            >
              Home
            </Link>
          </li>
          <li className="w-full flex">
            <Link
              to={"/about"}
              onClick={togglerDrawer}
              className="py-3 px-4 rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center"
            >
              About me
            </Link>
          </li>
          <li className="w-full flex">
            <Link
              to={"/techStack"}
              onClick={togglerDrawer}
              className="py-3 px-4 rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center"
            >
              Tech stack
            </Link>
          </li>
          <li className="w-full flex">
            <Link
              to={"/projects"}
              onClick={togglerDrawer}
              className="py-3 px-4 rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center"
            >
              Projects
            </Link>
          </li>
          <li className="w-full flex">
            <Link
              to={"/contact"}
              onClick={togglerDrawer}
              className="py-3 px-4 rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center"
            >
              Contact
            </Link>
          </li>
          <li className="w-full flex">
            <Link
              to={"/"}
              onClick={togglerDrawer}
              className="py-3 px-4 rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out select-none cursor-pointer mx-auto w-full text-center"
            >
              CV
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Root;
