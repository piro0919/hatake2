import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import React, { ReactElement, useCallback } from "react";
import { TopProps } from "components/Top";

const Layout = dynamic(() => import("components/Layout"), { ssr: false });
const Top = dynamic(() => import("components/Top"), { ssr: false });

function Pages(): JSX.Element {
  const handleSubmit = useCallback<TopProps["onSubmit"]>(({ q }) => {
    window.open(
      `https://www.youtube.com/results?search_query=はじめしゃちょーの畑+${q}`,
      "_blank"
    );
  }, []);

  return <Top onSubmit={handleSubmit} />;
}

Pages.getLayout = function getLayout(page: ReactElement): JSX.Element {
  return (
    <>
      <NextSeo
        additionalLinkTags={[
          {
            href: "https://hatake.kk-web.link/favicon.ico",
            rel: "icon",
          },
          {
            href: "/manifest.json",
            rel: "manifest",
          },
        ]}
        canonical="https://hatake.kk-web.link/"
        description="はじめしゃちょーの畑の非公式ファンサイトです。よろしく土！"
        openGraph={{
          description:
            "はじめしゃちょーの畑の非公式ファンサイトです。よろしく土！",
          images: [
            {
              alt: "Og Image Alt",
              height: 600,
              type: "image/jpeg",
              url: "https://hatake.kk-web.link/og-image-01.jpg",
              width: 800,
            },
          ],
          site_name: "はじめしゃちょーの畑 非公式ファンサイト",
          title: "はじめしゃちょーの畑 非公式ファンサイト",
          url: "https://hatake.kk-web.link/",
        }}
        title="はじめしゃちょーの畑 非公式ファンサイト"
        twitter={{
          cardType: "summary",
          site: "@hajimesyachohtk",
        }}
      />
      <Layout>{page}</Layout>
    </>
  );
};

export default Pages;
