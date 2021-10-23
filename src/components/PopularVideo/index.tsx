import Image from "next/image";
import React, { CSSProperties, useMemo, useState } from "react";
import { usePreviousNumber } from "react-hooks-use-previous";
import useMeasure from "react-use-measure";
import { Autoplay, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";

function PopularVideo(): JSX.Element {
  const [thumbsSwiper, setThumbsSwiper] = useState<never>();
  const videos = useMemo(
    () => [
      {
        title: "大型ショッピングモールの飲食店、全て制覇します。",
        v: "jpeZoyUu_ns",
      },
      {
        title: "【ケンカ寸前】家の前のヤンキー達がマジでうるせえ。",
        v: "9S08k0dqqA8",
      },
      {
        title: "50店舗以上。超大型ショッピングモール制圧します。",
        v: "8mAHOukdNyg",
      },
      {
        title: "【激辛】はじめ、アンタやばい量残しやがったな。",
        v: "GWr4MZ5WdBg",
      },
      {
        title: "肉10kgとか余裕じゃね？",
        v: "dGdT7oKWWSE",
      },
      {
        title: "【10㎏】Unbelievable biggest Mc Donald’s potato mountain",
        v: "K_I9We7PhZc",
      },
      {
        title: "暴風雨の中、はじめしゃちょーをカギかけてみた",
        v: "WpBMNvXxTi0",
      },
      {
        title: "ペットボトルって容器の形だけで分かるよね？",
        v: "nmAuFx8K6h0",
      },
      {
        title: "はじめしゃちょーの畑。ガチのスマブラ大会。",
        v: "0PbFQ5xhWxM",
      },
      {
        title: "1日で何店ラーメン屋さんハシゴできるのか？",
        v: "wFzm1noQeqg",
      },
      {
        title: "【60倍】魔王のおにぎり",
        v: "bkeEXPTPRkg",
      },
      {
        title: "みなさんはじめまして",
        v: "ZiEcKJmvrtI",
      },
    ],
    []
  );
  const [ref, { width }] = useMeasure();
  const prevValue = usePreviousNumber(width);
  const correctWidth = useMemo(() => width || prevValue, [prevValue, width]);
  const slidesPerView = useMemo(
    () => (correctWidth > 440 ? 3 : 2),
    [correctWidth]
  );
  const swiperSlideHeight = useMemo(
    () => correctWidth * 0.5625,
    [correctWidth]
  );
  const thumbsSwiperSlideHeight = useMemo(
    () =>
      ((correctWidth - 12 * (slidesPerView - 1 + 2)) / slidesPerView) * 0.5625,
    [correctWidth, slidesPerView]
  );
  const items = useMemo(
    () =>
      videos.map(({ title, v }) => (
        <SwiperSlide key={v} style={{ height: `${swiperSlideHeight}px` }}>
          <a
            className={styles.anchor}
            href={`https://www.youtube.com/watch?v=${v}`}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt={title}
              className={styles.image}
              layout="fill"
              objectFit="cover"
              src={`http://img.youtube.com/vi/${v}/hqdefault.jpg`}
            />
            <h3 className={styles.heading3}>{title}</h3>
          </a>
        </SwiperSlide>
      )),
    [videos, swiperSlideHeight]
  );
  const thumbsItems = useMemo(
    () =>
      videos.map(({ title, v }) => (
        <SwiperSlide
          className={styles.thumbsSwiperSlide}
          key={v}
          style={{
            height: `${thumbsSwiperSlideHeight}px`,
          }}
        >
          <Image
            alt={title}
            layout="fill"
            objectFit="cover"
            src={`http://img.youtube.com/vi/${v}/hqdefault.jpg`}
          />
        </SwiperSlide>
      )),
    [videos, thumbsSwiperSlideHeight]
  );
  const style = useMemo<CSSProperties>(
    () => ({
      height: `${swiperSlideHeight + thumbsSwiperSlideHeight + 12 * 2}px`,
    }),
    [swiperSlideHeight, thumbsSwiperSlideHeight]
  );

  return (
    <div className={styles.wrapper} ref={ref} style={style}>
      <div className={styles.inner}>
        <Swiper
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className={styles.swiper}
          loop={true}
          modules={[Autoplay, Navigation, Thumbs]}
          navigation={true}
          style={
            {
              "--swiper-navigation-color": "#0c8c1d",
              "--swiper-navigation-size": "24px",
            } as never
          }
          thumbs={{ swiper: thumbsSwiper }}
        >
          {items}
        </Swiper>
        <Swiper
          className={`${styles.thumbsSwiper} pattern-cross-dots-xl`}
          loop={true}
          modules={[Navigation, Thumbs]}
          navigation={true}
          onSwiper={setThumbsSwiper as never}
          slidesPerView={slidesPerView}
          spaceBetween={12}
          style={
            {
              "--swiper-navigation-color": "#0c8c1d",
              "--swiper-navigation-size": "24px",
            } as never
          }
          watchSlidesProgress={true}
        >
          {thumbsItems}
        </Swiper>
      </div>
    </div>
  );
}

export default PopularVideo;
