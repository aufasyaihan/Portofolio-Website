/* eslint-disable react/prop-types */
export default function BlurCircle({ color, bottom, top, right, left, padding }) {
  let colorStyle = "";
  if (color === "gold") {
    colorStyle = " bg-gold";
  } else if (color === "blue") {
    colorStyle = " bg-sky-700";
  } else {
    colorStyle = color
  }

  let position = "";
  if (bottom) {
    position += ` bottom-${bottom}`;
  }
  if (top) {
    position += ` top-${top}`;
  }
  if (right) {
    position += ` right-${right}`;
  }
  if (left) {
    position += ` left-${left}`;
  }
  return (
    <div
      className={`absolute${position} p-${padding} blur-3xl rounded-full ${colorStyle} object-cover -z-0`}
    ></div>
  );
}
