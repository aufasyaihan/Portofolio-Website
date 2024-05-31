/* eslint-disable react/prop-types */
export default function NavMenu({
  itemNavStyle,
  whiteHover,
  goldHover,
  onClick,
}) {
  return (
    <>
      <li>
        <a
          onClick={onClick}
          href="#about"
          className={`${itemNavStyle} + ${whiteHover}`}
        >
          About
        </a>
      </li>
      <li>
        <a
          onClick={onClick}
          href="#projects"
          className={`${itemNavStyle} + ${whiteHover}`}
        >
          My Projects
        </a>
      </li>
      <li>
        <a
          onClick={onClick}
          href="#experience"
          className={`${itemNavStyle} + ${whiteHover}`}
        >
          Experience
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
