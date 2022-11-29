import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";

import Menu from "./Menu";
import s from "./Navbar.module.scss";
import globe from "/public/Globe.svg";

const Navbar = () => {
  return (
    <nav className={s.navContainer}>
      <div className={s.navWrapper}>
        <m.div
          animate={{ rotate: 360 }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 10,
            repeatDelay: 0,
          }}
          className={s.logo}
        >
          <Image src={globe} alt="globe icon" height={35} width={35} />
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
