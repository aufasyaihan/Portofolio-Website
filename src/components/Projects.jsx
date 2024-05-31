import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col px-10 md:mx-16 pt-10">
      <h1 className="font-bold text-4xl text-darkBlue ">Projects</h1>
      <div className="flex flex-wrap sm:flex-wrap md:flex-nowrap gap-5 mt-5">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
