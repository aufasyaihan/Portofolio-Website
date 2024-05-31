import { WORK_EXPERIENCES, ORGANIZATIONS_EXPERIENCES } from "../Experiences";
import ExperienceLists from "./ExperienceLists";

export default function Experience() {
  return (
    <div className="relative bg-darkBlue px-10 md:px-24 py-10 rounded-t-[50px] shadow-lg text-white flex flex-col gap-5">
      <h1 className="font-bold text-4xl text-gold underline underline-offset-8 decoration-gold">Experiences</h1>
      <h2 className="text-2xl">Work Experiences</h2>
      <div className="pl-8 -mt-4">
        <ol className="md:text-xl">
          {WORK_EXPERIENCES.map((exp) => (
            <ExperienceLists
              key={exp.id}
              title={exp.title}
              year={exp.year}
              description={exp.description}
              position={exp.position}
            />
          ))}
        </ol>
      </div>
      <h2 className="text-2xl">Organization Experiences</h2>
      <div className="pl-8 -mt-4">
        <ol className="md:text-xl">
          {ORGANIZATIONS_EXPERIENCES.map((exp) => {
           return (
            <ExperienceLists
              key={exp.id}
              title={exp.title}
              year={exp.year}
              description={exp.description}
              position={exp.position}
            />
            
          )})}
            
        </ol>
      </div>
      <div
        className="absolute top-28 right-0 p-12 blur-3xl rounded-full bg-gold object-cover animate-pulse"
      ></div>
      <div
        className="absolute bottom-28 left-0 p-10 blur-3xl rounded-full bg-sky-700 object-cover animate-pulse"
      ></div>
    </div>
  );
}
