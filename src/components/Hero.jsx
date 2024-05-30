import img from "../assets/images/aufa.jpg";

export default function Hero() {
  return (
    <div className="bg-darkBlue h-[600px] rounded-b-3xl flex justify-between font-poppins px-20">
      <div className="text-white my-auto mx-20">
        <h1 className="text-5xl font-bold">My Name is</h1>
        <p className="text-gold font-semibold mt-3 text-2xl">Aufa Syaihan Azzahidi</p>
        <p className="text-xl mt-3">A <span className="text-gold">Web</span> Developer</p>
      </div>
      <div className="absolute h-60 w-60 bg-white right-[240px] bottom-[240px] rounded-full opacity-35 animate-ping -z-0">

      </div>
      <div className="my-auto mx-28 border-2 p-2 rounded-full scale-110">
        <img src={img} alt="profile picture" className="object-cover h-80 w-80 rounded-full"/>
      </div>
    </div>
  );
}
