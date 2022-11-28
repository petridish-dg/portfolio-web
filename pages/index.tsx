import React from "react";

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
              Chaotic, Daring,
              <br />
              But Above All, Incisive.
            </h2>
          </div>
          <div className={s.heroContent}>
            <p>SCROLL TO EXPLORE ¬</p>
          </div>
          <div className={s.heroWrapper}>
            <p className={s.heroP}>
              PETER DE GUZMAN IS A FREELANCE GRAPHIC ARTIST LOCATED IN CHICAGO,
              IL. I’M A CURIOUS CREATIVE READY TO TINKER WITH THE NORMS AS WE
              BUILD IMPACTFUL, HIGH-CRAFT WORK FOR ALL WALKS OF LIFE.
            </p>
          </div>
        </div>
      </section>
      <section style={{ height: "100vh" }}></section>
    </>
  );
};

export default Home;
