import React from "react";
import MarqueeContainer from "../components/MarqueeContainer";
import Globe from "../icons/Globe";
import ContainerSvg from "../icons/ContainerSvg";
import { motion } from "framer-motion";

const Home = ({ address, avatar, name, title, email, desc, subTitle }) => {
  return (
    <>
      <motion.div
        className="h-screen bg-[#999d9e] relative flex justify-center items-center bg-svg"
        initial={{ opacity: 0, y: 60 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
      >
        <section>
          <div className="h-[90vh] w-[32rem] rounded-full">
            <img
              className=" object-cover h-[90vh] rounded-full w-[32rem]"
              src={avatar?.url}
            ></img>
          </div>
        </section>
        <div className="absolute top-1/2 bottom-1/2  flex justify-between items-center w-screen">
          <div className=" relative w-fit">
            <ContainerSvg />
            <div className="absolute top-[30px] right-[29px]">
              <Globe />
            </div>
            <div className="absolute left-8 text-white top-8 text-wrap w-40 text-xl">
              {address}
            </div>
          </div>
          <div className="mr-20 text-4xl text-white">{title}</div>
        </div>
        <div className=" absolute bottom-0">
          <MarqueeContainer name={name} />
        </div>
      </motion.div>
      <div className="flex py-32 px-28 gap-20 bg-white">
        <div className="w-[70%] text-2xl leading-relaxed">{desc}</div>
        <div className=" text-xl ">{subTitle}</div>
      </div>
    </>
  );
};

export default Home;
