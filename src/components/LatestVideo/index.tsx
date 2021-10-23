import { ReactEventHandler } from "react";
import styles from "./style.module.scss";

export type LatestVideoProps = {
  onLoad: ReactEventHandler<HTMLIFrameElement>;
};

function LatestVideo({ onLoad }: LatestVideoProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <iframe
        allowFullScreen={true}
        className={styles.iframe}
        frameBorder="0"
        onLoad={onLoad}
        src="https://www.youtube.com/embed/?list=UUlKeJXipXwX7_ZGxOBnMQyw"
      />
    </div>
  );
}

export default LatestVideo;
