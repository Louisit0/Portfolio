import React, { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import gifGato from "../assets/img/gifGato.gif";
import Index from "./Index";
import Nav from "../components/Nav";

const HomeCover = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen-luis">
      <section
        id="Home"
        className="flex flex-col justify-center text-base-content text-center mx-auto"
      >
        <img src={gifGato} alt="pika" className="h-32 w-42 mx-auto my-4" />
        <h1 className="text-4xl font-bold md:text-5xl mb-3">Hi, I'm Luis.</h1>
        <h3 className="text-base md:text-lg md:w-3/5 mx-auto">
          Self-taught Frontend Developer based in Buenos Aires, Argentina 📍.
        </h3>
        <div className="flex flex-row my-10 mx-auto">
          <BsLinkedin size="1.5rem" className="mr-4 hover:fill-warning" />
          <BsGithub size="1.5rem" className="hover:fill-warning" />
        </div>
      </section>
    </div>
  );
};

export default HomeCover;
