import React from "react";
import { BsLinkedin, BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import "../utilities.css";

const Projects = () => {
  return (
    <section id="Projects" className="flex flex-col md:w-1/2 mx-auto">
      <div className="flex flex-row mb-10">
        <h2 className="text-warning mt-auto mr-2">02.</h2>
        <h2 className="text-2xl text-slate-200 font-bold border-b border-warning">
          Projects
        </h2>
      </div>
      <ul className="flex flex-wrap md:justify-evenly gap-y-6 md:gap-y-14">
        <li className="card md:w-96 bg-base-100 shadow-md">
          <figure>
            <img
              src="https://cdn.dribbble.com/userupload/3228936/file/original-b15243b97341f9b30d2d5a4288891d99.png?compress=1&resize=450x338&vertical=top"
              alt="prj"
              className="object-cover h-full"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-row w-full">
              <h2 className="card-title font-bold">Dashboard</h2>
              <BsGithub
                className="ml-auto mr-4 my-auto hover:fill-warning"
                size="1.5rem"
              />
              <BsBoxArrowUpRight
                className="mt-0.5 hover:fill-warning"
                size="1.2rem"
              />
            </div>
            <p className="md:w-4/5">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on app store.
            </p>
            <ul className="flex flex-row mt-4 font-extralight text-sm">
              <li>React.js</li>
              <li className="mx-4">Tailwind CSS</li>
              <li>Firebase</li>
            </ul>
          </div>
        </li>
        <li className="card md:w-96 bg-base-100 shadow-md">
          <figure>
            <img
              src="https://cdn.dribbble.com/userupload/3228936/file/original-b15243b97341f9b30d2d5a4288891d99.png?compress=1&resize=450x338&vertical=top"
              alt="prj"
              className="object-cover h-full"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-row w-full">
              <h2 className="card-title font-bold">Dashboard</h2>
              <BsGithub
                className="ml-auto mr-4 my-auto hover:fill-warning"
                size="1.5rem"
              />
              <BsBoxArrowUpRight
                className="mt-0.5 hover:fill-warning"
                size="1.2rem"
              />
            </div>
            <p className="md:w-4/5">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on app store.
            </p>
            <ul className="flex flex-row mt-4 font-extralight text-sm">
              <li>React.js</li>
              <li className="mx-4">Tailwind CSS</li>
              <li>Firebase</li>
            </ul>
          </div>
        </li>
        <li className="card md:w-96 bg-base-100 shadow-md">
          <figure>
            <img
              src="https://cdn.dribbble.com/userupload/4491896/file/original-f10438bc7a8b130d6ab49e38afeee4b7.png?compress=1&resize=450x338&vertical=top"
              alt="prj"
              className="object-cover h-full"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-row w-full">
              <h2 className="card-title font-bold">Login</h2>
              <BsGithub
                className="ml-auto mr-4 my-auto hover:fill-warning"
                size="1.5rem"
              />
              <BsBoxArrowUpRight
                className="mt-0.5 hover:fill-warning"
                size="1.2rem"
              />
            </div>
            <p className="md:w-4/5">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on app store.
            </p>
            <ul className="flex flex-row mt-4 font-extralight text-sm">
              <li className="mr-4">React.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </li>
        <li className="card md:w-96 bg-base-100 shadow-md">
          <figure>
            <img
              src="https://cdn.dribbble.com/userupload/4491896/file/original-f10438bc7a8b130d6ab49e38afeee4b7.png?compress=1&resize=450x338&vertical=top"
              alt="prj"
              className="object-cover h-full"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-row w-full">
              <h2 className="card-title font-bold">Login</h2>
              <BsGithub
                className="ml-auto mr-4 my-auto hover:fill-warning"
                size="1.5rem"
              />
              <BsBoxArrowUpRight
                className="mt-0.5 hover:fill-warning"
                size="1.2rem"
              />
            </div>
            <p className="md:w-4/5">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on app store.
            </p>
            <ul className="flex flex-row mt-4 font-extralight text-sm">
              <li className="mr-4">React.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </li>
      </ul>
      <button className="mx-auto w-1/2 normal-case btn btn-warning mt-20 mb-36 ">
        Show More
      </button>
    </section>
  );
};

export default Projects;
