import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";

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
    [0, window.innerHeight * -1.5]
  );
  const y1 = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, window.innerHeight * 1]
  );

  return (
    <>
      <div
        className=" bg-white h-[200vh] relative flex overflow-hidden py-20 "
        ref={containerRef}
      >
        <motion.div
          className="relative top-[5%] rounded-r-3xl text-6xl z-40 w-[40vw] h-[450px] bg-black text-white font-semibold px-20 py-32"
          style={{ y: y1 }}
        >
          Recent Work
        </motion.div>
        <motion.div
          className="relative top-[7%] flex gap-8 px-10"
          style={{ x: x1, y: y1 }}
        >
          {projects.slice(1, 5).map((item) => {
            return (
              <Card2
                url={item?.image.url}
                name={item?.title}
                techStack={item?.techStack}
                desc={item?.description}
                liveurl={item?.liveurl}
                key={item?._id}
              />
            );
          })}
          <div className="relative">
            {/* <Card /> */}
            {/* <Card3 url={projects[1]?.image.url} /> */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectsSection;
