import React from "react";
import MarqueeContainer from "../components/MarqueeContainer";
import Globe from "../icons/Globe";
import ContainerSvg from "../icons/ContainerSvg";

const Home = ({ address, avatar, name, title, email }) => {
  return (
    <>
      <div className="h-screen bg-[#696E79] relative flex justify-center items-center">
        <div className="h-[90vh] w-[32rem] rounded-full ">
          <img
            className=" object-cover h-[90vh] rounded-t-full w-[32rem]"
            src={avatar?.url}
          ></img>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between items-center w-screen">
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
        <div className=" absolute bottom-1">
          <MarqueeContainer name={name} />
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Home;
