/* eslint-disable react/prop-types */
export default function ProjectCard({ img, title, link, desc }) {
  return (
    <div className="flex flex-col gap-2 border-2 bg-white rounded-xl shadow-md w-full pb-2 overflow-hidden">
      <img
        src={img}
        alt=""
        className="object-cover h-full border-b-2 border-b-grey-500"
      />
      <div className="p-4 flex justify-between items-center">
        <h1 className="font-semibold text-xl uppercase text-start flex flex-col">
          {title}{" "}
          <span className="text-sm text-gray-400 lowercase">
            (
            {desc.map((d, index) => (
              <span key={d}>
                {d}
                {index < desc.length - 1 ? ", " : ""}
              </span>
            ))}
            )
          </span>{" "}
        </h1>
        <a
          href={link}
          className="underline underline-offset-8 decoration-gold decoration-2 hover:text-gold rounded-full px-2 py-1"
        >
          Link to Project ↗
        </a>
      </div>
    </div>
  );
}
