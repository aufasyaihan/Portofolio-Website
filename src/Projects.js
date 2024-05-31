import E_Voting from "../assets/images/E-Voting.png";

let increment = 0;

const PROJECTS = [
  {
    id: +new Date() + increment++,
    title: "E-Voting",
    img: E_Voting,
    link: "https://github.com/lastpeace/E-VOTING",
  },
];

export default PROJECTS;
