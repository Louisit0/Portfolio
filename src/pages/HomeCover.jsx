import {
  BsLinkedin,
  BsGithub,
  BsFillEnvelopeFill,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeCover = () => {
  return (
    <section
      id="Home"
      className="flex flex-col justify-center mx-6 md:mx-8 lg:mx-0"
    >
      {/* <img src={gifGato} alt="gato" className="h-32 w-42 mx-auto my-4" /> */}
      <div className="flex flex-row">
        <h1 className="font-bold self-start text-start text-6xl md:text-9xl md:-ml-2">
          LUIS RAMIREZ
        </h1>
      </div>
      <h3 className="text-base self-start text-start lg:text-lg md:w-3/5 my-4 ">
        Self-taught <span className="font-bold">Frontend Developer</span> based
        in Buenos Aires, Argentina 📍.
      </h3>
      <div className="flex flex-row mt-4 mb-6 w-1/2 md:w-1/3 justify-between">
        <BsFillEnvelopeFill size="1.5rem" />
        <BsTwitter size="1.5rem" />
        <BsLinkedin size="1.5rem" />
        <BsGithub size="1.5rem" />
      </div>
      <div className="w-full mt-2 pb-4">
        <Link
          to={"/about"}
          className=" select-none cursor-pointer transition-all font-bold"
        >
          <div className="flex flex-row w-full justify-start md:px-0">
            <p className="mr-4 text-sm self-center">About me</p>
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

export default HomeCover;
