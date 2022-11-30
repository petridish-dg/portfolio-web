import { motion as m, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

import s from "/styles/components/Marquee.module.scss";

type MarqueeProps = {
  children: React.ReactNode;
  direction: string;
};

const Marquee = ({ children, direction }: MarqueeProps) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const o = useTransform(scrollYProgress, [0, .25], [0, 1]);

  return (
    <m.div
      style={{ textTransform: "uppercase" }}
      className={s.marqueeContainer}
    >
      <m.div className={s.marqueeTrack}>
        <m.div
          className={s.marqueeContent}
          style={
            direction === "left"
              ? {
                  x: x,
                  opacity: o,
                }
              : { x: x2, flexDirection: "row-reverse", opacity: o }
          }
          transition={{ ease: "easeInOut" }}
        >
          {children}
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Marquee;
