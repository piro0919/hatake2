import { useWindowSize } from "@react-hook/window-size";
import dayjs from "dayjs";
import {
  useViewportScroll,
  motion,
  MotionStyle,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React, { CSSProperties, ReactNode, useMemo } from "react";
import youTube from "./images/logo_youtube_icon_143199.png";
import styles from "./style.module.scss";
import Footer from "components/Footer";
import Header from "components/Header";

export type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  const [width, height] = useWindowSize();
  const innerStyle = useMemo<CSSProperties>(
    () => ({
      minHeight: `${height}px`,
    }),
    [height]
  );
  const { scrollYProgress } = useViewportScroll();
  const topHeight = useTransform(scrollYProgress, [0, 0.75], ["100%", "0%"]);
  const topStyle = useMemo<MotionStyle>(
    () => ({
      height: topHeight,
    }),
    [topHeight]
  );
  const bottomScale = useTransform(scrollYProgress, [0.25, 1], [0, 1]);
  const bottomStyle = useMemo<MotionStyle>(
    () => ({
      scaleY: bottomScale,
    }),
    [bottomScale]
  );
  const zone = useMemo(() => {
    const hour = dayjs().get("hour");

    if (hour >= 6 && hour < 19) {
      return styles.daytime;
    }

    if (hour === 19) {
      return styles.evening;
    }

    return styles.night;
  }, []);
  const items = useMemo(
    () =>
      [
        {
          duration: 25,
          initialX: (width / 7) * 4,
          y: "5vh",
        },
        {
          duration: 30,
          initialX: width / 8,
          y: "12.5vh",
        },
        {
          duration: 22.5,
          initialX: width / 3,
          y: "20vh",
        },
        {
          duration: 35,
          initialX: (width / 4) * 3,
          y: "22.5vh",
        },
      ].map(({ duration, initialX, y }) => (
        <motion.div
          animate={{ x: [initialX, width, -200, initialX] }}
          className={styles.cloud}
          key={y}
          style={{ y }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
            times: [
              0,
              (width - initialX) / (width + 200),
              (width - initialX) / (width + 200),
              1,
            ],
          }}
        />
      )),
    [width]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.topWrapper}>
        <motion.div className={`${styles.top} ${zone}`} style={topStyle}>
          {items}
        </motion.div>
      </div>
      <div className={styles.inner} style={innerStyle}>
        <Header />
        <main className={styles.main}>{children}</main>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <motion.div className={styles.bottom} style={bottomStyle} />
      </div>
      <div className={styles.youtTubeWrapper}>
        <a
          href="https://www.youtube.com/channel/UClKeJXipXwX7_ZGxOBnMQyw"
          rel="noreferrer"
          target="_blank"
        >
          <div className={styles.youtTubeIconWrapper}>
            <Image
              alt="youTube"
              layout="fill"
              objectFit="cover"
              src={youTube}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Layout;
