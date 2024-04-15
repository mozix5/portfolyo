import React, { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Card2 = ({ url, name, desc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ y: 60,opacity:0,scale:0 }}
      animate={{ y: isHovered ? 0 : 60 }}
      transition={{ duration: 0 }}
      whileInView={{opacity:1,scale:1}}
      exit={{opacity:0 ,scale:0}}
      className="card h-fit"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-image">
        <img src={url} alt={name} className="rounded-2xl" />
      </div>
      {/* <motion.div className="card-title">{name}</motion.div> */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="card-body"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1 }}
          >
            {desc}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card2;
