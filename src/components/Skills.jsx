import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPostman,
  SiGithub,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center mx-auto lg:mx-0">
      <h3 className="text-start text-3xl md:text-4xl font-extrabold mb-8">
        My tech stack.
      </h3>
      <ul className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <li className="flex flex-row border-2 border-black dark:border-white rounded-2xl p-2 justify-center">
          <SiHtml5 size="1.3rem" className="self-center text-red-500" />
          <p className=" text-base ml-2"> HTML5</p>
        </li>
        <li className="flex flex-row border-2 border-black dark:border-white rounded-2xl p-2 justify-center">
          <SiCss3 size="1.3rem" className="self-center text-blue-500" />
          <p className=" text-base ml-2"> CSS3</p>
        </li>
        <li className="flex flex-row border-2 border-black dark:border-white rounded-2xl p-2 justify-center">
          <SiJavascript size="1.3rem" className="self-center text-yellow-400" />
          <p className=" text-base ml-2"> Javascript</p>
        </li>
        <li className="flex flex-row border-2 border-black dark:border-white rounded-2xl p-2 justify-center">
          <SiReact size="1.3rem" className="self-center text-cyan-300" />
          <p className=" text-base ml-2"> React</p>
        </li>
        <li className="flex flex-row border-2 border-black dark:border-white rounded-2xl p-2 justify-center">
          <SiTailwindcss size="1.3rem" className="self-center text-cyan-400" />
          <p className=" text-base ml-2"> Tailwind</p>
        </li>
        <li className="flex flex-row border-2 border-black dark:border-white rounded-2xl p-2 justify-center">
          <SiBootstrap size="1.3rem" className="self-center text-purple-600" />
          <p className=" text-base ml-2"> Bootstrap</p>
        </li>
        <li className="flex flex-row border-2 border-black dark:border-white rounded-2xl p-2 justify-center">
          <SiGithub size="1.3rem" className="self-center" />
          <p className=" text-base ml-2"> Github</p>
        </li>
        <li className="flex flex-row border-2 border-black dark:border-white rounded-2xl p-2 justify-center">
          <SiPostman size="1.3rem" className="self-center text-orange-500" />
          <p className=" text-base ml-2"> Postman</p>
        </li>
      </ul>
      <div className="w-full mt-10 pb-4">
        <Link
          to={"/projects"}
          className=" select-none cursor-pointer transition-all font-bold"
        >
          <div className="flex flex-row w-full justify-start">
            <p className="mr-4 text-sm self-center">Projects</p>
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
