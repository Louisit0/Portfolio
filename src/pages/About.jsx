import avatarl from "../assets/img/avatarl.jpg";

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col md:justify-center text-center h-main-screen"
    >
      <div className="flex flex-col items-center lg:flex-row justify-evenly mt-5 sm:mt-0">
        <img
          src={avatarl}
          alt="perfil"
          className="h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full mb-10 lg:mb-0"
        />
        <div className="flex flex-col items-center mx-8 md:w-1/2">
          <h3 className="text-4xl md:text-5xl font-extrabold lg:mb-4">
            About.
          </h3>
          <p className="my-4 text-center text-lg leading-8 md:text-center lg:my-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            enim libero minima rerum sapiente illo?
          </p>
          <p className="text-center text-lg leading-8 md:text-center lg:my-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            enim libero minima rerum sapiente illo?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
