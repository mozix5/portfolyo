import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectsSection = ({ projects }) => {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start ", "end start"],
  });

  const x1 = useTransform(
    scrollYProgress,
    [0, 0.45],
    [0, window.innerHeight * -5.5]
  );
  const y1 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 2]);

  function Images() {
    return (
      <>
        <motion.div
          style={{ x: x1, y: y1 }}
          className="flex relative top-[10%] h-[40vh]"
          ref={carouselRef}
        >
          <img src="https://picsum.photos/300/200?random=1" alt="" />
          <img src="https://picsum.photos/300/200?random=2" alt="" />
          <img src="https://picsum.photos/300/200?random=3" alt="" />
          <img src="https://picsum.photos/300/200?random=4" alt="" />
          <img src="https://picsum.photos/300/200?random=5" alt="" />
          <img src="https://picsum.photos/300/200?random=6" alt="" />
          <img src="https://picsum.photos/300/200?random=7" alt="" />
          <img src="https://picsum.photos/300/200?random=9" alt="" />
          <img src="https://picsum.photos/300/200?random=2" alt="" />
          <img src="https://picsum.photos/300/200?random=3" alt="" />
          <img src="https://picsum.photos/300/200?random=6" alt="" />
          {/* <img src="https://picsum.photos/300/200?random=7" alt="" /> */}
          {/* <img src="https://picsum.photos/300/200?random=9" alt="" /> */}
          {/* <img src="https://picsum.photos/300/200?random=4" alt="" /> */}
        </motion.div>
      </>
    );
  }

  return (
    <>
      <div
        className=" bg-white h-[200vh] relative flex overflow-hidden py-20 "
        ref={containerRef}
      >
        <motion.div
          className="relative top-[5%] rounded-r-full text-6xl z-40 w-[40vw] h-[400px] bg-black text-white font-semibold px-20 py-32"
          style={{ y: y1 }}
        >
          Recent Work
        </motion.div>
        {/* <div className="py-20"> */}
        <Images />
        {/* </div> */}
      </div>
    </>
  );
};

export default ProjectsSection;
