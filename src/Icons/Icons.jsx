import "../index.css";

export function Circle() {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        id="circle"
        className="size-5"
      >
        <path
          d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"
          fill="#FFD60A"
          className="color000000 svgShape"
        ></path>
        <path
          d="M256 96c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S344.4 96 256 96z"
          fill="#FFD60A"
          className="color000000 svgShape"
        ></path>
      </svg>
      <div className="absolute size-5 bg-brightGold rounded-full inset-0 blur-md"></div>
    </div>
  );
}
