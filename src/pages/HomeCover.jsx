import React, { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import pikachu from "../assets/img/pikachu-wink.gif";
import Index from "./Index";
import Nav from "../components/Nav";

const HomeCover = () => {
  return (
    <section
      id="Home"
      className="flex flex-col justify-center text-base-content text-center mx-auto h-screen pt-16"
    >
      <img src={pikachu} alt="pika" className="h-32 w-42 mx-auto my-4" />
      <h1 className="text-4xl font-bold md:text-5xl mb-3">Hi, i'm Luis.</h1>
      <h3 className="text-base md:text-lg md:w-3/5 mx-auto">
        Self-taught Frontend Developer based in Buenos Aires, Argentina 📍.
      </h3>
      <div className="flex flex-row my-10 mx-auto">
        <BsLinkedin size="1.5rem" className="mr-4 hover:fill-warning" />
        <BsGithub size="1.5rem" className="hover:fill-warning" />
      </div>
    </section>
  );
};

export default HomeCover;
