import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";

import s from "./Menu.module.scss";
import button from "/public/ButtonMenu.svg";

const Menu = () => {
  const cross = {
    focus: {
      rotate: 90,
    },
  };

  const innerCross = {
    hover: {
      height: 20,
      width: 20,
    },
    focus: {
      height: 15,
      width: 15,
    },
  };
  return (
    <m.button
      className={s.menuButton}
      variants={cross}
      whileHover="hover"
      whileFocus="focus"
    >
      <m.div className={s.crossContainer}>
        <div className={s.menuCross}></div>
        <div className={s.menuCross}></div>
      </m.div>
      <m.div
        className={s.menuButtonInner}
        variants={innerCross}
        transition={{ ease: "easeOut" }}
      ></m.div>
    </m.button>
  );
};

export default Menu;
