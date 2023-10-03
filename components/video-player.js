import "cloudinary-video-player/dist/cld-video-player.min.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import { Cloudinary } from "cloudinary-core";
import { useEffect } from "react";

const VideoPlayer = () => {
  const cld = new Cloudinary({ cloud_name: "amarachi-2812" });
  useEffect(() => {
    const videoPlayer = cld.videoPlayer("video-player", {
      controls:true,
      autoplay: true
    });
    videoPlayer.source("nature", { 
      sourceTypes: ['hls'], 
      transformation: {
          streaming_profile: 'full_hd',
          
      } 
  });
  });
  
  return (
    <div>
      <video id="video-player" className="video-player"/>
    </div>
  );
};
export default VideoPlayer;
