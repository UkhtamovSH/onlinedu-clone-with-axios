import React, { useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = (props) => {

  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      });
      console.log(player);
    } else {
    }
  }, [options])

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    }
  }, [])

  return (
    <div data-vjs-player>
      <video width="320" height="240" ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
}

export default VideoJS;