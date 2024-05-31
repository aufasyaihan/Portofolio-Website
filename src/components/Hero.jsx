import DocIcon from "../Icons/Icons";
import img from "../assets/images/aufa_removedbg_cropped.png";

export default function Hero() {
  return (
    <div className="relative bg-darkBlue h-[550px] rounded-b-[50px] flex justify-between font-poppins px-20 pt-10 overflow-hidden shadow-xl ">
      <div className="text-white my-auto mx-20">
        <h1 className="text-5xl font-bold">
          <span className="text-gold">Hi!</span> I&apos;m
        </h1>
        <p className="text-gold font-semibold mt-3 text-4xl">
          Aufa Syaihan Azzahidi
        </p>
        <p className="text-xl mt-3">
          Your favourite <span className="text-gold">Web</span> Developer
        </p>
        <a
          href="https://docs.google.com/document/d/11kRRi4AK2tDM3U34HB5NcnJLLKfMPY21/edit?usp=sharing&ouid=117240447335121599381&rtpof=true&sd=true"
          target="_blank"
          className="flex gap-1 items-center px-4 py-2 w-fit bg-gold text-darkBlue mt-3 rounded-full hover:shadow-custom-brightGold transition ease-in-out"
        >
          <span>
            <DocIcon />
          </span>
          My Resume
        </a>
      </div>
      <div className="z-20">
        <img src={img} alt="" className="object-cover h-full mt-28 scale-125" />
      </div>
      <div
        className={`absolute top-56 right-32 p-32 blur-3xl rounded-full bg-sky-700 object-cover`}
      ></div>
      <div
        className={`absolute bottom-56 right-96 p-20 blur-3xl rounded-full bg-gold object-cover`}
      ></div>
    </div>
  );
}
