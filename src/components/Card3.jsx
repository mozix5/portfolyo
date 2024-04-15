import React from "react";
import {motion} from 'framer-motion'
const Card3 = ({ url, name }) => {
  return (
    <motion.div whileInView={{opacity:1,scale:1}} initial={{opacity:0, scale:0}} className="h-[300px] bg-slate-400 w-[400px] relative">
      <img src={url} className="h-full w-full" />
      <div className="h-[300px] bg-black w-[400px] absolute top-0 left-0 bottom-0 right-0 opacity-60 p-6">
        <div
          className=" h-full w-full border-4 border-[#ffffff80]"
        ></div>
      </div>
    </motion.div>
  );
};

export default Card3;
