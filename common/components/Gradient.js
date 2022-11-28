import { motion as m } from "framer-motion";
import React from "react";

import s from "./Gradient.module.scss";

const Gradient = ({ children }) => {
  const variants = {};

  return (
    <m.div className={s.gradientContainer}>
      <m.div className={s.gradientOverlay} />
      <m.div
        initial={{ filter: "blur(0px)" }}
        animate={{ filter: "blur(2px)" }}
        whileHover={{ filter: "blur(0px)" }}
        transition={{
          repeatDelay: 3,
          repeat: Infinity,
          duration: 0.8,
          repeatType: "mirror",
        }}
      >
        {children}
      </m.div>
    </m.div>
  );
};

export default Gradient;
