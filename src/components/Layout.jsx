import React from "react";
import Nav from "./Nav";
import HomeCover from "./HomeCover";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export const Layout = () => {
  return (
    // <UserContext.Provider value={user}>
    <div className="min-h-screen">
      <div className="flex flex-col">
        <header>
          <Nav />
        </header>
        <main className="flex flex-col w-full pb-4 max-w-4xl mx-auto px-8 sm:px-0">
          <HomeCover />
          <About />
          <Skills />
          <Projects />
        </main>
        <footer className="px-8 sm:px-0 max-w-4xl mx-auto w-full">
          <Contact />
        </footer>
      </div>
    </div>
    /* </UserContext.Provider> */
  );
};

export default Layout;
