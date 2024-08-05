// src/Camera.js
import React, { useRef, useState } from "react";

const Camera = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("Error accessing the camera: ", err);
      });
  };

  const takePhoto = () => {
    const width = 300;
    const height = 200;
    let video = videoRef.current;
    let photo = photoRef.current;

    let context = photo.getContext("2d");
    context.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
  };

  const clearPhoto = () => {
    let photo = photoRef.current;
    let context = photo.getContext("2d");
    context.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
  };

  return (
    <div className="camera">
      <div className="video-container">
        <video ref={videoRef}></video>
        <button onClick={getVideo}>Open Camera</button>
      </div>
      <div className="controls">
        <button onClick={takePhoto}>Take Photo</button>
        {hasPhoto && <button onClick={clearPhoto}>Clear Photo</button>}
      </div>
      <div className={`result ${hasPhoto ? "hasPhoto" : ""}`}>
        <canvas ref={photoRef} width="300" height="200"></canvas>
      </div>
    </div>
  );
};

export default Camera;
