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
      <li className="mt-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 -ml-[26.5px]">
            <Circle />
            <h2 className="font-bold">{title}</h2>
          </div>
          <span className="text-end">{year}</span>
        </div>
        <div className="flex flex-col border-l-2 -ml-[18px] pl-4 ">
          <h3>{position}</h3>
          <p className="text-justify text-md mt-2 text-gray-400">{description}</p>
        </div>
      </li>
    </>
  );
}
