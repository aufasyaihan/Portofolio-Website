import SliderCertif from "./SliderCertif";
import CERTIFICATE from "../Certificate";
import Button from "./Button";
import { useState } from "react";

export default function Certificate() {
    const [filter, setFilter] = useState(CERTIFICATE);
    function handleClick(type){
        if(type === "organization"){
            type = "organization";
        } else if(type === "committee"){
            type = "committee";
        } else if(type === "work"){
            type = "work";
        } else if(type === "course & bootcamp"){
            type = "course & bootcamp";
        } else {
            type = null;
        }

        setFilter(CERTIFICATE.filter((item) => item.type === type || type === null));
    }
  return (
    <div className="py-10 sm:px-10 md:px-24 bg-white">
      <h1 className="font-bold text-4xl underline underline-offset-8 decoration-sky-500 px-10">
        Certification
      </h1>
      <div className="relative my-5">
        <div className="flex gap-2 px-12 py-4">
          <Button onClick={() => handleClick("all")}>All</Button>
          <Button onClick={() => handleClick("organization")}>Organization</Button>
          <Button onClick={() => handleClick("committee")}>Committee</Button>
          <Button onClick={() => handleClick("work")}>Work</Button>
          <Button onClick={() => handleClick("course & bootcamp")}>Course & Bootcamp</Button>
        </div>
        <SliderCertif sertif={filter}/>
      </div>
    </div>
  );
}
