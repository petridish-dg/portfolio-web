import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";

import Gradient from "../common/components/Gradient";
import Marquee from "../common/components/Marquee";
import lightningL from "../public/LightningLeft.svg";
import lightningR from "../public/LightningRight.svg";
import s from "/styles/Home.module.scss";

const Home = () => {
  const lightningVariants = {
    animate: {
      opacity: [0, 1, 0],
      transition: {
        type: "easeInOut",
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.5,
      },
    },
  };

  const subtitleText = [
    "CHICAGO, IL.",
    "PORTFOLIO \n ( 2020 — 2022 )",
    "SCROLL TO EXPLORE ¬",
  ];

  return (
    <>
      {/* Hero Section */}

      <section className={s.heroSection}>
        <div className={s.heroContainer}>
          <div className={s.heroWrapper}>
            <h1 className={s.heroHead}>
              I&#39;M PETER DE GUZMAN
              <br />
              MULTIDISCIPLINARY DESIGNER
            </h1>

            <div className={s.lightningContainer}>
              <m.div
                className={s.lightningWrapper}
                variants={lightningVariants}
                animate="animate"
              >
                <Image
                  className={s.lightning}
                  src={lightningL}
                  alt="lightning"
                  fill={true}
                />
              </m.div>
              <h2 className={s.heroSubHead}>
                Powered by Curiosity,
                <br />
                Driven by Design.
              </h2>
              <m.div
                className={s.lightningWrapper}
                variants={lightningVariants}
                animate="animate"
              >
                <Image
                  className={s.lightning}
                  src={lightningR}
                  alt="lightning"
                  fill={true}
                />
              </m.div>
            </div>
          </div>
          <div className={s.heroContent}>
            {subtitleText.map((text, index) => {
              return (
                <div key={index} className={s.contentP}>
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
          <div className={s.heroWrapper}>
            <div className={s.heroPContainer}>
              <div className={s.heroPWrapper}>
                <Gradient>
                  <p className={s.heroP}>
                    I’M PASSIONATE ABOUT HUMAN AND DESIGN INTERACTION, NOT
                    LIMITED TO ONE MEDIUM OR ANOTHER. I LOVE WORKING AT THE
                    INTERSECTION OF CREATIVITY AND SEAMLESS INTEGRATION THROUGH
                    BOTH DIGITAL AND PRINT PRODUCTS.
                  </p>
                </Gradient>
              </div>
              {/* <p>© COPYRIGHT 2022</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}

      <section className={s.marqueeSection}>
        <div className={s.marqueeContainer}>
          <Marquee direction="left">
            <p className="h1-style">Identity Systems</p>
            <p className="h1-style">Branding</p>
            <p className="h1-style">Identity Systems</p>
            <p className="h1-style">BrandingPackaging</p>
          </Marquee>
          <Marquee direction="right">
            <p className="h1-style">User Experience</p>
            <p className="h1-style">User Interaction</p>
            <p className="h1-style">User Experience</p>
            <p className="h1-style">User Interaction</p>
          </Marquee>
          <Marquee direction="left">
            <p className="h1-style">Packaging</p>
            <p className="h1-style">Typography</p>
            <p className="h1-style">Packaging</p>
            <p className="h1-style">Typography</p>
          </Marquee>
        </div>
      </section>
      <section style={{ height: "100vh" }}></section>
    </>
  );
};

export default Home;
