import React, { useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      <video ref={videoRef}>
        <source src="v1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default VideoPlayer;
