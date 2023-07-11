import React from "react";
import Nav from "./Nav";
import HomeCover from "../pages/HomeCover";
import About from "../pages/About";
import Skills from "./Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { Route, Switch } from "wouter";

export const Layout = () => {
  return (
    // <UserContext.Provider value={user}>
    <div className="flex flex-col ">
      <header>
        <Nav />
      </header>
      <main className="flex flex-col max-w-4xl mx-auto px-8 sm:px-0">
        <Switch>
          <Route path="/" component={HomeCover} />
          <Route path="/about" component={About} />
          <Route path="/techStack" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </main>
      <footer className="px-8 sm:px-0 max-w-4xl mx-auto w-full">
        {/* <Contact /> */}
      </footer>
    </div>
    /* </UserContext.Provider> */
  );
};

export default Layout;
