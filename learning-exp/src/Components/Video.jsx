import { heroVideImagesmall } from "../assets/images";
import { nextIcon } from "../assets/icons";
import { useState } from "react";
import { pauseIcon } from "../assets/icons";
import { video1 } from "../assets/video/index";
import { closeDot } from "../assets/images";
import { gapDot } from "../assets/images";

const Video = (props) => {
  const [on, setOn] = useState(false);

  const handleClick = () => {
    setOn((prevState) => !prevState);
  };

  return (
    <div className="relative z-10">
      <div className="absolute top-32 -right-10 -z-10 w-[80%] max-md:hidden">
      <img  src={closeDot} alt="closeDot"/>
      </div>

      <div className="absolute bottom-20 -left-8 -z-20 w-[80%] max-md:hidden">
      <img className="w-[85%]" src={gapDot} alt="closeDot" width={400}/>
      </div>
      
      {!on && (
        <div>
          <img src={heroVideImagesmall} alt="heroVideImagesmall" width={800}/>
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
        <div className={`bg-rectangle bg-cover bg-center relative ${props.padding ? `${props.padding}`: "p-4"}`}>
          {props.customVideo ? (
            <video
              className="rounded-xl"
              autoPlay
              loop
              controls
              src={props.customVideo}
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
    </div>
  );
};

export default Video;
