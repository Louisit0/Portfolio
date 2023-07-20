import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="About" className="flex flex-col mx-6 md:mx-8 lg:mx-0">
      <div className="flex flex-col mt-2 md:mt-5 sm:mt-0 mx-2 md:mx-8 lg:mx-0 lg:mt-20">
        <h3 className="text-3xl md:text-5xl font-extrabold lg:mb-4">
          About me.
        </h3>

        <div className="mt-10">
          <h5 className="font-extrabold">Experiencia</h5>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Abril 2022 - Ahora
              </time>
              <h3 class="text-lg font-semibold text-gray-900">
                Frontend Developer
              </h3>
              <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                Responsable de diseñar y programar la interfaz de usuario de los
                sitios o aplicaciones web.
              </p>
              {/* <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                class="w-3 h-3 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> */}
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Febrero 2021 - Enero 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900">
                Trabajos freelance
              </h3>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Creación y/o modificaciones en paginas y aplicaciones web
                básicas.
              </p>
            </li>
            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2020 - 2021
              </time>
              <h3 class="text-lg font-semibold text-gray-900">Data entry</h3>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Verificar imagenes de posibles infracciones de transito.
              </p>
            </li>
          </ol>
        </div>
        <div className="mt-20">
          <h5 className="font-extrabold">Mis recursos</h5>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023
              </time>
              <h3 class="text-lg font-semibold text-gray-900">
                Estructura de datos y algoritmos.{" "}
                <span className="text-sm">Udemy</span>
              </h3>
              <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                Many developers who are "self taught", feel that one of the main
                disadvantages they face compared to college educated graduates
                in computer science is the fact that they don't have knowledge
                about algorithms, data structures and the notorious Big-O
                Notation
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023
              </time>
              <h3 class="text-lg font-semibold text-gray-900">Coderhouse</h3>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Curso de Javascript
              </p>
            </li>
            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900">Freecodecamp</h3>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Cursos de html5 y css3, javascript.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div className="w-full mt-6 md:mt-10 pb-4">
        <Link
          to={"/techStack"}
          className=" select-none cursor-pointer transition-all font-bold"
        >
          <div className="flex flex-row w-full justify-start ">
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
