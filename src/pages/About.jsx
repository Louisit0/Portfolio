import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="About" className="flex flex-col mx-6 md:mx-8 lg:mx-0">
      <div className="flex flex-col mt-2 md:mt-5 sm:mt-0 mx-2 md:mx-8 lg:mx-0">
        <h3 className="text-3xl md:text-4xl font-extrabold lg:mb-2 text-gray-200">
          About me.
        </h3>
        <div className="mt-5">
          <h5 className="font-extrabold">Experiencia</h5>
          <ol className="relative border-l border-black dark:border-white">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black dark:border-white dark:bg-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                Abril 2022 - Ahora
              </time>
              <h3 className="text-lg font-semibold">Frontend Developer</h3>
              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                Responsable de diseñar y programar la interfaz de usuario de los
                sitios o aplicaciones web.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black dark:border-white dark:bg-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                Febrero 2021 - Enero 2022
              </time>
              <h3 className="text-lg font-semibold">Trabajos freelance</h3>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Creación y/o modificaciones en paginas y aplicaciones web
                básicas.
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black dark:border-white dark:bg-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                2020 - 2021
              </time>
              <h3 className="text-lg font-semibold">Data entry</h3>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Verificar imagenes de posibles infracciones de transito.
              </p>
            </li>
          </ol>
        </div>
        <div className="mt-20">
          <h5 className="font-extrabold">Mis recursos</h5>
          <ol className="relative border-l border-black dark:border-white">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black dark:border-white dark:bg-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                2023
              </time>
              <h3 className="text-lg font-semibold">
                Estructura de datos y algoritmos.{" "}
                <span className="text-sm">Udemy</span>
              </h3>
              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                Many developers who are "self taught", feel that one of the main
                disadvantages they face compared to college educated graduates
                in computer science is the fact that they don't have knowledge
                about algorithms, data structures and the notorious Big-O
                Notation
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black dark:border-white dark:bg-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                2023
              </time>
              <h3 className="text-lg font-semibold">Coderhouse</h3>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Curso de Javascript
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black dark:border-white dark:bg-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                2022
              </time>
              <h3 className="text-lg font-semibold">Freecodecamp</h3>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Cursos de html5 y css3, javascript.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
