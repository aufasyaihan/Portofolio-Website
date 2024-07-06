import Card from "./Card";
import code from "../assets/icons/code.svg";
import gradCap from "../assets/icons/graduation-cap.svg";
import group from "../assets/icons/group.svg";
import SKILLS from "../lib/Skills";

export default function About() {
  return (
    <div className="flex flex-col gap-5 pt-10 px-10 md:px-24">
      <h1 className="font-bold text-4xl underline underline-offset-8 decoration-sky-500">
        About Me
      </h1>
      <div className="flex flex-wrap sm:flex-wrap md:flex-nowrap gap-5">
        <Card img={code} alt="code" width="75px" cardClass={"w-full md:w-1/3"}>
          <p className="pt-4 text-justify">
            As a Web Developer passionate in front end development, I am
            currently engaged in mastering <strong>React.js</strong> and{" "}
            <strong>Next.js</strong>. I am eager to enhance my skills further
            through hands-on practical experiences.
          </p>
        </Card>
        <Card
          img={gradCap}
          alt="graduation-cap"
          width="75px"
          cardClass="w-full md:w-1/3"
        >
          <p className="pt-4 text-justify">
            I am an active undergraduate student in{" "}
            <strong>Jenderal Soedirman University</strong>, pursuing a degree in
            Informatics. Actively Joined several campus organization to enhance
            my teamwork and leadership skills.
          </p>
        </Card>
        <Card img={group} alt="group" width="75px" cardClass="w-full md:w-1/3">
          <p className="pt-4 text-justify">
            My strong <strong>teamwork</strong> and <strong>leadership</strong>{" "}
            abilities are shown by my experiences in previous organizations. In
            these positions, I have collaborated effectively with diverse teams,
            and consistently achieved our collective goals.
          </p>
        </Card>
      </div>
      <div className="mx-auto mt-5">
        <h1 className="text-3xl font font-semibold text-center">My Skills</h1>
        <div className="grid grid-cols-2 -mt-10 md:mt-0 md:grid-cols-4 lg:grid-cols-8 gap-3 justify-center items-center scale-75">
          {SKILLS.map((skill) => (
            <Card
              key={skill.id}
              img={skill.img}
              alt={skill.alt}
              width={skill.width}
              cardClass={skill.cardClass}
              className={skill.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
