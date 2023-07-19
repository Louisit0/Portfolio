import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeCover = () => {
  return (
    <section
      id="Home"
      className="flex flex-col justify-center items-center text-center mx-6 md:mx-8 lg:mx-0"
    >
      {/* <img src={gifGato} alt="gato" className="h-32 w-42 mx-auto my-4" /> */}
      <div className="flex flex-row justify-center">
        <span className="title-home font-bold md:font-normal text-4xl md:text-7xl lg:text-8xl">
          Hi, i'm Luis.
        </span>
      </div>
      <h3 className="text-sm md:text-base lg:text-lg mx-8 md:w-3/5 sm:mx-auto my-4 ">
        Self-taught Frontend Developer based in Buenos Aires, Argentina 📍.
      </h3>
      <div className="flex flex-row my-4 mx-auto">
        <BsLinkedin size="1.5rem" className="mr-4" />
        <BsGithub size="1.5rem" />
      </div>
      <div className="w-full mt-2 pb-4">
        <Link
          to={"/about"}
          className=" select-none cursor-pointer transition-all font-bold"
        >
          <div className="flex flex-row w-full justify-start px-6 md:px-0">
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
