import { DocIcon } from "../Icons/Icons";
import img from "../assets/images/aufa_removedbg_cropped.png";

export default function Hero() {
  return (
    <div className="relative bg-darkBlue gap-2 h-[500px] md:h-[550px] rounded-b-[50px] flex justify-between md:px-20 pt-0 md:pt-10 overflow-hidden shadow-xl md:flex-nowrap">
      <div className="text-white mt-32 md:mt-auto w-full my-auto ml-20 md:mx-20">
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
      <div className="z-20 w-[700px] md:w-full">
        <img
          src={img}
          alt=""
          className="object-cover h-full mt-28  md:scale-125"
        />
      </div>
      <div className="absolute p-20 right-0 blur-3xl rounded-full bg-sky-700 object-cover md:top-56 md:right-32 md:p-32 animate-pulse"></div>
      <div className="absolute p-12 bottom-0 blur-3xl rounded-full bg-gold object-cover md:bottom-56 md:right-96 md:p-20 animate-pulse"></div>
    </div>
  );
}
