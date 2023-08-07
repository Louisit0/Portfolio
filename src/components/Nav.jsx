import { Link } from "react-router-dom";

const Nav = ({
  togglerDrawer,
  drawerOpen,
  setDrawerContent,
  toggleDarkMode,
  darkMode,
}) => {
  const togglerDrawerContent = () => {
    togglerDrawer();
    setDrawerContent("navigation");
  };

  return (
    <nav className="flex flex-col lg:flex-row w-full py-6 px-8 md:px-16 lg:px-0 text-black dark:text-white">
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
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
