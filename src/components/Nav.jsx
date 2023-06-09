import { Link } from "wouter";

const Nav = ({ togglerDrawer, drawerOpen }) => {
  return (
    <nav className="flex flex-col lg:flex-row w-full py-4">
      <div className="flex flex-row justify-between items-center h-full w-full max-w-4xl lg:mx-auto">
        <Link
          to="/"
          className="my-auto font-bold text-2xl md:text-xl ml-8 lg:ml-0"
        >
          @louisit0
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
            className="fill-current  mr-2 sm:mr-0"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
        <div className="hidden lg:flex flex-row items-center justify-between w-3/5">
          <Link
            to="/about"
            onClick={togglerDrawer}
            className=" select-none cursor-pointer transition-all  font-bold"
            href="#About"
          >
            About me
          </Link>
          <Link
            to="/projects"
            onClick={togglerDrawer}
            className=" select-none cursor-pointer transition-all  font-bold"
            href="#About"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={togglerDrawer}
            className=" select-none cursor-pointer transition-all  font-bold"
            href="#About"
          >
            Contact
          </Link>
          <Link
            to="/techStack"
            onClick={togglerDrawer}
            className=" select-none cursor-pointer transition-all  font-bold"
            href="#About"
          >
            Tech stack
          </Link>
          <Link
            to="/curriculum"
            onClick={togglerDrawer}
            className=" select-none cursor-pointer transition-all  font-bold"
            href="#About"
          >
            CV
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
