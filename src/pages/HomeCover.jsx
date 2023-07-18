import { BsLinkedin, BsGithub } from "react-icons/bs";

const HomeCover = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <section
        id="Home"
        className="flex flex-col justify-center text-center mx-auto"
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
      </section>
    </div>
  );
};

export default HomeCover;
