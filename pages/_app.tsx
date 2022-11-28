import type { AppProps } from "next/app";
import "the-new-css-reset";

import Layout from "../common/UI/Layout";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
