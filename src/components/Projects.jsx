import PROJECTS from "../Projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col px-10 md:mx-16 pt-10">
      <h1 className="font-bold text-4xl text-darkBlue underline underline-offset-8 decoration-sky-500">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5 mt-5">
        {
            PROJECTS.map((project)=> (
                <ProjectCard key={project.id} img={project.img} title={project.title} link={project.link} desc={project.desc}/>
            ))
        }
      </div>
    </div>
  );
}
