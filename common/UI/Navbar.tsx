import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";

import Menu from "./Menu";
import s from "/styles/UI/Navbar.module.scss";
import globe from "/public/globe2.svg";

const Navbar = () => {
  return (
    <nav className={s.navContainer}>
      <div className={s.navWrapper}>
        <m.div
          className={s.navLogo}
          animate={{ rotate: 360 }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 10,
            repeatDelay: 0,
          }}
        >
          <Image src={globe} alt="globe icon" fill={true} />
        </m.div>
        <p>
          OPEN FOR ANY
          <br />
          COLLABORATIONS AND OFFERS
        </p>
      </div>
      <div className={s.navWrapper}>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
