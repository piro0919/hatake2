/* eslint-disable camelcase */
import useSwitch from "@react-hook/switch";
import { useAnimation, motion } from "framer-motion";
import React, { useCallback, useEffect, useMemo } from "react";
import Masonry from "react-masonry-css";
import youheisensei from "./images/6RcVwX97_400x400.jpg";
import mizumizusiiT from "./images/7zffbBAL_400x400.jpg";
import toui_toui_toui from "./images/D-8hQTei_400x400.jpg";
import matazoooooon from "./images/d5EBTewB_400x400.jpg";
import honmonotetsuya from "./images/ECFfsxc4_400x400.jpg";
import daaiicchhi from "./images/KBt0TH1E_400x400.jpg";
import hajimesyacho from "./images/QQGakaXn_400x400.jpg";
import tanacchi_ryu from "./images/YqVnwa81_400x400.png";
import styles from "./style.module.scss";
import Goods from "components/Goods";
import LatestVideo, { LatestVideoProps } from "components/LatestVideo";
import Link from "components/Link";
import Member, { MemberProps } from "components/Member";
import PopularVideo from "components/PopularVideo";
import Profile, { ProfileProps } from "components/Profile";
import ProfileTimeline, {
  ProfileTimelineProps,
} from "components/ProfileTimeline";
import Search, { SearchProps } from "components/Search";
import Section from "components/Section";
/* eslint-enable camelcase */

export type TopProps = Pick<SearchProps, "onSubmit">;

function Top({ onSubmit }: TopProps): JSX.Element {
  const controls = useAnimation();
  const [isLoadedLatestVideo, { on: onLatestVideo }] = useSwitch(false);
  const [isLoadedProfileTimeline, { on: onProfileTimeline }] = useSwitch(false);
  const [value, { on }] = useSwitch(false);
  const handleLoadLatestVideo = useCallback<
    LatestVideoProps["onLoad"]
  >(async () => {
    onLatestVideo();
  }, [onLatestVideo]);
  const handleLoadProfileTimeline = useCallback<
    NonNullable<ProfileTimelineProps["onLoad"]>
  >(async () => {
    onProfileTimeline();
  }, [onProfileTimeline]);
  const members = useMemo<MemberProps["members"] & ProfileProps["members"]>(
    () => [
      {
        birthday: "1993-02-25",
        bloodType: "A",
        color: "#0000ff",
        furigana: "なかの だいち",
        icon: daaiicchhi,
        instagram: "daitiiii",
        name: "だいちぃ",
        realName: "中野 大地",
        subTwitter: "hatakenoD",
        twitter: "daaiicchhi",
      },
      {
        birthday: "1995-06-27",
        bloodType: "A",
        color: "#ffc0cb",
        furigana: "たなざわ りゅうしょう",
        icon: tanacchi_ryu,
        name: "たなっち",
        note: "tanakuso",
        realName: "棚澤 龍昇",
        twitter: "tanacchi_ryu",
      },
      {
        birthday: "1998-01-06",
        bloodType: "B",
        color: "#87ceeb",
        furigana: "おがわ とうい",
        icon: toui_toui_toui,
        instagram: "toui_toui_toui_",
        name: "トゥイ",
        realName: "小河 透生",
        twitter: "toui_toui_toui",
      },
      {
        birthday: "1995-05-12",
        bloodType: "B",
        color: "#ffa500",
        furigana: "なわち てつや",
        icon: honmonotetsuya,
        instagram: "honmonotetsuya",
        name: "凸",
        realName: "縄稚 哲也",
        twitter: "honmonotetsuya",
      },
      {
        birthday: "1995-06-10",
        bloodType: "AB",
        color: "#32cd32",
        furigana: "しみず ともたか",
        icon: mizumizusiiT,
        name: "トマトクン",
        realName: "清水 智貴",
        twitter: "mizumizusiiT",
      },
      {
        birthday: "1993-02-14",
        bloodType: "AB",
        color: "#ff0000",
        furigana: "えだ はじめ",
        icon: hajimesyacho,
        instagram: "hajimesyachodesu",
        name: "はじめしゃちょー",
        realName: "江田 元",
        subTwitter: "duelhajime",
        subYouTube: "https://www.youtube.com/user/hajimexgame",
        twitter: "hajimesyacho",
        youTube: "https://www.youtube.com/c/0214mex",
      },
      {
        birthday: "1993-07-18",
        bloodType: "O",
        color: "#800080",
        furigana: "きまた ゆうすけ",
        icon: matazoooooon,
        instagram: "matazoooooon",
        name: "またぞう",
        realName: "木俣 祐介",
        twitter: "matazoooooon",
        youTube: "https://www.youtube.com/channel/UCuI8XNpuGLBfhkkrzK2KpOQ",
      },
      {
        birthday: "1992-06-25",
        bloodType: "A",
        color: "#ffff00",
        furigana: "つりた ようへい",
        icon: youheisensei,
        name: "やふへゐ先生",
        realName: "釣田 洋平",
        subTwitter: "youheisensei2",
        twitter: "youheisensei",
      },
    ],
    []
  );
  const items = useMemo(
    () =>
      [
        {
          children: <LatestVideo onLoad={handleLoadLatestVideo} />,
          heading: "最新動画土！",
          url: "https://www.youtube.com/channel/UClKeJXipXwX7_ZGxOBnMQyw/videos?view=0&sort=dd&shelf_id=0",
        },
        {
          children: <Member members={members} />,
          heading: "メンバー土！",
        },
        {
          children: <Profile members={members} />,
          heading: "プロフィール土！",
        },
        {
          children: <Search onSubmit={onSubmit} />,
          heading: "検索土！",
          url: "https://www.youtube.com/results?search_query=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91",
        },
        {
          children: <PopularVideo />,
          heading: "人気の動画土！",
          url: "https://www.youtube.com/channel/UClKeJXipXwX7_ZGxOBnMQyw/videos?view=0&sort=p&shelf_id=0",
        },
        {
          children: <ProfileTimeline onLoad={handleLoadProfileTimeline} />,
          heading: "ツイッター土！",
          url: "https://twitter.com/hajimesyachohtk",
        },
        {
          children: <Goods />,
          heading: "グッズ土！",
          url: "https://www.amazon.co.jp/s?k=%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&linkCode=ll2&tag=piro09190c-22&linkId=3feb89eb1b5e6cc5b7eddb8cd401f058&language=ja_JP&ref_=as_li_ss_tl",
        },
        {
          children: <Link />,
          heading: "リンク土！",
        },
      ].map(({ children, heading, url }, index) => (
        <motion.div
          animate={controls}
          custom={index}
          initial={{ scale: 1 }}
          key={heading}
        >
          <Section heading={heading} url={url}>
            {children}
          </Section>
        </motion.div>
      )),
    [
      controls,
      handleLoadLatestVideo,
      handleLoadProfileTimeline,
      members,
      onSubmit,
    ]
  );

  useEffect(() => {
    const callback = async (): Promise<void> => {
      if (!isLoadedLatestVideo || !isLoadedProfileTimeline) {
        return;
      }

      await controls.start({
        scale: 0,
      });

      on();

      controls.start((i) => ({
        scale: 1,
        transition: {
          delay: i * 0.25,
          type: "spring",
        },
      }));
    };

    callback();
  }, [controls, isLoadedLatestVideo, isLoadedProfileTimeline, on]);

  return (
    <div className={styles.wrapper} style={{ opacity: value ? 1 : 0 }}>
      <Masonry
        breakpointCols={{
          980: 1,
          default: 2,
        }}
        className={styles.masonry}
        columnClassName={styles.masonryColumn}
      >
        {items}
      </Masonry>
    </div>
  );
}

export default Top;
