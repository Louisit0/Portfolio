import React from "react";
import { BsLinkedin, BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import imgg from "../assets/img/imgg.png";
import "../utilities.css";

const Projects = () => {
  return (
    <section id="Projects" className="flex flex-col md:w-1/2 mx-auto">
      <div className="flex flex-row mb-10">
        <h2 className="text-2xl text-slate-200 font-bold">Projects</h2>
      </div>
      <ul className="flex flex-wrap md:justify-evenly gap-y-6 md:gap-y-14">
        <li>
          <figure>
            <img
              src={imgg}
              alt="prj"
              className="object-cover h-full border-2 border-white rounded-3xl"
            />
          </figure>
          <div className="flex flex-col gap-6 py-6 px-2">
            <h2 className="card-title font-bold">Dashboard</h2>

            <p className="md:w-4/5">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on app store.
            </p>
            <ul className="flex flex-row  font-extralight text-sm">
              <li>React.js</li>
              <li className="mx-4">Tailwind CSS</li>
              <li>Firebase</li>
            </ul>
            <div className="flex flex-row w-full">
              <BsGithub
                className="mr-4 my-auto hover:fill-warning"
                size="1.5rem"
              />
              <BsBoxArrowUpRight
                className="my-auto hover:fill-warning"
                size="1.2rem"
              />
            </div>
          </div>
        </li>
        <li>
          <figure>
            <img
              src={imgg}
              alt="prj"
              className="object-cover h-full rounded-3xl"
            />
          </figure>
          <div className="flex flex-col gap-6 py-6 px-2">
            <h2 className="card-title font-bold">Dashboard</h2>

            <p className="md:w-4/5">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on app store.
            </p>
            <ul className="flex flex-row  font-extralight text-sm">
              <li>React.js</li>
              <li className="mx-4">Tailwind CSS</li>
              <li>Firebase</li>
            </ul>
            <div className="flex flex-row w-full">
              <BsGithub
                className="mr-4 my-auto hover:fill-warning"
                size="1.5rem"
              />
              <BsBoxArrowUpRight
                className="my-auto hover:fill-warning"
                size="1.2rem"
              />
            </div>
          </div>
        </li>
        <li>
          <figure>
            <img
              src={imgg}
              alt="prj"
              className="object-cover h-full border-2 border-white rounded-3xl"
            />
          </figure>
          <div className="flex flex-col gap-6 py-6 px-2">
            <h2 className="card-title font-bold">Dashboard</h2>

            <p className="md:w-4/5">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on app store.
            </p>
            <ul className="flex flex-row  font-extralight text-sm">
              <li>React.js</li>
              <li className="mx-4">Tailwind CSS</li>
              <li>Firebase</li>
            </ul>
            <div className="flex flex-row w-full">
              <BsGithub
                className="mr-4 my-auto hover:fill-warning"
                size="1.5rem"
              />
              <BsBoxArrowUpRight
                className="my-auto hover:fill-warning"
                size="1.2rem"
              />
            </div>
          </div>
        </li>
        <li>
          <figure>
            <img
              src={imgg}
              alt="prj"
              className="object-cover h-full border-2 border-white rounded-3xl"
            />
          </figure>
          <div className="flex flex-col gap-6 py-6 px-2">
            <h2 className="card-title font-bold">Dashboard</h2>

            <p className="md:w-4/5">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on app store.
            </p>
            <ul className="flex flex-row  font-extralight text-sm">
              <li>React.js</li>
              <li className="mx-4">Tailwind CSS</li>
              <li>Firebase</li>
            </ul>
            <div className="flex flex-row w-full">
              <BsGithub
                className="mr-4 my-auto hover:fill-warning"
                size="1.5rem"
              />
              <BsBoxArrowUpRight
                className="my-auto hover:fill-warning"
                size="1.2rem"
              />
            </div>
          </div>
        </li>
      </ul>
      <button className="mx-auto w-1/2 normal-case btn bg-white text-black hover:bg-white mt-20 mb-36 ">
        Show More
      </button>
    </section>
  );
};

export default Projects;
