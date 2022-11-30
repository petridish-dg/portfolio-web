import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";

import Gradient from "../common/components/Gradient";
import Marquee from "../common/components/Marquee";
import lightningL from "../public/LightningLeft.svg";
import lightningR from "../public/LightningRight.svg";
import s from "/styles/Home.module.scss";

const Home = () => {
  return (
    <>
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
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  type: "easeInOut",
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              >
                <Image
                  src={lightningL}
                  alt="lightning"
                  className={s.lightning}
                />
              </m.div>
              <h2 className={s.heroSubHead}>
                Powered by Curiosity,
                <br />
                Driven by Design.
              </h2>
              <m.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  type: "easeInOut",
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              >
                <Image
                  src={lightningR}
                  alt="lightning"
                  className={s.lightning}
                />
              </m.div>
            </div>
          </div>
          <div className={s.heroContent}>
            <div className={s.contentP}>
              <p>CHICAGO, IL.</p>
            </div>
            <div className={s.contentP}>
              <p>
                PORTFOLIO
                <br />
                (2020 — 2022)
              </p>
            </div>
            <div className={s.contentP}>
              <p>SCROLL TO EXPLORE ¬</p>
            </div>
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
      <section>
        <Marquee>
          <p>Branding</p>
        </Marquee>
      </section>
      <section style={{ height: "100vh" }}></section>
    </>
  );
};

export default Home;
