import Image from "next/image";
import React, { CSSProperties, useMemo } from "react";
import { usePreviousNumber } from "react-hooks-use-previous";
import { SocialIcon } from "react-social-icons";
import useMeasure from "react-use-measure";
import styles from "./style.module.scss";

type Member = {
  color: string;
  icon: StaticImageData;
  instagram?: string;
  name: string;
  note?: string;
  subTwitter?: string;
  subYouTube?: string;
  twitter: string;
  youTube?: string;
};

export type MemberProps = {
  members: Member[];
};

function Member({ members }: MemberProps): JSX.Element {
  const items = useMemo(
    () =>
      members.map(
        ({
          color,
          icon,
          instagram,
          name,
          note,
          subTwitter,
          subYouTube,
          twitter,
          youTube,
        }) => (
          <li key={name}>
            <div className={styles.itemInner} style={{ background: color }}>
              <div className={styles.iconWrapper}>
                <Image alt={name} layout="fill" objectFit="cover" src={icon} />
              </div>
              <h3 className={styles.heading3}>{name}</h3>
              <ul className={styles.iconList}>
                {[
                  `https://twitter.com/${twitter}`,
                  subTwitter && `https://twitter.com/${subTwitter}`,
                  instagram && `https://www.instagram.com/${instagram}`,
                  note && `https://note.com/${note}`,
                  youTube,
                  subYouTube,
                ]
                  .filter((url) => url)
                  .map((url) => (
                    <li key={url}>
                      <SocialIcon
                        className={styles.icon}
                        fgColor="#fff"
                        rel="noreferrer"
                        target="_blank"
                        url={url}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        )
      ),
    [members]
  );
  const [ref, { width }] = useMeasure();
  const prevValue = usePreviousNumber(width);
  const correctWidth = useMemo(() => width || prevValue, [prevValue, width]);
  const listStyle = useMemo<CSSProperties>(() => {
    if (correctWidth > 660) {
      return {
        gridTemplateColumns: "repeat(4, 1fr)",
      };
    }

    if (correctWidth > 440) {
      return {
        gridTemplateColumns: "repeat(3, 1fr)",
      };
    }

    return {
      gridTemplateColumns: "repeat(2, 1fr)",
    };
  }, [correctWidth]);

  return (
    <div className={`${styles.wrapper} pattern-cross-dots-xl`} ref={ref}>
      <ul className={styles.list} style={listStyle}>
        {items}
      </ul>
    </div>
  );
}

export default Member;
