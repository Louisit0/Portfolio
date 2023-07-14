import { Link } from "react-router-dom";

const Drawer = ({ drawerOpen, togglerDrawer }) => {
  return (
    <div className={`drawer ${drawerOpen ? "open" : ""}`}>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        onChange={togglerDrawer}
      />
      <div className="drawer-content">
        {/* Contenido del drawer */}
        <div className="hidden lg:flex flex-row items-center justify-between w-3/5">
          <Link
            to={"/about"}
            onClick={togglerDrawer}
            className="select-none cursor-pointer transition-all font-bold"
          >
            About me
          </Link>
          <Link
            to={"/techStack"}
            onClick={togglerDrawer}
            className="select-none cursor-pointer transition-all font-bold"
          >
            Tech stack
          </Link>
          <Link
            to={"/projects"}
            onClick={togglerDrawer}
            className="select-none cursor-pointer transition-all font-bold"
          >
            Projects
          </Link>
          <Link
            to={"/contact"}
            onClick={togglerDrawer}
            className="select-none cursor-pointer transition-all font-bold"
          >
            Contact
          </Link>
          <Link
            to={"/curriculum"}
            onClick={togglerDrawer}
            className="select-none cursor-pointer transition-all font-bold"
          >
            CV
          </Link>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
      </div>
    </div>
  );
};

export default Drawer;
