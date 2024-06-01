/* eslint-disable react/prop-types */
export default function Button({ children, isActive, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-full border-2 border-gray-400 hover:bg-darkBlue-900 hover:border-darkBlue-500 hover:text-white transition-all ease-in ${
        isActive ? `bg-darkBlue-900 text-white` : ``
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
