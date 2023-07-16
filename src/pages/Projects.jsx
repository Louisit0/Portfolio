import { useContext } from "react";
import turisme from "../assets/img/turisme.jpg";
import pokedex from "../assets/img/pokedex.png";
import coderhouse from "../assets/img/coderhousejs.jpg";
import { TogglerDrawerContext } from "../routes/root";
import "../utilities.css";

const Projects = () => {
  const togglerDrawer = useContext(TogglerDrawerContext);
  const handleButtonClick = () => {
    togglerDrawer(); // Ejecutar la función togglerDrawer
  };
  return (
    <section
      id="About"
      className="flex flex-col text-center mx-6 md:mx-8 lg:mx-0 mb-6"
    >
      <h3 className="text-start text-4xl md:text-5xl font-extrabold mt-5 mb-8">
        My work.
      </h3>
      <div className="grid md:grid-cols-2 md:justify-evenly gap-6 w-80 md:w-full">
        <div
          className="w-80 md:96 md:w-full cursor-pointer"
          onClick={togglerDrawer}
        >
          <div className="relative group">
            <img
              src={coderhouse}
              alt="proyecto1"
              className="rounded-lg h-80 md:h-96 object-cover brightness-100 group-hover:brightness-75"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute mx-4 md:mx-6 bottom-5 flex flex-col transition-opacity duration-300 text-start text-white">
              <h2 className="text-xl font-extrabold title-shadow">Turisme</h2>
              <p className="mt-2 mb-4 text-sm text-shadow">
                E-commerce para comprar paquetes turisticos.
              </p>
              <div className="flex row gap-2">
                <div
                  className="bg-zinc-800 py-1 px-2 rounded-xl self-center"
                  style={{ fontSize: "0.65rem" }}
                >
                  Javascript
                </div>
                <div
                  className="bg-zinc-800 py-1 px-2 rounded-xl self-center"
                  style={{ fontSize: "0.65rem" }}
                >
                  Bootstrap 5
                </div>
                <div
                  className="bg-zinc-800 py-1 px-2 rounded-xl self-center"
                  style={{ fontSize: "0.65rem" }}
                >
                  SweetAlerts2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-80 md:96 md:w-full cursor-pointer"
          onClick={togglerDrawer}
        >
          <div className="relative group">
            <img
              src={pokedex}
              alt="proyecto1"
              className="rounded-lg h-80 md:h-96 object-cover brightness-100 group-hover:brightness-75"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute mx-4 lg:mx-6 bottom-4 lg:bottom-6 flex flex-col transition-opacity duration-300 text-start text-white">
              <h2 className="text-xl font-extrabold title-shadow">Pokedéx</h2>
              <p className="mt-1 mb-2 text-base text-shadow">
                Buscador de pokemones desde la PokeApi.
              </p>
              <div className="flex row gap-2">
                <div
                  className="bg-zinc-800 py-1 px-2 rounded-xl self-center"
                  style={{ fontSize: "0.65rem" }}
                >
                  React
                </div>
                <div
                  className="bg-zinc-800 py-1 px-2 rounded-xl self-center"
                  style={{ fontSize: "0.65rem" }}
                >
                  Tailwind
                </div>
                <div
                  className="bg-zinc-800 py-1 px-2 rounded-xl self-center"
                  style={{ fontSize: "0.65rem" }}
                >
                  SweetAlerts2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-80 md:96 md:w-full cursor-pointer"
          onClick={togglerDrawer}
        >
          <div className="relative group">
            <img
              src={pokedex}
              alt="proyecto1"
              className="rounded-lg h-80 md:h-96 object-cover brightness-100 group-hover:brightness-75"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute mx-4 md:mx-6 bottom-5 flex flex-col transition-opacity duration-300 text-start text-white">
              <h2 className="text-xl font-extrabold title-shadow">Turisme</h2>
              <p className="mt-2 mb-4 text-sm text-shadow">
                E-commerce para comprar paquetes turisticos.
              </p>
              <div className="flex row gap-2">
                <div
                  className="bg-zinc-800 py-1 px-2 rounded-xl self-center"
                  style={{ fontSize: "0.65rem" }}
                >
                  Javascript
                </div>
                <div
                  className="bg-zinc-800 py-1 px-2 rounded-xl self-center"
                  style={{ fontSize: "0.65rem" }}
                >
                  Bootstrap 5
                </div>
                <div
                  className="bg-zinc-800 py-1 px-2 rounded-xl self-center"
                  style={{ fontSize: "0.65rem" }}
                >
                  SweetAlerts2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-80 md:96 md:w-full cursor-pointer"
          onClick={togglerDrawer}
        >
          <div className="relative group">
            <img
              src={turisme}
              alt="proyecto1"
              className="rounded-lg h-80 md:h-96 object-cover brightness-100 group-hover:brightness-75"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute mx-4 md:mx-6 bottom-5 flex flex-col transition-opacity duration-300 text-start text-white">
              <h2 className="text-xl font-extrabold title-shadow">Turisme</h2>
              <p className="mt-2 mb-4 text-sm text-shadow">
                E-commerce para comprar paquetes turisticos.
              </p>
              <div className="flex row gap-2">
                <div
                  className="bg-zinc-800 py-1 px-2 rounded-xl self-center"
                  style={{ fontSize: "0.65rem" }}
                >
                  Javascript
                </div>
                <div
                  className="bg-zinc-800 py-1 px-2 rounded-xl self-center"
                  style={{ fontSize: "0.65rem" }}
                >
                  Bootstrap 5
                </div>
                <div
                  className="bg-zinc-800 py-1 px-2 rounded-xl self-center"
                  style={{ fontSize: "0.65rem" }}
                >
                  SweetAlerts2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
