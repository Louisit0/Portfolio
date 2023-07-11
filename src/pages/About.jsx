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
        <p className="mt-8 lg:my-auto text-start md:text-center md:w-1/2">
          A self-taught Software Engineer with experience working back-end for
          the automotive and manufacturing industries. Recently, I started my
          journey learning front-end development & discovered a fascination for
          CSS Art.
        </p>
      </div>
    </section>
  );
};

export default About;
