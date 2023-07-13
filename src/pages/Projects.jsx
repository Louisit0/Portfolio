import React from "react";
import { BsLinkedin, BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import paisaje from "../assets/img/imgg.png";
import turisme from "../assets/img/turisme.jpg";
import "../utilities.css";

const Projects = () => {
  return (
    <section
      id="About"
      className="flex flex-col justify-center text-base-content text-center mx-auto mt-20 mb-8"
    >
      <div className="grid grid-cols-2 justify-evenly gap-6">
        <div className="w-full cursor-pointer">
          <div className="relative group">
            <img
              src={paisaje}
              alt="proyecto1"
              className="rounded-lg h-full object-cover brightness-100 group-hover:brightness-75"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute mx-8 bottom-5 flex flex-col transition-opacity duration-300 text-start text-white">
              <h2 className="text-xl font-extrabold">Turisme</h2>
              <p className="my-2 text-sm">
                E-commerce para comprar paquetes turisticos.
              </p>
              <div className="flex row gap-2">
                <div
                  className="badge bg-zinc-500 py-3"
                  style={{ fontSize: "0.65rem" }}
                >
                  Javascript
                </div>
                <div
                  className="badge bg-zinc-500 py-3"
                  style={{ fontSize: "0.65rem" }}
                >
                  Bootstrap 5
                </div>
                <div
                  className="badge bg-zinc-500 py-3"
                  style={{ fontSize: "0.65rem" }}
                >
                  SweetAlerts2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full cursor-pointer">
          <div className="relative group">
            <img
              src={paisaje}
              alt="proyecto1"
              className="rounded-lg h-full object-cover brightness-100 group-hover:brightness-75"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute mx-8 bottom-5 flex flex-col transition-opacity duration-300 text-start text-white">
              <h2 className="text-xl font-extrabold">Turisme</h2>
              <p className="my-2 text-sm">
                E-commerce para comprar paquetes turisticos.
              </p>
              <div className="flex row gap-2">
                <div
                  className="badge bg-zinc-500 py-3"
                  style={{ fontSize: "0.65rem" }}
                >
                  Javascript
                </div>
                <div
                  className="badge bg-zinc-500 py-3"
                  style={{ fontSize: "0.65rem" }}
                >
                  Bootstrap 5
                </div>
                <div
                  className="badge bg-zinc-500 py-3"
                  style={{ fontSize: "0.65rem" }}
                >
                  SweetAlerts2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full cursor-pointer">
          <div className="relative group">
            <img
              src={paisaje}
              alt="proyecto1"
              className="rounded-lg h-full object-cover brightness-100 group-hover:brightness-75"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute mx-8 bottom-5 flex flex-col transition-opacity duration-300 text-start text-white">
              <h2 className="text-xl font-extrabold">Turisme</h2>
              <p className="my-2 text-sm">
                E-commerce para comprar paquetes turisticos.
              </p>
              <div className="flex row gap-2">
                <div
                  className="badge bg-zinc-500 py-3"
                  style={{ fontSize: "0.65rem" }}
                >
                  Javascript
                </div>
                <div
                  className="badge bg-zinc-500 py-3"
                  style={{ fontSize: "0.65rem" }}
                >
                  Bootstrap 5
                </div>
                <div
                  className="badge bg-zinc-500 py-3"
                  style={{ fontSize: "0.65rem" }}
                >
                  SweetAlerts2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full cursor-pointer">
          <div className="relative group">
            <img
              src={paisaje}
              alt="proyecto1"
              className="rounded-lg h-full object-cover brightness-100 group-hover:brightness-75"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute mx-8 bottom-5 flex flex-col transition-opacity duration-300 text-start text-white">
              <h2 className="text-xl font-extrabold">Turisme</h2>
              <p className="my-2 text-sm">
                E-commerce para comprar paquetes turisticos.
              </p>
              <div className="flex row gap-2">
                <div
                  className="badge bg-zinc-500 py-3"
                  style={{ fontSize: "0.65rem" }}
                >
                  Javascript
                </div>
                <div
                  className="badge bg-zinc-500 py-3"
                  style={{ fontSize: "0.65rem" }}
                >
                  Bootstrap 5
                </div>
                <div
                  className="badge bg-zinc-500 py-3"
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
