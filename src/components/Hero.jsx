import { DocIcon } from "../UI/Icons";
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
          href="https://drive.google.com/file/d/12M0juIDXaqBiuEiTi3dWd9qazksQFmSe/view?usp=sharing"
          target="_blank"
          className="absolute flex gap-1 items-center px-4 py-2 w-fit bg-gold text-darkBlue-900 mt-3 rounded-full hover:shadow-custom-brightGold transition-all duration-200 ease-in-out z-50"
        >
          <span>
            <DocIcon />
          </span>
          My Resume
        </a>
      </div>
      <div className="z-20 sm:w-[700px] md:w-full flex">
        <img
          src={img}
          alt=""
          className="object-cover absolute top-48 left-20 z-40 sm:relative sm:top-0 sm:left-0 sm:block h-full sm:mt-28 scale-75 sm:scale-100 md:scale-125"
        />
        <div className="relative h-4 p-20 blur-3xl w-4 rounded-full bg-sky-700 object-cover md:p-32 animate-pulse -right-96 -top-48 sm:top-52 sm:right-48 md:right-64 md:top-52"></div>
        <div className="relative p-12 blur-3xl w-4 rounded-full z-0 bg-gold h-4 md:p-20 animate-pulse object-cover top-48 right-48 sm:top-36 sm:right-[450px] md:right-[700px] md:top-32"></div>
      </div>
    </div>
  );
}
