import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { horizontalLoop } from "../helpers/horixontalLoop";
import { Observer } from "gsap/all";

const MarqueeContainer = ({ name }) => {
  const boxRef = useRef();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(Observer);
  useGSAP(
    () => {
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
            .to(loop, { timeScale: factor * 1.2, duration: 0.2 })
            .to(loop, { timeScale: factor / 1.2, duration: 0.2 });
        },
      });
    },
    { scope: boxRef }
  );
  return (
    <div
      ref={boxRef}
      className="font-play text-[12rem] text-white font-[550] flex gap-20 capitalize tracking-tighter"
    >
      <>
        <div className="box whitespace-nowrap">{name} - </div>
        <div className="box whitespace-nowrap">{name} - </div>
        <div className="box whitespace-nowrap">{name} - </div>
        <div className="box whitespace-nowrap">{name} - </div>
      </>
    </div>
  );
};

export default MarqueeContainer;
