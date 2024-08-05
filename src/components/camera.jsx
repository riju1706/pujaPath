import React, { useRef } from "react";

export default function PujaType() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => console.error("Error accessing camera:", err));
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas image to base64 data URL
    const imageDataUrl = canvas.toDataURL("image/png");

    // Create a link element to download the image
    const link = document.createElement("a");
    link.href = imageDataUrl;
    link.download = "captured-image.png";
    link.click();
  };

  return (
    <div>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={captureImage}>Capture Image</button>
      <video ref={videoRef} />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}
