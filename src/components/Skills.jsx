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
    <div className="flex flex-col mb-20 ">
      <div className="flex flex-row mb-10">
        <h2 className="ml-2 text-2xl text-slate-200 font-bold">Tech stack</h2>
      </div>
      <ul className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <li className="flex flex-row border-2 border-white rounded-2xl p-2">
          <SiHtml5 size="1.3rem" className="self-center" />
          <p className="text-slate-200 text-base ml-2"> Html</p>
        </li>
        <li className="flex flex-row border-2 border-white rounded-2xl p-2">
          <SiCss3 size="1.3rem" className="self-center" />
          <p className="text-slate-200 text-base ml-2"> Css</p>
        </li>
        <li className="flex flex-row border-2 border-white rounded-2xl p-2">
          <SiJavascript size="1.3rem" className="self-center" />
          <p className="text-slate-200 text-base ml-2"> Javascript</p>
        </li>
        <li className="flex flex-row border-2 border-white rounded-2xl p-2">
          <SiReact size="1.3rem" className="self-center" />
          <p className="text-slate-200 text-base ml-2"> React</p>
        </li>
        <li className="flex flex-row border-2 border-white rounded-2xl p-2">
          <SiTailwindcss size="1.3rem" className="self-center" />
          <p className="text-slate-200 text-base ml-2"> TailwindCss</p>
        </li>
        <li className="flex flex-row border-2 border-white rounded-2xl p-2">
          <SiBootstrap size="1.3rem" className="self-center" />
          <p className="text-slate-200 text-base ml-2"> Bootstrap</p>
        </li>
        <li className="flex flex-row border-2 border-white rounded-2xl p-2">
          <SiGithub size="1.3rem" className="self-center" />
          <p className="text-slate-200 text-base ml-2"> Github</p>
        </li>
        <li className="flex flex-row border-2 border-white rounded-2xl p-2">
          <SiPostman size="1.3rem" className="self-center" />
          <p className="text-slate-200 text-base ml-2"> Postman</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
