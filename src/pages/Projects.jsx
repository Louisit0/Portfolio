import projectsContent from "../utilities/ProjectContent";
import "../utilities.css";
import { Link } from "react-router-dom";

const Projects = ({ togglerDrawer }) => {
  const togglerDrawerContent = (projectId) => {
    togglerDrawer("projects", projectId);
  };

  return (
    <section
      id="About"
      className="flex flex-col text-center px-6 md:px-0 mt-20 w-full"
    >
      <h3 className="text-start text-3xl md:text-4xl font-extrabold mt-5 mb-8">
        My work.
      </h3>
      <div className="grid md:grid-cols-2 md:justify-evenly gap-6 gap-y-4 w-full md:w-full pb-6">
        {projectsContent.map((project) => (
          <div
            className="w-full md:w-full cursor-pointer"
            onClick={() => togglerDrawerContent(project.id)}
            key={project.id}
          >
            <div className="relative group">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl h-80 md:h-96 object-cover brightness-75 md:brightness-100 group-hover:brightness-75"
              />
              <div className="opacity-100 md:opacity-0 group-hover:opacity-100 absolute mx-4 md:mx-6 bottom-5 flex flex-col transition-opacity duration-300 text-start text-white">
                <h2 className="text-xl font-extrabold title-shadow">
                  {project.name}
                </h2>
                <p className="mt-2 mb-4 text-sm text-shadow">
                  {project.summary}
                </p>
                <div className="flex row gap-2">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology}
                      className="bg-zinc-800 py-1 px-2 rounded-lg self-center text-badges"
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
