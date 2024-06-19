import BEM from "./assets/images/certificates/BEM.jpg";
import HMIF from "./assets/images/certificates/HMIF.jpg";
import asprakPBO from "./assets/images/certificates/AsprakPBO.jpg";
import asprakStrukdat from "./assets/images/certificates/AsprakStrukdat.jpg";
import kp from "./assets/images/certificates/KP.jpg";
import IC from "./assets/images/certificates/IC.jpg";
import Lustrum from "./assets/images/certificates/Lustrum.jpg";
import MM from "./assets/images/certificates/MM.jpg";
import Pengmas from "./assets/images/certificates/Pengmas.png";
import Upgrading from "./assets/images/certificates/Upgrading.jpg";
import dicoding1 from "./assets/images/certificates/Belajar Membuat Front-End Web untuk Pemula.jpg";
import dicoding2 from "./assets/images/certificates/Pemrograman Web Pemula.jpg";
import dicoding3 from "./assets/images/certificates/Javascript Dasar.jpg";
import RevoU from "./assets/images/certificates/RevoU.jpg";

let increment = 0;

const CERTIFICATE = [
  {
    id: +new Date() + increment++,
    name: "Staff of Media, Communication, and Information",
    institution: "Informatics Student Association",
    year: "Mar 2023 - Dec 2023",
    img: HMIF,
    link: "https://drive.google.com/file/d/1e4pE_rWXAf09Hqc8JUztO_gsOHQb-ZWB/view?usp=sharing",
    type: "organization",
  },
  {
    id: +new Date() + increment++,
    name: "Staff of the Ministry of Research and Data",
    institution: "Student Executive Board Unsoed",
    year: "Feb 2022 - Dec 2022",
    img: BEM,
    link: "https://drive.google.com/file/d/1SFGKZBiGgQqpuyJ9IL_EY7n4e08UuekL/view?usp=sharing",
    type: "organization",
  },
  {
    id: +new Date() + increment++,
    name: "Staff of Data Structure Practicum",
    institution: "Laboratory Assistant of Jenderal Soedirman University",
    year: "Feb 2023 - Jul 2023",
    img: asprakStrukdat,
    link: "https://drive.google.com/file/d/1KqjmHUqikULkc1Ez6ucHD8yuMDNE5_M5/view?usp=sharing",
    type: "work",
  },
  {
    id: +new Date() + increment++,
    name: "Coordinator of Object-Oriented Programming Practicum",
    institution: "Laboratory Assistant of Jenderal Soedirman University",
    year: "Aug 2023 - Dec 2023",
    img: asprakPBO,
    link: "https://drive.google.com/file/d/1Bc2T87hCdeQUSuNt3yUhuZBqdlPjHSkS/view?usp=sharing",
    type: "work",
  },
  {
    id: +new Date() + increment++,
    name: "Back End Engineer",
    institution: "Dinas Kearsipan dan Perpustakaan Kabupaten Purbalingga",
    year: "Jul 2023 - Aug 2023",
    img: kp,
    link: "https://drive.google.com/file/d/18uj8J_yRujMzmOtUabbylUsLcV7W2fuC/view?usp=sharing",
    type: "work",
  },
  {
    id: +new Date() + increment++,
    name: "Staff of the Documentation Design and Publication Department",
    institution: "Informatics Championship",
    year: "April 2022 - Nov 2022",
    img: IC,
    link: "https://drive.google.com/file/d/1rlvGoCZ047RBgCq93Z6jYUPfGNQUcNwx/view?usp=sharing",
    type: "committee",
  },
  {
    id: +new Date() + increment++,
    name: "Staff of the Documentation Design and Publication Department",
    institution: "Lustrum 3.0",
    year: "Jul 2023 - Nov 2023",
    img: Lustrum,
    link: "https://drive.google.com/file/d/1q45rQhZzmbJHyVYPbU2gTK663PgARQpg/view?usp=sharing",
    type: "committee",
  },
  {
    id: +new Date() + increment++,
    name: "Coordinator of Documentation Design and Publication Department",
    institution: "Maskrab Makrab",
    year: "May 2023 - Jan 2024",
    img: MM,
    link: "https://drive.google.com/file/d/1t5juaIPqCNFV5jr6mfOrykF2_84kT2jg/view?usp=sharing",
    type: "committee",
  },
  {
    id: +new Date() + increment++,
    name: "Coordinator of Consumption Department",
    institution: "Pengabdian Masyarakat",
    year: "Aug 2023 - Sep 2023",
    img: Pengmas,
    link: "https://drive.google.com/file/d/1-bmv1xWCsMoRi98TOU0-BYOIvRzf8Zc2/view?usp=sharing",
    type: "committee",
  },
  {
    id: +new Date() + increment++,
    name: "Staff of the Documentation Design and Publication Department",
    institution: "Upgrading of Informatics Student Association Members",
    year: "May 2024",
    img: Upgrading,
    link: "https://drive.google.com/file/d/1-bmv1xWCsMoRi98TOU0-BYOIvRzf8Zc2/view?usp=sharing",
    type: "committee",
  },
  {
    id: +new Date() + increment++,
    name: "Web Programming for Beginners",
    institution: "Dicoding",
    year: "Apr 2024",
    img: dicoding2,
    link: "https://drive.google.com/file/d/1cDQ4sLXWKX-Q2VGydNKlNH3QD_6jKGRS/view?usp=sharing",
    type: "course & bootcamp",
  },
  {
    id: +new Date() + increment++,
    name: "Learn Creating Front-End Web for Beginners",
    institution: "Dicoding",
    year: "Apr 2024",
    img: dicoding1,
    link: "https://drive.google.com/file/d/1D_WF3HdoZ-ybROGl9GGPy5QAdUwaRGKB/view?usp=sharing",
    type: "course & bootcamp",
  },
  {
    id: +new Date() + increment++,
    name: "Learn Basic Javascript",
    institution: "Dicoding",
    year: "Apr 2024",
    img: dicoding3,
    link: "https://drive.google.com/file/d/1Crwyak_TsW4QIEyIhXseIBOYvpDn94KF/view?usp=sharing",
    type: "course & bootcamp",
  },
  {
    id: +new Date() + increment++,
    name: "Fundamental Course Software Engineering",
    institution: "RevoU",
    year: "May 2024",
    img: RevoU,
    link: "https://drive.google.com/file/d/15jdlCukRWVqo4Cf_wRlHBymBpoh2h7AR/view?usp=sharing",
    type: "course & bootcamp",
  },
];

export default CERTIFICATE;
