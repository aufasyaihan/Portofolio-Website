import { Circle } from "../Icons/Icons";

/* eslint-disable react/prop-types */
export default function ExperienceLists({
  title,
  year,
  description,
  position,
}) {
  return (
    <>
      <li className="mt-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 -ml-[27px]">
            <Circle />
            <h2 className="font-bold">{title}</h2>
          </div>
          <span>{year}</span>
        </div>
        <div className="flex flex-col border-l-2 -ml-[18px] pl-4 ">
          <h3>{position}</h3>
          <ol className="list-disc ml-5">
            {description.map((desc) => (
              <li key={desc} className="text-justify">
                {desc}
              </li>
            ))}
          </ol>
        </div>
      </li>
    </>
  );
}
