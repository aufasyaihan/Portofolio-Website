import E_Voting from "./assets/images/E-Voting.png";
import fishLoc from "./assets/images/FishLoc.png";
import projectManager from "./assets/images/ProjectManager.png";
import quizApp from "./assets/images/QuizApp.png";

let increment = 0;

const PROJECTS = [
  {
    id: +new Date() + increment++,
    title: "E-Voting",
    img: E_Voting,
    link: "https://github.com/lastpeace/E-VOTING",
  },
  {
    id: +new Date() + increment++,
    title: "Fishing Location",
    img: fishLoc,
    link: "https://github.com/aufasyaihan/projectsig",
  },
  {
    id: +new Date() + increment++,
    title: "Project Manager",
    img: projectManager,
    link: "https://github.com/aufasyaihan/Project-Manager",
  },
  {
    id: +new Date() + increment++,
    title: "Quiz App",
    img: quizApp,
    link: "https://github.com/aufasyaihan/quizz-app",
  },
];

export default PROJECTS;
