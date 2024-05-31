/* eslint-disable react/prop-types */
export default function HamburgerMenu({ children, isOpen }) {

    let open = isOpen ? "block" : "hidden";

  return (
    <div className={`absolute text-end top-0 right-0 bg-black bg-opacity-75 text-white pl-28 pr-6 pt-20 pb-10 w-full backdrop-blur-md ${open} transision-all ease-in`}>
      <ol className="flex flex-col gap-6">{children}</ol>
    </div>
  );
}
