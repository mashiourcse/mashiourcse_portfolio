import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiSpringboot } from "react-icons/si";
import {BsFillBugFill} from "react-icons/bs";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              
              <a href="https://github.com/mashiourcse" target='_blank' className="bannerIcon">
              <FaGithub />
</a>
            </span>
            
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/mashiour-rahman-557b6a16b/" target='_blank' className='bannerIcon'>
              <FaLinkedinIn />
              </a>
              
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 pl-2">
             BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            
            <span className="bannerIcon">
              <BsFillBugFill />
            </span>
            
          </div>
        </div>
      </div>
  )
}

export default Media