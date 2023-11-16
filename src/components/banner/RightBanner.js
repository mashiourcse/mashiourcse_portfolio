import React from 'react'
import { bannerImg } from "../../assets/index";
import {mord} from "../../assets/index";
import {mypic} from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative ">
      <img
        className="w-[200px] h-[300px] lgl:w-[550px] lgl:h-[580px] z-10 rounded-full"
        src={mypic}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px]  flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner