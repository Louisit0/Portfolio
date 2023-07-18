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

const Skills = () => {
  return (
    <div className="flex flex-col justify-center text-center mx-8 md:mx-auto">
      <h3 className="text-start text-4xl md:text-5xl font-extrabold mb-8">
        My tech stack.
      </h3>
      <ul className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <li className="flex flex-row border-2 border-black rounded-2xl p-2  justify-center">
          <SiHtml5 size="1.3rem" className="self-center text-red-500" />
          <p className=" text-base ml-2"> HTML5</p>
        </li>
        <li className="flex flex-row border-2 border-black rounded-2xl p-2 justify-center">
          <SiCss3 size="1.3rem" className="self-center text-blue-500" />
          <p className=" text-base ml-2"> CSS3</p>
        </li>
        <li className="flex flex-row border-2 border-black rounded-2xl p-2  justify-center">
          <SiJavascript size="1.3rem" className="self-center text-yellow-400" />
          <p className=" text-base ml-2"> Javascript</p>
        </li>
        <li className="flex flex-row border-2 border-black rounded-2xl p-2  justify-center">
          <SiReact size="1.3rem" className="self-center text-cyan-300" />
          <p className=" text-base ml-2"> React</p>
        </li>
        <li className="flex flex-row border-2 border-black rounded-2xl p-2 justify-center">
          <SiTailwindcss size="1.3rem" className="self-center text-cyan-400" />
          <p className=" text-base ml-2"> Tailwind</p>
        </li>
        <li className="flex flex-row border-2 border-black rounded-2xl p-2 justify-center">
          <SiBootstrap size="1.3rem" className="self-center text-purple-600" />
          <p className=" text-base ml-2"> Bootstrap</p>
        </li>
        <li className="flex flex-row border-2 border-black rounded-2xl p-2 justify-center">
          <SiGithub size="1.3rem" className="self-center" />
          <p className=" text-base ml-2"> Github</p>
        </li>
        <li className="flex flex-row border-2 border-black rounded-2xl p-2 justify-center">
          <SiPostman size="1.3rem" className="self-center text-orange-500" />
          <p className=" text-base ml-2"> Postman</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
