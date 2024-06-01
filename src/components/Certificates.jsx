import SliderCertif from "./SliderCertif";
import CERTIFICATE from "../Certificate";
import Button from "./Button";
import { useState } from "react";

export default function Certificate() {
  const [filter, setFilter] = useState(CERTIFICATE);
  const [isActive, setIsActive] = useState("all");
  function handleClick(type) {
    setIsActive(type);
    if (
      type === "organization" ||
      type === "committee" ||
      type === "work" ||
      type === "course & bootcamp"
    ) {
      setFilter(CERTIFICATE.filter((item) => item.type === type));
    } else {
      setFilter(CERTIFICATE);
    }
  }
  return (
    <div className="py-10 sm:px-10 md:px-24 bg-white">
      <h1 className="font-bold text-4xl underline underline-offset-8 decoration-sky-500 px-10">
        Certification
      </h1>
      <div className="relative my-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:flex text-xs md:text-md gap-2 px-12 py-4">
          <Button
            onClick={() => handleClick("all")}
            isActive={isActive === "all"}
          >
            All
          </Button>
          <Button
            onClick={() => handleClick("organization")}
            isActive={isActive === "organization"}
          >
            Organization
          </Button>
          <Button
            onClick={() => handleClick("committee")}
            isActive={isActive === "committee"}
          >
            Committee
          </Button>
          <Button
            onClick={() => handleClick("work")}
            isActive={isActive === "work"}
          >
            Work
          </Button>
          <Button
            onClick={() => handleClick("course & bootcamp")}
            isActive={isActive === "course & bootcamp"}
          >
            Course & Bootcamp
          </Button>
        </div>
        <SliderCertif sertif={filter} />
      </div>
    </div>
  );
}
