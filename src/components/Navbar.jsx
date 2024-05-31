import { useEffect, useState } from "react";

export default function Navbar() {
  const hover =
    "hover:bg-white hover:text-darkBlue py-2 px-4 rounded-full transition-all ease-in-out";

  const [isScrolled, setIsScrolled] = useState({
    isScrolled: false,
    isOverHero: false,
  });

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20 && window.scrollY < 500) {
        setIsScrolled((prevState) => ({
          ...prevState,
          isScrolled: true,
          isOverHero: false,
        }));
        // console.log("scrolled");
      } else if (window.scrollY >= 500) {
        setIsScrolled((prevState) => ({
          ...prevState,
          isScrolled: false,
          isOverHero: true,
        }));
        // console.log("over hero section");
      } else {
        setIsScrolled({
          isScrolled: false,
          isOverHero: false,
        });
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let navStyle =
    "fixed top-0 w-screen font-poppins z-50 transition ease-in-out h-[85px]";
  if (isScrolled.isScrolled) {
    navStyle += " backdrop-blur-md";
  }
  if (isScrolled.isOverHero) {
    navStyle += " bg-darkBlue";
  }
  return (
    <nav className={navStyle}>
      <div className="mx-8 my-2 flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold p-4">
          <span className="text-gold">My</span>
          <span className="underline underline-offset-4">Portofolio</span>
        </h1>
        <ul className="flex text-white gap-2 p-4">
          <li>
            <a href="#about" className={hover}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" className={hover}>
              Experience
            </a>
          </li>
          <li>
            <a href="#my-projects" className={hover}>
              My Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={hover}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
