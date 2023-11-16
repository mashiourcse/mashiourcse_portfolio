
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export const SingleSkillProps = ({dataObj}) => {

              const key = Object.keys(dataObj);
              let value = Object.values(dataObj);
              let dynamicClassName = `w-[${value} h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`

    return (
    <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-bold font-large ">{key}</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={dynamicClassName}
              >
                <span className="absolute -top-7 right-0">{value}</span>
              </motion.span>
            </span>
          </div>
  )
}
