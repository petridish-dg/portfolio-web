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
              MULTIDISCIPLINARY DESIGNER
            </h1>
            <h2 className={s.heroSubHead}>
              Powered by Curiosity,
              <br />
              Driven by Design.
            </h2>
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
              <p>© COPYRIGHT 2022</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ height: "100vh" }}></section>
    </>
  );
};

export default Home;
