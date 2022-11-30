import { motion as m } from "framer-motion";
import React from "react";

import s from "./Marquee.module.scss";

type MarqueeProps = {
  children: React.ReactNode;
};

const Marquee = ({ children }: MarqueeProps) => {
  return <m.div style={{ textTransform: "uppercase" }}>{children}</m.div>;
};

export default Marquee;
