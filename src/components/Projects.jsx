import PROJECTS from "../lib/Projects";
import ProjectCard from "./ProjectCard";
import RightArrowIcon from "../UI/RightArrowIcon";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col px-10 pt-10 md:px-24 ">
        <h1 className="font-bold text-4xl text-darkBlue-900 underline underline-offset-8 decoration-sky-500">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 mt-5">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              img={project.img}
              title={project.title}
              link={project.link}
              desc={project.desc}
            />
          ))}
          <div className="md:mx-auto md:my-auto text-center h-full w-full flex justify-center items-center">
            <a
              href="https://github.com/aufasyaihan?tab=repositories"
              target="_blank"
              className="flex flex-col gap-2 justify-center items-center group"
            >
              <RightArrowIcon className="px-4 py-2 border-2 border-darkBlue-900 text-darkBlue-900 group-hover:bg-darkBlue-900 w-fit rounded-full transition-all duration-200 ease-in-out group-hover:fill-current group-hover:text-white"/>
              See More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
