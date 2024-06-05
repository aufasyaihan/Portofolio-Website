import { useEffect, useState } from "react";
import hamburgerMenu from "../assets/icons/HamburgerMenu.svg";
import NavMenu from "./NavMenu";
import HamburgerMenu from "./HamburgerMenu";
import x from "../assets/icons/X.svg";
import logo from "../assets/icons/Logo.svg";

export default function Navbar() {
  const itemNavStyle = "py-2 px-4 rounded-full transition-all duration-200 ease-in-out";
  const whiteHover = " hover:bg-white hover:text-darkBlue-900";
  const goldHover =
    " hover:bg-gold hover:text-darkBlue-900 hover:shadow-custom-brightGold";

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

  function handleClose() {
    setIsOpen(false);
  }

  let navStyle =
    "fixed top-0 w-screen font-poppins z-50 transition ease-in-out h-[85px]";
  if (isScrolled.isScrolled) {
    navStyle += " backdrop-blur-md";
  }
  if (isScrolled.isOverHero) {
    navStyle += " bg-darkBlue-900";
  }
  return (
    <nav className={navStyle}>
      <div className="h-full mx-8 flex justify-between items-center">
        <a href="#" className="text-3xl text-white font-bold sm:p-4 flex items-center">
          <img src={logo} alt="" width={40}/>
          <span className="text-gold ml-5 hidden sm:block">My</span>
          <span className="underline underline-offset-4 hidden sm:block">Portofolio</span>
        </a>
        <button className="mid:hidden z-50" onClick={handleClick}>
          <img
            src={isOpen ? x : hamburgerMenu}
            alt=""
            width={50}
            className="text-white transision-all"
          />
        </button>
        <ul className="text-white gap-2 p-4 hidden mid:flex">
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
