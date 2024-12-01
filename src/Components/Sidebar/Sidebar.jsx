import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import Links from "./Links";
import { motion } from "framer-motion";
import "./sidebar.css";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        stiffness: 20,
        type: "spring",
      },
    },
    closed: {
      transition: {
        stiffness: 400,
        damping: 40,
        delay: 0.5,
        type: "spring",
      },
      clipPath: "circle(30px at 50px 50px)",
    },
  };
  return (
    <div className="sm:bg-gray-600  bg-gray-600  ml-16">
      <motion.div className="sidebar " animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </div>
  );
};

export default Sidebar;
