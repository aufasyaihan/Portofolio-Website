import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import hamburgerMenu from "../assets/icons/HamburgerMenu.svg";
import NavMenu from "./NavMenu";
import HamburgerMenu from "./HamburgerMenu";
import x from "../assets/icons/X.svg";
import logo from "../assets/icons/Logo.svg";

export default function Navbar() {
  const itemNavStyle =
    "py-2 px-4 rounded-full transition-all duration-200 ease-in-out";
  const whiteHover = " hover:bg-white hover:text-darkBlue-900";
  const goldHover =
    " hover:bg-gold hover:text-darkBlue-900 hover:shadow-custom-brightGold";
  const [isScrolled, setIsScrolled] = useState({
    isOverHero: false,
    currSection: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    function handleScroll() {
      if (scrollY.get() > 20 && scrollY.get() < 450) {
        setIsScrolled((prevState) => ({
          ...prevState,
          isOverHero: true,
          currSection: "",
        }));
      } else if (scrollY.get() >= 450 && scrollY.get() < 1050) {
        setIsScrolled((prevState) => ({
          ...prevState,
          isOverHero: true,
          currSection: "about",
        }));
      } else if (scrollY.get() >= 1050 && scrollY.get() < 1800) {
        setIsScrolled((prevState) => ({
          ...prevState,
          isOverHero: true,
          currSection: "projects",
        }));
      } else if (scrollY.get() >= 1800 && scrollY.get() < 2900) {
        setIsScrolled((prevState) => ({
          ...prevState,
          isOverHero: true,
          currSection: "experiences",
        }));
      } else if (scrollY.get() >= 2900) {
        setIsScrolled((prevState) => ({
          ...prevState,
          isOverHero: true,
          currSection: "certifications",
        }));
      } else {
        setIsScrolled({
          isOverHero: false,
          currSection: "",
        });
      }
    }

    scrollY.on("change", handleScroll);

    return () => {
      scrollY.clearListeners();
    };
  }, [scrollY]);

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  function handleClose() {
    setIsOpen(false);
  }

  let navStyle =
    "fixed top-0 w-screen font-poppins z-50 transition ease-in-out h-[85px]";
  if (isScrolled.isOverHero) {
    navStyle += " bg-darkBlue-900 shadow-md";
  }
  return (
    <motion.nav className={navStyle}>
      <div className="h-full mx-8 flex justify-between items-center">
        <a
          href="#"
          className="text-3xl text-white font-bold sm:p-4 flex items-center"
        >
          <img src={logo} alt="" width={40} />
          <span className="text-gold ml-5 hidden sm:block">My</span>
          <span className="underline underline-offset-4 hidden sm:block">
            Portofolio
          </span>
        </a>
        <button className="mid:hidden z-50" onClick={handleClick}>
          <motion.img
            src={isOpen ? x : hamburgerMenu}
            alt=""
            width={50}
            className="text-white transision-all"
            animate={{ rotate: isOpen ? 45 : 0 }}
          />
        </button>
        <ul className="text-white gap-2 p-4 hidden mid:flex">
          <NavMenu
            itemNavStyle={itemNavStyle}
            whiteHover={whiteHover}
            goldHover={goldHover}
            isActive={isScrolled.currSection}
          />
        </ul>
      </div>
      <AnimatePresence>
        {isOpen && (
          <HamburgerMenu isOpen={isOpen}>
            <NavMenu
              itemNavStyle={itemNavStyle}
              whiteHover={whiteHover}
              goldHover={goldHover}
              onClick={handleClose}
            />
          </HamburgerMenu>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
