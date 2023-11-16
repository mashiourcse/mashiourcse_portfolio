import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const CV = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <ResumeCard
            title="BSc in Computer Science & Engineering"
            subTitle="International Islamic University Chittagong (2016 - 2021)"
            result="3.46/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
    </motion.div>
  );
};

export default CV;
