// import React, { useEffect, useState } from "react";
// import "./homeCorousel.css";
// import { useTransition, animated } from "react-spring";

// export default function HomeCarousel() {
//   const [imgArrIndex, setImgArrIndex] = useState(1);
//   const [img, setImg] = useState("");
//   const imgArr = ["img/1.png", "img/2.jpg", "img/3.jpg", "img/4.jpg"];

//   const transition = useTransition(imgArr[imgArrIndex], {
//     from: { opacity: 0, display: "none" },
//     enter: { opacity: 1, display: "block" },
//     leave: { opacity: 0, display: "block" },
//     config: { duration: 2000 },
//   });

//   useState(() => {
//     const intervalId = setInterval(() => {
//       setImgArrIndex((i) => (i + 1) % imgArr.length);
//     }, 2000);
//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     setImg(imgArr[imgArrIndex]);
//     setTimeout(() => {
//       setImg("");
//     }, 1000);
//   }, [imgArrIndex]);

//   return (
//     <div>
//       {transition((style, item) => (
//         <animated.div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <img src={item} style={{ width: "95%", height: "500px", ...style }} />
//         </animated.div>
//       ))}

//       {/* <img style={{ width: "95%", height: "500px" }} src="img/1.png" />
//       <img style={{ width: "95%", height: "500px" }} src="img/2.jpg" />
//       <img style={{ width: "95%", height: "500px" }} src="img/3.jpg" />
//       <img style={{ width: "95%", height: "500px" }} src="img/4.jpg" /> */}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./homeCarousel.css";
import { useTransition, animated } from "react-spring";
import { Transform } from "@mui/icons-material";

export default function HomeCarousel() {
  const [imgArrIndex, setImgArrIndex] = useState(0);
  const imgArr = [
    "img/carousel1.gif",
    "img/carousel2.png",
    "img/carousel3.gif",
    "img/carousel4.png",
    "img/carousel5.png",
  ];

  const transition = useTransition(imgArr[imgArrIndex], {
    from: {
      opacity: 0,

      transform: "translate(30rem, 0)",
    },
    enter: { opacity: 1, display: "block", transform: "translate(0, 0)" },
    leave: {
      opacity: 0,
      display: "none",
      transform: "translate(-30rem, 0)",
    },
    config: { duration: 200 },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgArrIndex((i) => (i + 1) % imgArr.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="carouselComponent" style={{ overflow: "hidden" }}>
        <div className="corousellImg">
          {transition((style, item) => (
            <animated.div
              style={{
                display: "flex",
                width: "100%",
                margin: "auto",
                justifyContent: "center",
                ...style,
              }}
            >
              <img src={item} style={{ width: "100%", height: "75vh" }} />
            </animated.div>
          ))}
        </div>
        {/* <img className="corouselStaticImg" src="/img/12.png" /> */}
      </div>
    </div>
  );
}
