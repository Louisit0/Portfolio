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
      <div className="flex flex-wrap justify-evenly gap-y-16">
        <div className="w-full md:w-1/2 opacity-50 hover:opacity-100">
          <figure className="relative">
            <img
              src={paisaje}
              alt="proyecto1"
              className="rounded-3xl h-full object-cover"
            />
            <div className="opacity-0 hover:opacity-100 absolute mx-8 bottom-5 flex flex-col transition-opacity duration-300 text-start text-white">
              <h2 className="text-xl font-extrabold">Turisme</h2>
              <p className="my-4 text-sm">
                Es una tienda en línea donde puedes comprar paquetes de viajes,
                posee sección de paquetes y reseñas, un formulario de contacto y
                un carrito de compras.
              </p>
              <div className="flex row gap-2">
                <div className="badge bg-gray-500 py-3 text-xs">Javascript</div>
                <div className="badge bg-gray-500 py-3 text-xs">
                  Bootstrap 5
                </div>
                <div className="badge bg-gray-500 py-3 text-xs">
                  SweetAlerts2
                </div>
              </div>
            </div>
          </figure>
        </div>

        <div className="w-full md:w-2/5">
          <figure>
            <img
              src={paisaje}
              alt="proyecto1"
              className="rounded-3xl h-full object-cover"
            />
          </figure>
          <div className="text-start">
            <div className="flex flex-row items-center mt-4">
              <h2 className="text-xl font-bold">Turisme</h2>
              <div className="flex flex-row ml-auto">
                <a
                  href="https://github.com/Louisit0/Tourism-web"
                  target="_blank"
                >
                  <BsGithub size="1.5rem" />
                </a>
                <span className="mr-4"></span>
                <a
                  href="https://louisit0.github.io/Tourism-web/"
                  target="_blank"
                >
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
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <p className=" my-4 text-sm">
              Es una tienda en línea donde puedes comprar paquetes de viajes,
              posee sección de paquetes y reseñas, un formulario de contacto y
              un carrito de compras.
            </p>
            <ul className="grid grid-cols-3 text-xs font-bold">
              <li>Javascript</li>
              <li>Bootstrap 5</li>
              <li>SweetAlerts2</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <figure>
            <img
              src={paisaje}
              alt="proyecto1"
              className="rounded-3xl h-full object-cover"
            />
          </figure>
          <div className="text-start">
            <div className="flex flex-row items-center mt-4">
              <h2 className="text-xl font-bold">Turisme</h2>
              <div className="flex flex-row ml-auto">
                <a
                  href="https://github.com/Louisit0/Tourism-web"
                  target="_blank"
                >
                  <BsGithub size="1.5rem" />
                </a>
                <span className="mr-4"></span>
                <a
                  href="https://louisit0.github.io/Tourism-web/"
                  target="_blank"
                >
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
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <p className=" my-4 text-sm">
              Es una tienda en línea donde puedes comprar paquetes de viajes,
              posee sección de paquetes y reseñas, un formulario de contacto y
              un carrito de compras.
            </p>
            <ul className="grid grid-cols-3 text-xs font-bold">
              <li>Javascript</li>
              <li>Bootstrap 5</li>
              <li>SweetAlerts2</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <figure>
            <img
              src={paisaje}
              alt="proyecto1"
              className="rounded-3xl h-full object-cover"
            />
          </figure>
          <div className="text-start">
            <div className="flex flex-row items-center mt-4">
              <h2 className="text-xl font-bold">Turisme</h2>
              <div className="flex flex-row ml-auto">
                <a
                  href="https://github.com/Louisit0/Tourism-web"
                  target="_blank"
                >
                  <BsGithub size="1.5rem" />
                </a>
                <span className="mr-4"></span>
                <a
                  href="https://louisit0.github.io/Tourism-web/"
                  target="_blank"
                >
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
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <p className=" my-4 text-sm">
              Es una tienda en línea donde puedes comprar paquetes de viajes,
              posee sección de paquetes y reseñas, un formulario de contacto y
              un carrito de compras.
            </p>
            <ul className="grid grid-cols-3 text-xs font-bold">
              <li>Javascript</li>
              <li>Bootstrap 5</li>
              <li>SweetAlerts2</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
