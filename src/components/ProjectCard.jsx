import E_Voting from "../assets/images/E-Voting.png";

export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-2 border-2 rounded-xl shadow-md w-full md:w-1/3 pb-2">
      <img
        src={E_Voting}
        alt=""
        className="object-fit h-full rounded-t-lg border-b-2 border-b-grey-500"
      />
      <div className="p-4 flex justify-between items-center">
        <h1 className="font-semibold text-xl uppercase text-start">Judul</h1>
        <a href="#" className="underline underline-offset-8 decoration-gold decoration-2 hover:text-gold rounded-full px-2 py-1">Link to Project ↗</a>
      </div>
    </div>
  );
}
