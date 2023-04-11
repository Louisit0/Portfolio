import React from "react";
import html5 from "../assets/img/html5.svg";
import css3 from "../assets/img/css3.svg";
import javascript from "../assets/img/javascript.svg";
import react from "../assets/img/react.svg";
import tailwind from "../assets/img/tailwind.svg";

const Skills = () => {
  return (
    <div className="flex flex-col mb-20 md:w-1/2 mx-auto">
      <div className="flex flex-row mb-10">
        <h2 className="ml-2 text-2xl text-slate-200 font-bold border-b border-warning">
          Tech stack
        </h2>
      </div>
      <ul className="flex flex-wrap gap-8 justify-center">
        <li>
          <img src={html5} alt="html" width={34} />
        </li>
        <li>
          <img src={css3} alt="html" width={34} />
        </li>
        <li>
          <img src={javascript} alt="html" width={34} />
        </li>
        <li>
          <img src={react} alt="html" width={34} />
        </li>
        <li>
          <img src={tailwind} alt="html" width={34} />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
