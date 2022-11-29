import { motion as m } from "framer-motion";
import React from "react";

import Gradient from "../common/components/Gradient";
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
              FREELANCE GRAPHIC ARTIST
            </h1>
            <h2 className={s.heroSubHead}>
              Powered by Curiosity,
              <br />
              Driven by Design.
            </h2>
          </div>
          <div className={s.heroContent}>
            <p>SCROLL TO EXPLORE ¬</p>
          </div>
          <div className={s.heroWrapper}>
            <div className={s.heroPContainer}>
              <div className={s.heroPWrapper}>
                <Gradient>
                  <p className={s.heroP}>
                    PETER DE GUZMAN IS A FREELANCE GRAPHIC ARTIST LOCATED IN
                    CHICAGO, IL.
                    <br />
                    I’M A CURIOUS CREATIVE READY TO TINKER WITH THE NORMS AS WE
                    BUILD IMPACTFUL, HIGH-CRAFT WORK FOR ALL WALKS OF LIFE.
                  </p>
                </Gradient>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ height: "100vh" }}></section>
    </>
  );
};

export default Home;
