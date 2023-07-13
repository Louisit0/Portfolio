import avatarl from "../assets/img/avatarl.jpg";

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col justify-center text-base-content text-center mx-auto h-screen-luis "
    >
      <div className="flex flex-col items-center lg:flex-row lg:justify-around">
        <img
          src={avatarl}
          alt="perfil"
          className="h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full"
        />
        <div className="flex flex-col items-center">
          <h3 className="text-5xl font-extrabold mb-8">About.</h3>
          <p className="mt-8 text-start text-lg leading-8 md:text-center md:w-4/5 lg:my-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            enim libero minima rerum sapiente illo?
          </p>
          <br />
          <p className="mt-8 text-start text-lg leading-8 md:text-center md:w-4/5 lg:my-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            enim libero minima rerum sapiente illo?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
