import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
};

const Seo = ({ title, description, keywords, image, url }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={image} />
      <meta name="url" content={url} />
    </Head>
  );
};

export default Seo;
