/* eslint-disable react/prop-types */
export default function ExperienceLists({ title, year, description }) {
  return (
    <li className="mt-4">
      <h2 className="flex justify-between font-bold">
        {title} <span>{year}</span>
      </h2>
      <div className="flex flex-col border-l-2 -ml-[18px] pl-4 ">
        <h3>Coordinator</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
