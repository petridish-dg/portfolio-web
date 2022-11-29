import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: JSX.Element|JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
