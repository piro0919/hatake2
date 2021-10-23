import styles from "./style.module.scss";

function Link(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.anchor}
        href="https://www.youtube.com/channel/UClKeJXipXwX7_ZGxOBnMQyw"
        rel="noreferrer"
        target="_blank"
      >
        Channel
      </a>
      <a
        className={styles.anchor}
        href="https://www.youtube.com/channel/UCJESDXmv4kMkBRbXipkkCqg"
        rel="noreferrer"
        target="_blank"
      >
        Subchannel
      </a>
      <a
        className={styles.anchor}
        href="https://twitter.com/hajimesyachohtk"
        rel="noreferrer"
        target="_blank"
      >
        Twitter
      </a>
      <a
        className={styles.anchor}
        href="https://uuum.jp/creator/hatake"
        rel="noreferrer"
        target="_blank"
      >
        UUUM
      </a>
      <a
        className={styles.anchor}
        href="https://ja.wikipedia.org/wiki/%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC#%E3%81%AF%E3%81%98%E3%82%81%E3%81%97%E3%82%83%E3%81%A1%E3%82%87%E3%83%BC%E3%81%AE%E7%95%91"
        rel="noreferrer"
        target="_blank"
      >
        Wikipedia
      </a>
    </div>
  );
}

export default Link;
