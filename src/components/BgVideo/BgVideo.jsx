import VideoPlayer from "react-background-video-player";
import Video from "../../video/bg_video.mp4";

export const BgVideo = () => {
  return (
    <>
      <VideoPlayer
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        className="video"
        src={Video}
        autoPlay={true}
        muted={true}
        loop={true}
      />
    </>
  );
};
