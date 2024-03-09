import { heroVideImagesmall } from "../assets/images";
import { nextIcon } from "../assets/icons";
import { useState } from "react";
import { pauseIcon } from "../assets/icons";
import { video1 } from "../assets/video/index";

const Video = ({ customVideo }) => {
  const [on, setOn] = useState(false);

  const handleClick = () => {
    setOn((prevState) => !prevState);
  };

  return (
    <>
      {!on && (
        <div>
          <img src={heroVideImagesmall} alt="heroVideImagesmall" width={800} />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              onClick={handleClick}
              src={nextIcon}
              alt="nextIcon"
              width={100}
            />
          </span>
        </div>
      )}
      {on && (
        <div className="bg-rectangle bg-cover bg-center relative p-4">
          {customVideo ? (
            <video
              className="rounded-xl"
              autoPlay
              loop
              controls
              src={customVideo}
              type="video/mp4"
            ></video>
          ) : (
            <video
              className="rounded-xl"
              autoPlay
              loop
              controls
              src={video1}
              type="video/mp4"
            ></video>
          )}
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              onClick={handleClick}
              src={pauseIcon}
              alt="pauseIcon"
              width={60}
              className="border-[3px] border-[#fffff9a7] rounded-full p-1"
            />
          </span>
        </div>
      )}
    </>
  );
};

export default Video;
