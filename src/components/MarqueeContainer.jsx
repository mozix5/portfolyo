import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { horizontalLoop } from "../helpers/horixontalLoop";
import { Observer } from "gsap/all";

const MarqueeContainer = () => {
  const boxRef = useRef();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(Observer);
  useGSAP(
    () => {
      // gsap.to(boxRef.current, { x: 100 });
      const loop = horizontalLoop(".box", { repeat: -1 });
      Observer.create({
        onChangeY(self) {
          let factor = 2.5;
          if (self.deltaY < 0) {
            factor *= -1;
          }
          gsap
            .timeline({
              defaults: {
                ease: "none",
              },
            })
            .to(loop, { timeScale: factor * 1.5, duration: 0.2 })
            .to(loop, { timeScale: factor / 1.5, duration: 1 }, "+=0.3");
        },
      });
    },
    { scope: boxRef }
  );
  return (
    <div
      ref={boxRef}
      className=" text-9xl font-bold flex gap-4 overflow-hidden"
    >
      <div className="box">Dennis </div>
      <div className="box">Dennis </div>
      <div className="box">Dennis </div>
      <div className="box">Dennis </div>
      <div className="box">Dennis </div>
      {/* <div className="box">Dennis Snellenberg</div> */}
    </div>
  );
};

export default MarqueeContainer;
