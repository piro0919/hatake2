/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { CSSProperties, useCallback, useMemo, useState } from "react";
import { usePreviousNumber } from "react-hooks-use-previous";
import useMeasure from "react-use-measure";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";

function Goods(): JSX.Element {
  const [ref, { width }] = useMeasure();
  const [style, setStyle] = useState<CSSProperties>();
  const prevValue = usePreviousNumber(width);
  const correctWidth = useMemo(() => width || prevValue, [prevValue, width]);
  const slidesPerView = useMemo(
    () => (correctWidth > 440 ? 3 : 2),
    [correctWidth]
  );
  const handleResize = useCallback<NonNullable<Swiper["onResize"]>>(
    ({ height }): void => {
      setStyle({ height: `${height + 46}px` });
    },
    []
  );

  return (
    <div className={styles.wrapper} ref={ref} style={style}>
      <Swiper
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={`${styles.swiper} pattern-cross-dots-xl`}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        navigation={true}
        onInit={handleResize}
        onResize={handleResize}
        pagination={{ clickable: true }}
        slidesPerView={slidesPerView}
        spaceBetween={12}
        style={
          {
            "--swiper-navigation-color": "#0c8c1d",
            "--swiper-navigation-size": "24px",
            "--swiper-pagination-color": "#0c8c1d",
          } as never
        }
      >
        <SwiperSlide className={styles.swiperSlide}>
          <a
            href="https://www.amazon.co.jp/UUUM%E3%82%A6%E3%83%BC%E3%83%A0-%E3%83%A1%E3%83%A2%E5%B8%B3-%E3%83%9F%E3%83%8B%E3%83%A1%E3%83%A2-%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91-YouTuber/dp/B08N4NGJJL?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91&qid=1634708516&sr=8-10&linkCode=li3&tag=piro09190c-22&linkId=5d5f3c5b07609317e0d557a9f800cfaf&language=ja_JP&ref_=as_li_ss_il"
            rel="noreferrer"
            target="_blank"
          >
            <img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08N4NGJJL&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=piro09190c-22&language=ja_JP" />
          </a>
          <img
            alt=""
            height="1"
            src="https://ir-jp.amazon-adsystem.com/e/ir?t=piro09190c-22&language=ja_JP&l=li3&o=9&a=B08N4NGJJL"
            style={{ border: "none !important", margin: "0 !important" }}
            width="1"
          />
          <a href="https://amzn.to/3GdlD9w" rel="noreferrer" target="_blank">
            ミニメモ
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <a
            href="https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91-%E6%B6%88%E3%81%97%E3%82%B4%E3%83%A0-%E3%81%BE%E3%81%A8%E3%81%BE%E3%82%8B%E3%81%8F%E3%82%93-UUUM%E3%82%A6%E3%83%BC%E3%83%A0-YouTuber/dp/B08N3WJG9V?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91&qid=1634708516&sr=8-5&linkCode=li3&tag=piro09190c-22&linkId=246e025f96e817714a4b804feb1eb4a4&language=ja_JP&ref_=as_li_ss_il"
            rel="noreferrer"
            target="_blank"
          >
            <img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08N3WJG9V&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=piro09190c-22&language=ja_JP" />
          </a>
          <img
            alt=""
            height="1"
            src="https://ir-jp.amazon-adsystem.com/e/ir?t=piro09190c-22&language=ja_JP&l=li3&o=9&a=B08N3WJG9V"
            style={{ border: "none !important", margin: "0 !important" }}
            width="1"
          />
          <a href="https://amzn.to/3DTJedl" rel="noreferrer" target="_blank">
            ケシゴム
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <a
            href="https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91-%E3%82%B7%E3%83%A3%E3%83%BC%E3%83%9A%E3%83%B3-%E3%82%B7%E3%83%A3%E3%83%BC%E3%83%97%E3%83%9A%E3%83%B3-UUUM%E3%82%A6%E3%83%BC%E3%83%A0-YouTuber/dp/B08N3YVXPQ?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91&qid=1634708516&sr=8-3&linkCode=li3&tag=piro09190c-22&linkId=703c112c390a07b7f8024a4172de7e3b&language=ja_JP&ref_=as_li_ss_il"
            rel="noreferrer"
            target="_blank"
          >
            <img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08N3YVXPQ&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=piro09190c-22&language=ja_JP" />
          </a>
          <img
            alt=""
            height="1"
            src="https://ir-jp.amazon-adsystem.com/e/ir?t=piro09190c-22&language=ja_JP&l=li3&o=9&a=B08N3YVXPQ"
            style={{ border: "none !important", margin: "0 !important" }}
            width="1"
          />
          <a href="https://amzn.to/3vsyuzu" rel="noreferrer" target="_blank">
            シャープペン
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <a
            href="https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91-%E6%A8%AA%E7%BD%AB-%E3%83%8E%E3%83%BC%E3%83%88-UUUM%E3%82%A6%E3%83%BC%E3%83%A0-YouTuber/dp/B08N4FLVCF?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91&qid=1634708516&sr=8-4&linkCode=li3&tag=piro09190c-22&linkId=2b338741381561e61fc10b755fcd75dd&language=ja_JP&ref_=as_li_ss_il"
            rel="noreferrer"
            target="_blank"
          >
            <img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08N4FLVCF&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=piro09190c-22&language=ja_JP" />
          </a>
          <img
            alt=""
            height="1"
            src="https://ir-jp.amazon-adsystem.com/e/ir?t=piro09190c-22&language=ja_JP&l=li3&o=9&a=B08N4FLVCF"
            style={{ border: "none !important", margin: "0 !important" }}
            width="1"
          />
          <a href="https://amzn.to/3BYEAKx" rel="noreferrer" target="_blank">
            ノート
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <a
            href="https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E6%96%87%E5%85%B7-UUUM-%E5%A4%9A%E6%A9%9F%E8%83%BD%E3%83%9A%E3%83%B3-%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91-S4480058/dp/B08KW2341L?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91&qid=1634708516&sr=8-2&th=1&linkCode=li3&tag=piro09190c-22&linkId=e0e97d7671258996e564da2bc237abb0&language=ja_JP&ref_=as_li_ss_il"
            rel="noreferrer"
            target="_blank"
          >
            <img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08KW2341L&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=piro09190c-22&language=ja_JP" />
          </a>
          <img
            alt=""
            height="1"
            src="https://ir-jp.amazon-adsystem.com/e/ir?t=piro09190c-22&language=ja_JP&l=li3&o=9&a=B08KW2341L"
            style={{ border: "none !important", margin: "0 !important" }}
            width="1"
          />
          <a href="https://amzn.to/2XsD7wW" rel="noreferrer" target="_blank">
            多機能ペン
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <a
            href="https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E6%96%87%E5%85%B7-UUUM-%E5%A4%9A%E6%A9%9F%E8%83%BD%E3%83%9A%E3%83%B3-%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91-S4480058/dp/B08KVSGLC9?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91&qid=1634708516&sr=8-2&th=1&linkCode=li3&tag=piro09190c-22&linkId=6eb6c728f26e4e297f7a1731e5764387&language=ja_JP&ref_=as_li_ss_il"
            rel="noreferrer"
            target="_blank"
          >
            <img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08KVSGLC9&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=piro09190c-22&language=ja_JP" />
          </a>
          <img
            alt=""
            height="1"
            src="https://ir-jp.amazon-adsystem.com/e/ir?t=piro09190c-22&language=ja_JP&l=li3&o=9&a=B08KVSGLC9"
            style={{ border: "none !important", margin: "0 !important" }}
            width="1"
          />
          <a href="https://amzn.to/3B0uHKZ" rel="noreferrer" target="_blank">
            ふきだし付箋
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <a
            href="https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E6%96%87%E5%85%B7-UUUM-%E5%A4%9A%E6%A9%9F%E8%83%BD%E3%83%9A%E3%83%B3-%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91-S4480058/dp/B08KVRBJR7?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91&qid=1634708516&sr=8-2&th=1&linkCode=li3&tag=piro09190c-22&linkId=588a0a06e5682ae7e695422655505d2c&language=ja_JP&ref_=as_li_ss_il"
            rel="noreferrer"
            target="_blank"
          >
            <img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08KVRBJR7&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=piro09190c-22&language=ja_JP" />
          </a>
          <img
            alt=""
            height="1"
            src="https://ir-jp.amazon-adsystem.com/e/ir?t=piro09190c-22&language=ja_JP&l=li3&o=9&a=B08KVRBJR7"
            style={{ border: "none !important", margin: "0 !important" }}
            width="1"
          />
          <a href="https://amzn.to/3pnu3F9" rel="noreferrer" target="_blank">
            クリアファイル
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <a
            href="https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E6%96%87%E5%85%B7-UUUM-%E5%A4%9A%E6%A9%9F%E8%83%BD%E3%83%9A%E3%83%B3-%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91-S4480058/dp/B08KVRGWRC?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91&qid=1634708516&sr=8-2&th=1&linkCode=li3&tag=piro09190c-22&linkId=cf7c9c0d229c818c3c6ce5b1a373705e&language=ja_JP&ref_=as_li_ss_il"
            rel="noreferrer"
            target="_blank"
          >
            <img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08KVRGWRC&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=piro09190c-22&language=ja_JP" />
          </a>
          <img
            alt=""
            height="1"
            src="https://ir-jp.amazon-adsystem.com/e/ir?t=piro09190c-22&language=ja_JP&l=li3&o=9&a=B08KVRGWRC"
            style={{ border: "none !important", margin: "0 !important" }}
            width="1"
          />
          <a href="https://amzn.to/2Z3RU27" rel="noreferrer" target="_blank">
            クリップセット
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <a
            href="https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E6%96%87%E5%85%B7-UUUM-%E5%A4%9A%E6%A9%9F%E8%83%BD%E3%83%9A%E3%83%B3-%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91-S4480058/dp/B08KVXCWQR?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91&qid=1634708516&sr=8-2&th=1&linkCode=li3&tag=piro09190c-22&linkId=54b4e2e1d663047314a2c269e199da28&language=ja_JP&ref_=as_li_ss_il"
            rel="noreferrer"
            target="_blank"
          >
            <img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08KVXCWQR&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=piro09190c-22&language=ja_JP" />
          </a>
          <img
            alt=""
            height="1"
            src="https://ir-jp.amazon-adsystem.com/e/ir?t=piro09190c-22&language=ja_JP&l=li3&o=9&a=B08KVXCWQR"
            style={{ border: "none !important", margin: "0 !important" }}
            width="1"
          />
          <a href="https://amzn.to/3vuLLYr" rel="noreferrer" target="_blank">
            ペンケース
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <a
            href="https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E6%96%87%E5%85%B7-UUUM-%E5%A4%9A%E6%A9%9F%E8%83%BD%E3%83%9A%E3%83%B3-%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91-S4480058/dp/B08KVQR2NT?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91&qid=1634708516&sr=8-2&th=1&linkCode=li3&tag=piro09190c-22&linkId=aac3d5c55a183958046ed3e910cd5f1d&language=ja_JP&ref_=as_li_ss_il"
            rel="noreferrer"
            target="_blank"
          >
            <img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08KVQR2NT&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=piro09190c-22&language=ja_JP" />
          </a>
          <img
            alt=""
            height="1"
            src="https://ir-jp.amazon-adsystem.com/e/ir?t=piro09190c-22&language=ja_JP&l=li3&o=9&a=B08KVQR2NT"
            style={{ border: "none !important", margin: "0 !important" }}
            width="1"
          />
          <a href="https://amzn.to/3lYUfUG" rel="noreferrer" target="_blank">
            ピースシール
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <a
            href="https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E6%96%87%E5%85%B7-UUUM-%E5%A4%9A%E6%A9%9F%E8%83%BD%E3%83%9A%E3%83%B3-%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91-S4480058/dp/B08KVY45DM?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91&qid=1634708516&sr=8-2&th=1&linkCode=li3&tag=piro09190c-22&linkId=d98e51e45827e4c1577bc7cf25127f94&language=ja_JP&ref_=as_li_ss_il"
            rel="noreferrer"
            target="_blank"
          >
            <img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08KVY45DM&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=piro09190c-22&language=ja_JP" />
          </a>
          <img
            alt=""
            height="1"
            src="https://ir-jp.amazon-adsystem.com/e/ir?t=piro09190c-22&language=ja_JP&l=li3&o=9&a=B08KVY45DM"
            style={{ border: "none !important", margin: "0 !important" }}
            width="1"
          />
          <a href="https://amzn.to/3DRIBRo" rel="noreferrer" target="_blank">
            ダイカットメモ
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Goods;
