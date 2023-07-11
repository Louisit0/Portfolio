import avatar from "../assets/img/avatar.jpeg";

const About = () => {
  return (
    <section id="About" className="flex flex-col mx-auto mb-36 ">
      <div className="flex flex-row w-1/2 mb-10 sm:mb-0 ">
        <h2 className="text-2xl  font-bold">About me</h2>
      </div>
      <div className="md:flex md:flex-row flex flex-col-reverse">
        <div className="md:w-3/5 md:order-1 md:text-lg flex flex-col justify-center">
          <p className="md:text-lg my-auto ">
            I am a junior frontend developer with knowledge of HTML, CSS,
            JavaScript, React, and Razor C#. I excel at working in teams and
            helping out whenever possible. I value feedback and strive for
            personal growth. I am self-taught and currently studying to become a
            systems analyst.
          </p>
        </div>
        <div className="md:w-2/5 flex md:order-2">
          <img
            src={avatar}
            alt="avatar"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300 rounded-xl w-32 h-32 md:w-3/5 md:h-full object-cover m-auto mb-10 sm-mb-0"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between md:gap-6 gap-2 my-6 md:w-3/5 ">
        <p>👨‍💻 Programar</p>
        <p>🧠 Aprender</p>
        <p>🎵 Música</p>
        <p>🥊 Kickboxing</p>
      </div>
    </section>
  );
};

export default About;
