import { Link } from "react-router-dom";

const Nav = ({ togglerDrawer, drawerOpen, setDrawerContent }) => {
  const togglerDrawerContent = () => {
    togglerDrawer();
    setDrawerContent("navigation");
  };

  return (
    <nav className="flex flex-col lg:flex-row w-full py-6 px-8 md:px-16 lg:px-0">
      <div className="flex flex-row justify-between items-center h-full w-full lg:mx-auto">
        <Link to="/" className="my-auto font-bold text-xl">
          @louisit0
        </Link>
        <label className="swap swap-rotate lg:hidden">
          {/* this hidden checkbox controls the state  */}
          <input
            id="my-drawer-4"
            onClick={togglerDrawerContent}
            type="checkbox"
            defaultChecked={drawerOpen}
          />

          {/* hamburger icon */}
          <svg
            className="fill-current"
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
            to={"/about"}
            className=" select-none cursor-pointer transition-all font-bold"
          >
            About me
          </Link>
          <Link
            to={"/techStack"}
            className=" select-none cursor-pointer transition-all font-bold"
            href="#About"
          >
            Tech stack
          </Link>
          <Link
            to={"/projects"}
            className=" select-none cursor-pointer transition-all  font-bold"
          >
            Projects
          </Link>

          <Link
            to={"/contact"}
            className=" select-none cursor-pointer transition-all  font-bold"
          >
            Contact
          </Link>

          <Link
            to={"/curriculum"}
            className=" select-none cursor-pointer transition-all  font-bold"
          >
            CV
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
