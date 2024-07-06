import laravel from "../assets/icons/Laravel.svg";
import reactLogo from "../assets/icons/React.svg";
import javaScript from "../assets/icons/javascript.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import tailwind from "../assets/icons/tailwind-css.svg";
import figma from "../assets/icons/figma.svg";
import php from "../assets/icons/php.svg";

const SKILLS = [
  {
    id: Math.random() * 1000 * 1,
    img: reactLogo,
    alt: "react-logo",
    width: "100px",
    cardClass:
      "w-full h-full hover:shadow-sky-200 hover:shadow-xl transition ease-in-out",
    className: "my-auto",
  },
  {
    id: Math.random() * 1000 * 2,
    img: laravel,
    alt: "laravel-logo",
    width: "150px",
    cardClass:
      "w-full h-full hover:shadow-red-200 hover:shadow-xl transition ease-in-out",
    className: "my-auto",
  },
  {
    id: Math.random() * 1000 * 3,
    img: javaScript,
    alt: "javascript-logo",
    width: "125px",
    cardClass:
      "w-full h-full hover:shadow-amber-200 hover:shadow-xl transition ease-in-out",
    className: "my-auto rounded-md",
  },
  {
    id: Math.random() * 1000 * 4,
    img: html,
    alt: "html-logo",
    width: "125px",
    cardClass:
      "w-full h-full hover:shadow-red-200 hover:shadow-xl transition ease-in-out",
    className: "my-auto rounded-md",
  },
  {
    id: Math.random() * 1000 * 5,
    img: css,
    alt: "css-logo",
    width: "125px",
    cardClass:
      "w-full h-full hover:shadow-sky-200 hover:shadow-xl transition ease-in-out",
    className: "my-auto rounded-md",
  },
  {
    id: Math.random() * 1000 * 6,
    img: tailwind,
    alt: "tailwind-logo",
    width: "125px",
    cardClass:
      "w-full h-full hover:shadow-sky-200 hover:shadow-xl transition ease-in-out",
    className: "my-auto rounded-md",
  },
  {
    id: Math.random() * 1000 * 7,
    img: figma,
    alt: "figma-logo",
    width: "125px",
    cardClass:
      "w-full h-full hover:shadow-violet-200 hover:shadow-xl transition ease-in-out",
    className: "my-auto rounded-md",
  },
  {
    id: Math.random() * 1000 * 8,
    img: php,
    alt: "php-logo",
    width: "125px",
    cardClass:
      "w-full h-full hover:shadow-slate-200 hover:shadow-xl transition ease-in-out",
    className: "my-auto rounded-md",
  },
];

export default SKILLS;
