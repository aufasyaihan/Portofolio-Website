import img from "../assets/images/aufa_removedbg_cropped.png";

export default function Hero() {
  return (
    <div className="relative bg-darkBlue h-[550px] rounded-b-[50px] flex justify-between font-poppins px-20 pt-10 overflow-hidden shadow-xl ">
      <div className="text-white my-auto mx-20">
        <h1 className="text-5xl font-bold">
          <span className="text-gold">Hi!</span> I&apos;m
        </h1>
        <p className="text-gold font-semibold mt-3 text-2xl">
          Aufa Syaihan Azzahidi
        </p>
        <p className="text-xl mt-3">
          A <span className="text-gold">Web</span> Developer
        </p>
        <button className="px-4 py-2 bg-gold text-darkBlue mt-3 rounded-full hover:shadow-custom-brightGold transition ease-in-out">
          My Resume
        </button>
      </div>
      {/* <div className="absolute h-60 w-60 bg-white right-[240px] bottom-[220px] rounded-full opacity-35 animate-ping -z-0">

      </div>
      <div className="my-auto mx-28 border-2 p-2 rounded-full scale-110">
        <img src={img} alt="profile picture" className="object-cover h-80 w-80 rounded-full"/>
      </div> */}
      <div className="z-20">
        <img
          src={img}
          alt=""
          className="object-cover h-full mt-28 scale-125"
        />
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
