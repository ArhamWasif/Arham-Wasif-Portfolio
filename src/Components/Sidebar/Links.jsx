import { motion } from "framer-motion";
import React from "react";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemvariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "About", "Projects", "Contact"];
  return (
    <motion.div
      className="links  font-bold "
      variants={variants}
      whileTap={{ scale: 0.95 }}
    >
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemvariants}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
