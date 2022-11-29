import type { AppProps } from "next/app";
import "the-new-css-reset";

import Layout from "../common/UI/Layout";
import Noise from "../common/components/Noise";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Noise />
      <Component {...pageProps} />
    </Layout>
  );
}
