import { useEffect, useState } from "react";
import hamburgerMenu from "../assets/icons/HamburgerMenu.svg";
import NavMenu from "./NavMenu";
import HamburgerMenu from "./HamburgerMenu";
import x from "../assets/icons/X.svg";

export default function Navbar() {
  const itemNavStyle = "py-2 px-4 rounded-full transition-all ease-in-out";
  const whiteHover = " hover:bg-white hover:text-darkBlue";
  const goldHover =
    " hover:bg-gold hover:text-darkBlue hover:shadow-custom-brightGold";

  const [isScrolled, setIsScrolled] = useState({
    isScrolled: false,
    isOverHero: false,
  });
  const [isOpen, setIsOpen] = useState(false);

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

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  function handleClose(){
    setIsOpen(false);
  }

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
        <a href="#" className="text-3xl text-white font-bold p-4">
          <span className="text-gold">My</span>
          <span className="underline underline-offset-4">Portofolio</span>
        </a>
        <button className="md:hidden z-50" onClick={handleClick}>
          <img src={isOpen ? x : hamburgerMenu} alt="" width={50} className="text-white transision-all" />
        </button>
        <ul className="text-white gap-2 p-4 hidden md:flex">
          <NavMenu
            itemNavStyle={itemNavStyle}
            whiteHover={whiteHover}
            goldHover={goldHover}
          />
        </ul>
      </div>
      <HamburgerMenu isOpen={isOpen}>
        <NavMenu
          itemNavStyle={itemNavStyle}
          whiteHover={whiteHover}
          goldHover={goldHover}
          onClick={handleClose}
        />
      </HamburgerMenu>
    </nav>
  );
}
