import { Link } from "react-router-dom";
import avatarl from "../assets/img/avatarl.jpg";

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col md:justify-center text-center mx-6 md:mx-8 lg:mx-0"
    >
      <div className="flex flex-col items-center lg:flex-row justify-evenly mt-2 md:mt-5 sm:mt-0">
        <img
          src={avatarl}
          alt="perfil"
          className="h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full mb-4 lg:mb-0"
        />
        <div className="flex flex-col items-center mx-8 md:w-1/2">
          <h3 className="text-4xl md:text-5xl font-extrabold lg:mb-4">
            About.
          </h3>
          <p className="mt-2 mb-4 text-center md:text-lg leading-6 md:leading-8 md:text-center lg:my-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            enim libero minima rerum sapiente illo?
          </p>
          <p className="text-center md:text-lg leading-6 md:leading-8 md:text-center lg:my-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            enim libero minima rerum sapiente illo?
          </p>
        </div>
      </div>
      <div className="w-full mt-6 md:mt-10 pb-4">
        <Link
          to={"/techStack"}
          className=" select-none cursor-pointer transition-all font-bold"
        >
          <div className="flex flex-row w-full justify-start px-6 md:px-6">
            <p className="mr-4 text-sm self-center">Tech stack</p>
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
    </section>
  );
};

export default About;
