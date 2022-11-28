import { motion as m, useCycle } from "framer-motion";
import Image from "next/image";
import React from "react";

import s from "./Menu.module.scss";

const Menu = () => {
  const cross = {
    focus: {
      rotate: 135,
    },
  };

  // const innerCross = {
  //   initial: {
  //     height: 20,
  //     width: 20,
  //   },
  //   idle: {
  //     height: 10,
  //     width: 10,
  //     transition: {
  //       repeat: Infinity,
  //       repeatType: "reverse",
  //       duration: 1.5,
  //       ease: "easeInOut",
  //     },
  //   },
  //   onhover: {
  //     height: 20,
  //     width: 20,
  //   },
  //   focus: {
  //     height: 15,
  //     width: 15,
  //   },
  // };

  const [cycle, setCycle] = useCycle(true, false);
  const [cycleClick, setCycleClick] = useCycle(false, true);

  return (
    <m.button
      className={s.menuButton}
      variants={cross}
      initial="initial"
      animate={cycle ? "idle" : "focus"}
      whileHover="onhover"
      whileFocus="focus"
      onHoverStart={() => setCycle}
      onHoverEnd={() => setCycle}
      onTap={() => setCycleClick}
    >
      <m.div className={s.crossContainer}>
        <div className={s.menuCross}></div>
        <div className={s.menuCross}></div>
      </m.div>
      <m.div
        className={s.menuButtonInner}
        variants={{
          initial: {
            height: 20,
            width: 20,
          },
          idle: {
            height: 10,
            width: 10,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
              ease: "easeInOut",
            },
          },
          onhover: {
            height: 20,
            width: 20,
          },
          focus: {
            height: 15,
            width: 15,
          },
        }}
      ></m.div>
    </m.button>
  );
};

export default Menu;
