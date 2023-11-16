import React from 'react'
import Title from '../layouts/Title'

import SliderComponent from './SliderComponent';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          
      
        />
      </div>
      <div>
       
       <SliderComponent />
     
      </div>
    </section>
  );
}

export default Projects