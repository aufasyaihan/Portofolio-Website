import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import { SocialMedia } from "../Icons/Icons";

export default function Footer() {
  return (
    <footer className="bg-darkBlue text-white p-10 border-t border-gray-500 h-40">
      <div className="flex justify-between gap-4 flex-col md:flex-row items-center my-auto md:my-5">
        <div className="flex gap-4 items-center">
          <SocialMedia
            link="https://facebook.com/aufa.azzahidi"
            image={facebook}
            width={30}
          />
          <SocialMedia
            link="https://www.instagram.com/aufa_syhn/"
            image={instagram}
            width={33}
          />
          <SocialMedia
            link="https://www.linkedin.com/in/aufa-syaihan-azzahidi/"
            image={linkedin}
            width={33}
          />
          <SocialMedia
            link="https://github.com/aufasyaihan"
            image={github}
            width={33}
          />
        </div>
        <div className="text-center sm:text-end">
          <p>© 2024 Aufa Syaihan Azzahidi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
