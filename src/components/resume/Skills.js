import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { SingleSkillProps } from './SingleSkillProps';

const Skills = () => {
  const skillsData = [
    {"BASIC WEB: HTML | CSS | Javascript": "50%"},
    {"WEB Design Library: Bootstrap | Tailwind CSS | Material UI": "50%"},
    {"WEB DEVELOPMENT Library: REACT | REDUX": "10%"},
    
    {"Project Management: Xmind | TRELLO | Github | Google docs": "40%"},
    
  ];
  
  const skillsData2 = [
    {"BACKEND & DBMS: MYSQL | MONGODB | JAVA SPRINGBOOT | NODEJS": "60%"},
    {"Machine Learning & AI: Loading............................": "50%"},
    {"Testing: Postman | Jmeter": "50%"},
    {"Website & Server HOSTING: VERCEL | FIREBASE | NETLIFY | AWS": "50%"},
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          
          {/* <h2 className="text-3xl md:text-4xl font-bold">DESIGN WORK</h2> */}
        </div>
        
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          
          {/* single part */}
          {
            
            skillsData.map( (dataObj)=>{
              
              return <SingleSkillProps dataObj={dataObj} />
            })  
          }
          


          
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          
          {/* <h2 className="text-3xl md:text-4xl font-bold">DEVELOPMENT WORK</h2> */}
        </div>
        <div className="flex flex-col gap-6">
        {
            skillsData2.map( (dataObj)=>{

              return <SingleSkillProps dataObj={dataObj} />
            })
          }
          
        </div>
      </div>
    </motion.div>
  );
}

export default Skills


