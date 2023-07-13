import React, { useState, useEffect, useRef } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import gifGato from "../assets/img/gifGato.gif";

const HomeCover = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen-luis">
      <section
        id="Home"
        className="flex flex-col justify-center text-base-content text-center mx-auto"
      >
        <img src={gifGato} alt="gato" className="h-32 w-42 mx-auto my-4" />
        <div className="flex flex-row">
          <span className="title-home text-4xl md:text-8xl">Hi, i'm Luis.</span>
        </div>
        <h3 className="text-base md:text-lg md:w-3/5 mx-auto my-4">
          Self-taught Frontend Developer based in Buenos Aires, Argentina 📍.
        </h3>
        <div className="flex flex-row my-4 mx-auto">
          <BsLinkedin size="1.5rem" className="mr-4" />
          <BsGithub size="1.5rem" />
        </div>
      </section>
    </div>
  );
};

export default HomeCover;
