/* eslint-disable react/prop-types */

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Section({ id, className, children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1 }}
      className={`pt-[85px] ${className}`}
      id={id}
    >
      {children}
    </motion.section>
  );
}
