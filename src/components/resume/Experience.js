import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p> */}
         
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sales Manager"
            subTitle="Powerline Computer"
            result="Marketing & Sales"
            timeline="Nov 2021- Mar 2023"
          />
          <ResumeCard
            title="Software Trainee Intern"
            subTitle="Pondit.com "
            timeline="April 2023 - Sep 2023"
            result="Springboot"
            des="Worked with Wordpress CMS and react js remotely."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Smart Framework BD"
            timeline="Oct 2023 - Present"
            result="MERN Stack"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
