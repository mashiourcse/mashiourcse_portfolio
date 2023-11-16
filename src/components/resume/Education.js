import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2006 - 2021</p> */}
          
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in CSE"
            subTitle="IIUC "
            timeline="(2016 - 2021)"
            result="3.46/4"
            
          />
          <ResumeCard
            title="Science"
            subTitle="Govt. City College, Chittagong"
            timeline="(2013 - 2015)"
            result="4.42/5"
            
          />
          
        </div>
      </div>
      {/* part Two */}

     
    </motion.div>
  );
}

export default Education