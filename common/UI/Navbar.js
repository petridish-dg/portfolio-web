import Image from "next/image";
import React from "react";

import s from "./Navbar.module.scss";
import button from "/public/ButtonMenu.svg";

const Navbar = () => {
  return (
    <nav className={s.navContainer}>
      <div className={s.navWrapper}></div>
      <div className={s.navWrapper}>
        <button className={s.menuButton}>
          <Image src={button} alt="Menu Button" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
