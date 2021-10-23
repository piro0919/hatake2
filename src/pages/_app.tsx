import "ress";
import "../styles/globals.scss";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "dayjs/locale/ja";
import "pattern.css";
import dayjs from "dayjs";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import React from "react";
import styles from "../styles/style.module.scss";
import StyleContext, { Style } from "contexts/StyleContext";

if (process.env.NODE_ENV === "development") {
  require("../styles/show-breakpoints.scss");
}

dayjs.locale("ja");

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({
  Component,
  pageProps,
}: AppPropsWithLayout): ReactNode {
  const getLayout =
    Component.getLayout ?? ((page: ReactElement): ReactElement => page);

  return getLayout(
    <>
      <Head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <StyleContext.Provider value={styles as Style}>
        <Component {...pageProps} />
      </StyleContext.Provider>
    </>
  );
}
