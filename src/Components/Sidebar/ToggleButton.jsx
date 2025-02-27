import React from "react";
import { motion } from "framer-motion";
import "./sidebar.css";
const ToggleButton = ({ setOpen, isOpen }) => {
  return (
    <div>
      <button
        className="btn7 bg-gray-600 "
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg className="btn8" width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
            initial={false}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            initial={false}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
            initial={false}
            animate={isOpen ? "open" : "closed"}
          />
        </svg>
      </button>
    </div>
  );
};

export default ToggleButton;
