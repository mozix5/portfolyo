import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Demo = ({ projects }) => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Map scrollYProgress to transform range for vertical motion
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 1.2]
  );
  const x1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerWidth * 1.2]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * -0.2]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 0.9]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 3.5]
  );

  const Column = ({ projects, y = 0 }) => {
    return (
      <motion.div
        style={{ y}}
        className="w-[32%]  flex flex-col gap-4 relative ch even:-top-[5%] odd:-top-[45%]"
      >
        {projects.map((item) => (
          <Image key={item._id} image={item?.image.url} />
        ))}
      </motion.div>
    );
  };

  const Image = ({ image }) => {
    return (
      <div className="h-72 w-full p-6 bg-[#e7e7e7]">
        <img
          src={image}
          className="object-cover w-full h-full bg-gray-50"
          alt="Project"
        />
      </div>
    );
  };

  console.log(projects);

  return (
    <div
      className="h-[150vh] p-20 flex gap-4  overflow-hidden bg-white"
      ref={container}
    >
      {/* Render columns with sliced projects */}
      <Column projects={projects.slice(0, 5)} x={x1} y={y1} />
      <Column projects={projects.slice(5, 10)} y={y2} />
      <Column projects={projects.slice(10, 15)} y={y3} />
    </div>
  );
};

export default Demo;
