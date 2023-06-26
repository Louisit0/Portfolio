import React, { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Index from "../pages/Index";
import Nav from "./Nav";

const HomeCover = () => {
  return (
    <section
      id="Home"
      className="h-screen flex flex-col justify-center my-auto text-base-content"
    >
      <h1 className="text-slate-200 font-semibold mb-3 whitespace-pre">
        Hi, my name is
      </h1>
      <h3 className="text-4xl font-bold text-white mb-1 md:text-5xl">
        Luis Ramirez
      </h3>
      <h3 className="text-4xl font-bold md:text-5xl text-slate-200">
        Frontend React Developer
      </h3>
      <p className="text-base mt-6 md:text-lg md:w-1/2 text-gray-300">
        I’m a enthusiast Front-end React Developer jr based in Buenos Aires,
        Argentina. 📍
      </p>
      <div className="flex flex-row my-10">
        <BsLinkedin size="1.5rem" className="mr-4 hover:fill-warning" />
        <BsGithub size="1.5rem" className="hover:fill-warning" />
      </div>
    </section>
  );
};

export default HomeCover;
