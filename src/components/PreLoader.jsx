import { useGSAP } from "@gsap/react";
import { usePresence, motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const PreLoader = () => {
  const container = useRef();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isPresent, safeToRemove] = usePresence();

  useGSAP(
    () => {
      initLoader();
    },
    { scope: container }
  );

  function initLoader() {
    var t1 = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setAnimationComplete(true);
        }, 1000);
        // safeToRemove?.();
      },
    });

    t1.set(".loading-words", {
      display: "none",
    });

    t1.set(".home-active-last", {
      display: "block",
      opacity: 0,
    });

    t1.set(".home-active", { opacity: 0 });
    t1.to(".home-active-first", {
      opacity: 1,
    });
    t1.to(".loading-words", {
      duration: 0.8,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.5,
    });
    t1.to(
      ".home-active",
      {
        duration: 0.01,
        opacity: 1,
        stagger: 0.15,
        ease: "none",
        onStart: homeActive,
      },
      "=-.4"
    );
    t1.to(".home-active-last", {
      duration: 0.01,
      opacity: 1,
      delay: 0.15,
    });
  }

  function homeActive() {
    gsap.to(".home-active", {
      duration: 0.01,
      opacity: 0,
      stagger: 0.15,
      ease: "none",
      delay: 0.15,
    });
  }
  if (animationComplete) {
    return null;
  }
  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 1 } }}
      key="loader"
      className="bg-black text-white h-screen flex justify-center items-center relative text-6xl loading-words overflow-hidden"
    >
      <h2 className="home-active home-active-first">
        Hello<div className="dot"></div>
      </h2>
      <h2 className="home-active">
        Bonjour<div className="dot"></div>
      </h2>
      <h2 className="home-active">
        स्वागत हे<div className="dot"></div>
      </h2>
      <h2 className="home-active">
        Ciao<div className="dot"></div>
      </h2>
      <h2 className="home-active">
        Olá<div className="dot"></div>
      </h2>
      <h2 className="home-active jap">
        おい<div className="dot"></div>
      </h2>
      <h2 className="home-active">
        Hallå<div className="dot"></div>
      </h2>
      <h2 className="home-active">
        Guten tag<div className="dot"></div>
      </h2>
      <h2 className="home-active-last">
        Hallo<div className="dot"></div>
      </h2>
    </motion.div>
  );
};

export default PreLoader;
