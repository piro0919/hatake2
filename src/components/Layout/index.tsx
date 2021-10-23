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

  return (
    <div className={styles.wrapper}>
      <div className={styles.topWrapper}>
        <motion.div className={`${styles.top} ${zone}`} style={topStyle}>
          <motion.div
            // TODO: ロジックあまめ
            animate={{ x: [(width / 7) * 4, width, -200, (width / 7) * 4] }}
            className={styles.cloud}
            style={{ y: "5vh" }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
              // TODO: ロジックあまめ
              times: [0, 3 / 7, 3 / 7, 1],
            }}
          />
          <motion.div
            animate={{ x: [width / 8, width, -200, width / 8] }}
            className={styles.cloud}
            style={{ y: "12.5vh" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              times: [0, 7 / 8, 7 / 8, 1],
            }}
          />
          <motion.div
            animate={{ x: [width / 3, width, -200, width / 3] }}
            className={styles.cloud}
            style={{ y: "20vh" }}
            transition={{
              duration: 22.5,
              ease: "linear",
              repeat: Infinity,
              times: [0, 2 / 3, 2 / 3, 1],
            }}
          />
          <motion.div
            animate={{ x: [(width / 4) * 3, width, -200, (width / 4) * 3] }}
            className={styles.cloud}
            style={{ y: "22.5vh" }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
              times: [0, 1 / 4, 1 / 4, 1],
            }}
          />
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
