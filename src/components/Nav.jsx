import { Link } from "react-router-dom";

const Nav = ({ togglerDrawer, drawerOpen }) => {
  return (
    <nav className="flex flex-col lg:flex-row w-full py-4 h-nav-screen">
      <div className="flex flex-row justify-between items-center h-full w-full max-w-4xl lg:mx-auto">
        <Link to="/" className="my-auto font-bold text-xl ml-8 lg:ml-0">
          @louisit0
        </Link>
        <div className="hidden lg:flex flex-row items-center justify-between w-3/5">
          <Link
            to={"/about"}
            onClick={togglerDrawer}
            className=" select-none cursor-pointer transition-all  font-bold"
            href="#About"
          >
            About me
          </Link>
          <Link
            to={"/techStack"}
            onClick={togglerDrawer}
            className=" select-none cursor-pointer transition-all  font-bold"
            href="#About"
          >
            Tech stack
          </Link>
          <Link
            to={"/projects"}
            onClick={togglerDrawer}
            className=" select-none cursor-pointer transition-all  font-bold"
            href="#About"
          >
            Projects
          </Link>

          <Link
            to={"/contact"}
            onClick={togglerDrawer}
            className=" select-none cursor-pointer transition-all  font-bold"
            href="#About"
          >
            Contact
          </Link>

          <Link
            to={"/curriculum"}
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
