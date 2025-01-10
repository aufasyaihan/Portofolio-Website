/* eslint-disable react/prop-types */
export default function NavMenu({
    itemNavStyle,
    whiteHover,
    goldHover,
    onClick,
    isActive,
}) {
    return (
        <>
            <li>
                <a
                    onClick={onClick}
                    href="#about"
                    className={`${itemNavStyle} + ${whiteHover} ${
                        isActive === "about" ? "bg-white text-darkBlue-900" : ""
                    }`}
                >
                    About
                </a>
            </li>
            <li>
                <a
                    onClick={onClick}
                    href="#projects"
                    className={`${itemNavStyle} + ${whiteHover} ${
                        isActive === "projects"
                            ? "bg-white text-darkBlue-900"
                            : ""
                    }`}
                >
                    My Projects
                </a>
            </li>
            <li>
                <a
                    onClick={onClick}
                    href="#experiences"
                    className={`${itemNavStyle} + ${whiteHover} ${
                        isActive === "experiences"
                            ? "bg-white text-darkBlue-900"
                            : ""
                    }`}
                >
                    Experience
                </a>
            </li>
            <li>
                <a
                    onClick={onClick}
                    href="#achievements"
                    className={`${itemNavStyle} + ${whiteHover} ${
                        isActive === "achievements"
                            ? "bg-white text-darkBlue-900"
                            : ""
                    }`}
                >
                    Achievements
                </a>
            </li>
            <li>
                <a
                    onClick={onClick}
                    href="#certifications"
                    className={`${itemNavStyle} + ${whiteHover} ${
                        isActive === "certifications"
                            ? "bg-white text-darkBlue-900"
                            : ""
                    }`}
                >
                    Certification
                </a>
            </li>

            <li>
                <a
                    onClick={onClick}
                    href="https://wa.me/6281914488258"
                    target="_blank"
                    className={`${itemNavStyle} + ${goldHover} + border border-brightGold text-brightGold`}
                >
                    Contact Me
                </a>
            </li>
        </>
    );
}
