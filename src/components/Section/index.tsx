import React, { ReactNode } from "react";
import { SocialIcon, SocialIconProps } from "react-social-icons";
import styles from "./style.module.scss";

export type SectionProps = Partial<Pick<SocialIconProps, "url">> & {
  children: ReactNode;
  heading: string;
};

function Section({ children, heading, url }: SectionProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <h2 className={styles.heading2}>{heading}</h2>
        {url ? (
          <SocialIcon
            className={styles.icon}
            fgColor="#fff"
            rel="noreferrer"
            target="_blank"
            url={url}
          />
        ) : null}
      </div>
      <hr className={`${styles.hr} pattern-diagonal-lines-sm`} />
      <div className={styles.inner}>{children}</div>
    </section>
  );
}

export default Section;
