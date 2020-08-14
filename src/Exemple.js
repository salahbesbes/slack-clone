import React from "react";
import { useReducedMotion, motion } from "framer-motion";
function Sidebar({ isOpen }) {
  const shouldReduceMotion = useReducedMotion();
  const closedX = shouldReduceMotion ? 0 : "-100%";

  return (
    <motion.div
      animate={{
        opacity: isOpen ? 1 : 0,
        x: isOpen ? 0 : closedX,
      }}>
        *
      </motion.div>
    

   
  );
}

export default Sidebar;
