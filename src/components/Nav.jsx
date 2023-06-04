import { Link } from "react-router-dom";

const Nav = ({ togglerDrawer, drawerOpen }) => {
  return (
    <nav
      className="flex flex-col lg:flex-row fixed top-0 w-full py-4 z-50"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="flex flex-row justify-between items-center h-full w-full max-w-5xl lg:mx-auto">
        <Link to={"/"} className="text-2xl my-auto mx-4 font-bold">
          <span className="text-white">Portfolio</span>
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
            className="px-3 py-1 border-2 border-white text-white rounded-2xl hover:text-black hover:bg-white"
          >
            Curriculum
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
