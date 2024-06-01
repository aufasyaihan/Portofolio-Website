import SliderCertif from "./SliderCertif";

export default function Certificate() {
  return (
    <div className="py-10 px-10 md:px-24 bg-white">
      <h1 className="font-bold text-4xl underline underline-offset-8 decoration-sky-500">
        Certification
      </h1>
      <div className="relative my-5">
        <SliderCertif />
      </div>
    </div>
  );
}
