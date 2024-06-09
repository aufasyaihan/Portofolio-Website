import E_Voting from "./assets/images/E-Voting.png";
import fishLoc from "./assets/images/FishLoc.png";
import projectManager from "./assets/images/ProjectManager.png";
import quizApp from "./assets/images/QuizApp.png";
import foodOrderApp from "./assets/images/Food Order App.png";

let increment = 0;

const PROJECTS = [
  {
    id: +new Date() + increment++,
    title: "E-Voting",
    img: E_Voting,
    link: "https://github.com/lastpeace/E-VOTING",
    desc: ["Laravel 10", "Tailwind"],
  },
  {
    id: +new Date() + increment++,
    title: "Fishing Location",
    img: fishLoc,
    link: "https://github.com/aufasyaihan/projectsig",
    desc: ["Laravel 10", "Tailwind", "Leaflet.js"],
  },
  {
    id: +new Date() + increment++,
    title: "Project Manager",
    img: projectManager,
    link: "https://github.com/aufasyaihan/Project-Manager",
    desc: ["Vite", "React.js"],
  },
  {
    id: +new Date() + increment++,
    title: "Quiz App",
    img: quizApp,
    link: "https://github.com/aufasyaihan/quizz-app",
    desc: ["Vite", "React.js"],
  },
  {
    id: +new Date() + increment++,
    title: "Food Order App",
    img: foodOrderApp,
    link: "https://github.com/aufasyaihan/food-order-app",
    desc: ["Vite", "React.js", "Node.js"],
  },
];

export default PROJECTS;
