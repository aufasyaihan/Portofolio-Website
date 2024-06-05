import PROJECTS from "../Projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col px-10 pt-10 md:px-24 ">
        <h1 className="font-bold text-4xl text-darkBlue-900 underline underline-offset-8 decoration-sky-500">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5 mt-5">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              img={project.img}
              title={project.title}
              link={project.link}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
      <div className="text-end px-10 mt-5 md:px-24">
        <a href="https://github.com/aufasyaihan?tab=repositories" target="_blank" className="px-4 py-2 border-2 border-darkBlue-900 text-darkBlue-900 hover:bg-darkBlue-900 w-fit hover:text-white rounded-full transition-all duration-200 ease-in-out">
          See More
        </a>
      </div>
    </>
  );
}
