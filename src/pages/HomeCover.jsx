import {
  BsLinkedin,
  BsGithub,
  BsFillEnvelopeFill,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import avatarl from "../assets/img/avatarl.jpg";
import Skills from "../components/Skills";

const HomeCover = ({ togglerDrawer }) => {
  return (
    <>
      <section
        id="Home"
        className="flex flex-col justify-center mx-6 md:mx-8 lg:mx-0 dvh md:h-screen"
      >
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-5/6 md:w-3/5">
            <h1 className="font-bold self-start text-start text-6xl md:text-8xl md:-ml-2 dark:text-gray-200">
              LUIS RAMIREZ
            </h1>
            <h3 className="text-zinc-400 self-start text-start lg:text-lg md:w-5/6 my-4 tracking-tight">
              Self-taught <span className="font-bold">Frontend Developer</span>{" "}
              based in Buenos Aires, Argentina 📍.
            </h3>
            <div className="flex flex-row mt-4 mb-6 w-4/6 md:w-1/2 justify-between">
              <BsFillEnvelopeFill size="1.5rem" />
              <BsTwitter size="1.5rem" />
              <BsLinkedin size="1.5rem" />
              <BsGithub size="1.5rem" />
            </div>
          </div>
          <div className="w-1/2 md:w-1/3 flex mx-auto mb-4 md:mb-0">
            <img
              src={avatarl}
              alt="luis"
              className="rounded-full h-full md:h-5/6"
            />
          </div>
        </div>
      </section>
      <About />
      <Projects togglerDrawer={togglerDrawer} />
      <Skills />
      <Contact />
    </>
  );
};

export default HomeCover;
