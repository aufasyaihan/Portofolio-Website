/* eslint-disable react/prop-types */
export default function ProjectCard({img, title, link}) {
  return (
    <div className="flex flex-col gap-2 border-2 bg-white rounded-xl shadow-md w-full pb-2 hover:scale-105 transition-all ease-in">
      <img
        src={img}
        alt=""
        className="object-cover h-full rounded-t-lg border-b-2 border-b-grey-500"
      />
      <div className="p-4 flex justify-between items-center">
        <h1 className="font-semibold text-xl uppercase text-start">{title}</h1>
        <a href={link} className="underline underline-offset-8 decoration-gold decoration-2 hover:text-gold rounded-full px-2 py-1">Link to Project ↗</a>
      </div>
    </div>
  );
}
