import React from "react";
import { BsLinkedin, BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import imgg from "../assets/img/imgg.png";
import "../utilities.css";

const Projects = () => {
  return (
    <section id="Projects" className="flex flex-col mx-auto">
      <div className="flex flex-row mb-10">
        <h2 className="text-2xl text-slate-200 font-bold">Projects</h2>
      </div>
      <ul className="flex flex-wrap gap-y-20">
        <li className="md:flex md:flex-row md:justify-between">
          <figure className="md:w-1/2">
            <img
              src={imgg}
              alt="prj"
              className="object-cover h-full rounded-3xl"
            />
          </figure>
          <div className="flex flex-col gap-6 md:max-w-sm mt-6 sm:mt-0">
            <h2 className="card-title font-bold">Dashboard</h2>
            <p className="my-auto">
              Get up and running within minutes. Just install the starter, add
              your content, deploy it, and there you go! This starter works
              seamlessly with hosts like Netlify. Photo by Clément H on
              Unsplash.
            </p>
            <ul className="flex flex-row font-extralight text-sm mt-auto">
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
        <li className="flex flex-col-reverse md:flex-row md:justify-between">
          <div className="flex flex-col gap-6 md:max-w-sm mt-6 sm:mt-0">
            <h2 className="card-title font-bold">Dashboard</h2>
            <p className="my-auto">
              Get up and running within minutes. Just install the starter, add
              your content, deploy it, and there you go! This starter works
              seamlessly with hosts like Netlify. Photo by Clément H on
              Unsplash.
            </p>
            <ul className="flex flex-row  font-extralight text-sm mt-auto">
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
          <figure className="md:w-1/2">
            <img
              src={imgg}
              alt="prj"
              className="object-cover h-full rounded-3xl"
            />
          </figure>
        </li>
        {/* <div className="md:flex md:flex-row">
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

              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on app store.
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
          <span className="m-0 md:mx-2"></span>
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

              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on app store.
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
        </div> */}
      </ul>
      <button className="mx-auto w-1/2 normal-case btn bg-white text-black hover:bg-white mt-20 mb-36 ">
        Show More
      </button>
    </section>
  );
};

export default Projects;
