export default function Navbar() {
    const hover = "hover:bg-white hover:text-darkBlue py-2 px-4 rounded-full transition-all ease-in-out";
  return (
    <nav className="fixed top-0 w-screen font-poppins">
      <div className="mx-8 my-2 flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold p-4">
          <span className="text-gold">My</span><span className="underline underline-offset-4">Portofolio</span>
        </h1>
        <ul className="flex text-white gap-2 p-4">
          <li>
            <a href="#about" className={hover}>About</a>
          </li>
          <li>
            <a href="#my-projects" className={hover}>My Projects</a>
          </li>
          <li>
            <a href="#resume" className={hover}>Resume</a>
          </li>
          <li>
            <a href="#contact" className={hover}>Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
