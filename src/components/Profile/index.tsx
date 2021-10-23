import dayjs from "dayjs";
import Image from "next/image";
import React, { CSSProperties, useCallback, useMemo, useState } from "react";
import useMeasure from "react-use-measure";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";

type Member = {
  birthday: string;
  bloodType: string;
  color: string;
  furigana: string;
  icon: StaticImageData;
  name: string;
  realName: string;
};

export type ProfileProps = {
  members: Member[];
};

function Profile({ members }: ProfileProps): JSX.Element {
  const [ref, { width }] = useMeasure();
  const innerStyle = useMemo<CSSProperties>(
    () => ({
      gridTemplateColumns: width > 440 ? "40% 60%" : "1fr",
    }),
    [width]
  );
  const [style, setStyle] = useState<CSSProperties>();
  const handleResize = useCallback<NonNullable<Swiper["onResize"]>>(
    ({ height }): void => {
      setStyle({ height: `${height + 46}px` });
    },
    []
  );
  const getAge = useCallback((birthday: string) => {
    const today = dayjs();
    const age = today.diff(birthday, "year");

    return age;
  }, []);
  const items = useMemo(
    () =>
      members.map(
        ({ birthday, bloodType, color, furigana, icon, name, realName }) => (
          <SwiperSlide key={name}>
            <div className={styles.inner} style={innerStyle}>
              <div className={styles.iconWrapper}>
                <Image alt={name} layout="fill" objectFit="cover" src={icon} />
              </div>
              <div className={styles.listWrapper} style={{ background: color }}>
                <dl className={styles.list}>
                  <dt>名前</dt>
                  <dd>
                    <h3>{name}</h3>
                  </dd>
                  <dt>本名</dt>
                  <dd>
                    <ruby>
                      {realName}
                      <rp>(</rp>
                      <rt className={styles.furigana}>{furigana}</rt>
                      <rp>)</rp>
                    </ruby>
                  </dd>
                  <dt>誕生日</dt>
                  <dd>{dayjs(birthday).format("YYYY.M.D")}</dd>
                  <dt>年齢</dt>
                  <dd>{`${getAge(birthday)}歳`}</dd>
                  <dt>血液型</dt>
                  <dd>{`${bloodType}型`}</dd>
                </dl>
              </div>
            </div>
          </SwiperSlide>
        )
      ),
    [getAge, innerStyle, members]
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
        spaceBetween={12}
        style={
          {
            "--swiper-navigation-color": "#0c8c1d",
            "--swiper-navigation-size": "24px",
            "--swiper-pagination-color": "#0c8c1d",
          } as never
        }
      >
        {items}
      </Swiper>
    </div>
  );
}

export default Profile;
