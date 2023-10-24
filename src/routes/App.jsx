import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import About from "../pages/About";
import Skills from "../components/Skills";
import Contact from "../pages/Contact";
import HomeCover from "../pages/HomeCover";
import Projects from "../pages/Projects";
import projectsContent from "../utilities/ProjectContent";
import { BsGithub, BsGlobe } from "react-icons/bs";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const togglerDrawer = (content, projectId) => {
    setDrawerOpen(!drawerOpen);
    setDrawerContent(content);
    setSelectedProjectId(projectId);
  };

  return (
    <div
      className={darkMode ? "dark bg-black text-white" : "bg-white text-black"}
    >
      <div className="drawer drawer-end">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
          onChange={() => setDrawerOpen(!drawerOpen)}
        />
        <div className={`drawer-content ${drawerOpen ? "blur-sm" : ""}`}>
          <div>
            {/* <header className="w-full sticky top-0 z-50 mx-auto">
              <Nav
                togglerDrawer={togglerDrawer}
                setDrawerContent={setDrawerContent}
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
            </header> */}
            {/* Para que el nav y el main queden alineados quita el siguiente "mx-auto" */}
            <main>
              <Routes>
                {/* <Route
                  path="/"
                  element={<HomeCover togglerDrawer={togglerDrawer} />}
                ></Route>
                <Route path="/techStack" element={<Skills />}></Route>
                <Route path="/projects" element={<Projects />}></Route> */}
                <Route path="/about" element={<About />}></Route>
                <Route path="/" element={<Contact />}></Route>
              </Routes>
            </main>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          {drawerContent === "navigation" ? (
            <ul className="p-4 pt-4 w-full md:w-1/3 flex flex-col bg-white dark:bg-black">
              <label className="swap swap-rotate ml-auto mr-4 w-5 mb-10">
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
                <button onClick={toggleDarkMode} className="mx-auto py-3">
                  {darkMode ? (
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
              </li>
            </ul>
          ) : drawerContent === "projects" ? (
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 flex flex-col bg-white dark:bg-black">
              <div className="w-full flex justify-between py-4 px-3 text-black dark:text-white">
                <label className="swap swap-rotate flex flex-row">
                  {/* this hidden checkbox controls the state  */}
                  <input
                    id="my-drawer-4"
                    onClick={togglerDrawer}
                    type="checkbox"
                    defaultChecked={drawerOpen}
                    className=""
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                    />
                  </svg>
                </label>
                <label className="swap swap-rotate flex flex-row">
                  {/* this hidden checkbox controls the state  */}
                  <input
                    id="my-drawer-4"
                    onClick={togglerDrawer}
                    type="checkbox"
                    defaultChecked={drawerOpen}
                  />
                  <p className="font-bold text-xs self-center">Cerrar</p>
                </label>
              </div>
              <hr className="mx-3" />
              <div className="flex flex-col px-3">
                {projectsContent
                  .filter((project) => project.id === selectedProjectId)
                  .map((project) => (
                    <div key={project.id} className="mt-5">
                      <h2 className="text-base md:text-lg font-bold">
                        {project.name}
                      </h2>
                      <p className="text-xs md:text-sm mt-2">
                        {project.summary}
                      </p>
                      <img
                        className="mt-4 rounded-xl h-80 md:h-80 object-cover"
                        src={project.image}
                        alt={project.name}
                      />
                      <h2 className="font-bold text-sm md:text-base mt-6">
                        About
                      </h2>
                      <p className="my-2 text-xs md:text-sm">
                        {project.description}
                      </p>
                      <h2 className="font-bold text-sm md:text-base mt-6">
                        Technologies
                      </h2>
                      <div className="flex flex-row">
                        {project.technologies.map((technology) => (
                          <div
                            key={technology}
                            className="bg-zinc-800 py-1 px-2 rounded-lg self-center mr-4 text-badges mt-2 font-bold text-white"
                          >
                            {technology}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-row mt-6">
                        <BsGlobe className="self-center" />
                        <h3 className="font-bold text-sm mx-2">Website:</h3>
                      </div>
                      <a
                        href={project.demo}
                        target="_blank"
                        className="text-sky-600 text-xs font-bold hover:underline"
                      >
                        {project.demo}
                      </a>
                      <div className="flex flex-row mt-6">
                        <BsGithub className="self-center" />
                        <h3 className="font-bold text-sm mx-2">Github:</h3>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        className="text-sky-600 text-xs font-bold hover:underline"
                      >
                        {project.github}
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        className="btn bg-black text-white dark:text-white dark:border-white normal-case rounded-none w-full mt-6"
                      >
                        Abrir proyecto
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 mx-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default App;
