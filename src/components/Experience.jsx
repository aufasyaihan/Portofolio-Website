import { WORK_EXPERIENCES, ORGANIZATIONS_EXPERIENCES } from "../Experiences";
import ExperienceLists from "./ExperienceLists";

export default function Experience() {
  return (
    <div className="bg-darkBlue px-24 py-10 rounded-t-[50px] shadow-lg text-white flex flex-col gap-5">
      <h1 className="font-bold text-4xl text-gold">Experiences</h1>
      <h2 className="text-2xl">Work Experiences</h2>
      <div className="mx-auto px-8 -mt-4">
        <ol className="list-disc text-xl">
          {WORK_EXPERIENCES.map((exp) => (
            <ExperienceLists
              key={exp.id}
              title={exp.title}
              year={exp.year}
              description={exp.description}
            />
          ))}
        </ol>
      </div>
      <h2 className="text-2xl">Organization Experiences</h2>
      <div className="mx-auto px-8 -mt-4">
        <ol className="list-disc text-xl">
          {ORGANIZATIONS_EXPERIENCES.map((exp) => (
            <ExperienceLists
              key={exp.id}
              title={exp.title}
              year={exp.year}
              description={exp.description}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
