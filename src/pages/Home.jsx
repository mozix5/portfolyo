import React from "react";
import MarqueeContainer from "../components/MarqueeContainer";
import Globe from "../icons/Globe";
import ContainerSvg from "../icons/ContainerSvg";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="relative w-fit">
        <ContainerSvg />
        <div className="absolute top-[30px] right-[29px]">
          <Globe />
        </div>
      </div>
      <MarqueeContainer />
    </div>
  );
};

export default Home;
