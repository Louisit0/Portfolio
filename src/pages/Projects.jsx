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
                  <BsGithub size="1.5rem" className="mr-4" />
                </a>
                <a
                  href="https://louisit0.github.io/Tourism-web/"
                  target="_blank"
                >
                  <BsBoxArrowUpRight size="1.5rem" />
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
                  <BsGithub size="1.5rem" className="mr-4" />
                </a>
                <a
                  href="https://louisit0.github.io/Tourism-web/"
                  target="_blank"
                >
                  <BsBoxArrowUpRight size="1.5rem" />
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
                  <BsGithub size="1.5rem" className="mr-4" />
                </a>
                <a
                  href="https://louisit0.github.io/Tourism-web/"
                  target="_blank"
                >
                  <BsBoxArrowUpRight size="1.5rem" />
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
                  <BsGithub size="1.5rem" className="mr-4" />
                </a>
                <a
                  href="https://louisit0.github.io/Tourism-web/"
                  target="_blank"
                >
                  <BsBoxArrowUpRight size="1.5rem" />
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
