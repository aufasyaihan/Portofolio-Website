import { DocIcon } from "../Icons/Icons";
import img from "../assets/images/aufa_removedbg_cropped.png";

export default function Hero() {
  return (
    <div className="relative bg-darkBlue-900 gap-2 h-[500px] md:h-[550px] rounded-b-[50px] sm:flex justify-between md:px-20 pt-0 md:pt-10 overflow-hidden shadow-xl md:flex-nowrap">
      <div className="text-white mt-28 ml-10 sm:mt-32 md:mt-auto w-full my-auto sm:ml-20 md:mx-20">
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="text-gold">Hi!</span> I&apos;m
        </h1>
        <p className="text-gold font-semibold mt-3 text-2xl sm:text-4xl">
          Aufa Syaihan Azzahidi
        </p>
        <p className="text-md sm:text-xl mt-3">
          Your favorite <span className="text-gold">Web</span> Developer
        </p>
        <a
          href="https://drive.google.com/file/d/1iPMxgFAIXAfrR6RkCoUBekKQGDHuY75p/view?usp=sharing"
          target="_blank"
          className="flex gap-1 items-center px-4 py-2 w-fit bg-gold text-darkBlue-900 mt-3 rounded-full hover:shadow-custom-brightGold transition ease-in-out"
        >
          <span>
            <DocIcon />
          </span>
          My Resume
        </a>
      </div>
      <div className="z-20 sm:w-[700px] md:w-full">
        <img
          src={img}
          alt=""
          className="object-cover absolute top-48 left-20 z-10 sm:relative sm:top-0 sm:left-0 sm:z-0 sm:block h-full sm:mt-28 scale-75 sm:scale-100 md:scale-125"
        />
      </div>
      <div className="absolute p-20 right-0 blur-3xl rounded-full bg-sky-700 object-cover md:top-56 md:right-32 md:p-32 animate-pulse"></div>
      <div className="absolute p-12 bottom-0 blur-3xl rounded-full bg-gold object-cover md:bottom-56 md:right-96 md:p-20 animate-pulse"></div>
    </div>
  );
}
