import { Timeline, TimelineProps } from "react-twitter-widgets";

export type ProfileTimelineProps = Pick<TimelineProps, "onLoad">;

function ProfileTimeline({ onLoad }: ProfileTimelineProps): JSX.Element {
  return (
    <Timeline
      dataSource={{ screenName: "hajimesyachohtk", sourceType: "profile" }}
      onLoad={onLoad}
      options={{
        chrome: "noheader, nofooter",
        height: "360px",
        lang: "ja",
      }}
    />
  );
}

export default ProfileTimeline;
