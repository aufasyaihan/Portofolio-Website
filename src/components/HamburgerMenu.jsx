/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function HamburgerMenu({ children, isOpen }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? "45vh" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      exit={{ height: 0, opacity: 0 }}
      className={`absolute text-end top-0 right-0 bg-black bg-opacity-75 text-white pl-28 pr-6 pt-20 pb-10 w-full backdrop-blur-md ${
        isOpen ? `block` : `hidden`
      } transision-all ease-in`}
    >
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : 20,
        }}
        transition={{ delay: 0.3 }}
      >
        <ol className="flex flex-col gap-6">{children}</ol>
      </motion.div>
    </motion.div>
  );
}
