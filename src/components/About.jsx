import Card from "./Card";
import code from "../assets/icons/code.svg";
import gradCap from "../assets/icons/graduation-cap.svg";
import group from "../assets/icons/group.svg";

export default function About() {
  return (
    <div className="flex flex-col pt-10 px-10 md:mx-16">
      <h1 className="font-bold text-4xl text-darkBlue">About Me</h1>
      <div className="flex flex-wrap sm:flex-wrap md:flex-nowrap gap-5 mt-5">
        <Card img={code} alt="code">
          <p className="pt-4 text-justify">
            As a Web Developer passionate about full stack development, I am
            presently engaged in mastering <strong>React.js</strong> and{" "}
            <strong>Next.js</strong>. I am eager to enhance my skills further
            through hands-on practical experiences.
          </p>
        </Card>
        <Card img={gradCap} alt="graduation-cap">
          <p className="pt-4 text-justify">
            I am an active undergraduate student in{" "}
            <strong>Jenderal Soedirman University</strong>, pursuing a degree in
            Informatics. Actively Joined several campus organization to enhance
            my teamwork and leadership skills.
          </p>
        </Card>
        <Card img={group} alt="group">
          <p className="pt-4 text-justify">
            My strong <strong>teamwork</strong> and <strong>leadership</strong>{" "}
            abilities are shown by my experiences in previous organizations. In
            these positions, I have collaborated effectively with diverse teams,
            and consistently achieved our collective goals.
          </p>
        </Card>
      </div>
    </div>
  );
}
