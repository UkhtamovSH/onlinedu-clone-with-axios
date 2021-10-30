import React, { useState, useEffect } from "react";
import { FILE_URL } from "../../../helpers/api";
import { getInstance } from '../../../helpers/httpClient'
import VideoJS from "./VideoJS";

const VideoJsPlayer = () => {
  const [video, setVideo] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getVideo()
  }, [])

  const getVideo = () => {
    setLoading(true)
    getInstance()
      .get('/api/v1/course/pedagogika-va-psixologiya/sections/pedagogika-fan-va-amaliyot-sohasi-sifatida/lessons/1183')
      .then(res => {
        setVideo(res.data.data)
        setLoading(false)
      })
      .catch(error => { })
  }

  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    // withCredentials: true,
    // liveTracker: true,
    // fill: true,
    // fluid: true,
    preload: 'auto',
    sources: [{
      src: `${FILE_URL}${video.file}`,
      type: 'video/mp4'
    }],
    // hlsQualitySelector: {
    //   displayCurrentQuality: true,
    // },
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  return (
    <>
      {loading
        ?
        <div>loadig...</div>
        :
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      }
    </>
  )
}

export default VideoJsPlayer
