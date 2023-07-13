import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export const Root = () => {
  return (
    // <UserContext.Provider value={user}>
    <div className="flex flex-col h-screen">
      <header>
        <Nav />
      </header>
      <main className="flex flex-row max-w-4xl mx-auto">
        <Outlet />
      </main>
    </div>
    /* </UserContext.Provider> */
  );
};

export default Root;
