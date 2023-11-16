import Slider from 'react-slick';

import ProjectsCard from './ProjectsCard';
import React, { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SliderComponent = () => {
  
  const [data, setData] = useState([]);

  const [category, setCategory] = useState("Select");

 
  
  const categoryHandler = (e) =>{
    setCategory(e.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/store_api_data/response_data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="select">
        
      </div>
      <Slider {...sliderSettings}>
        {data.map((card, index) => (
          <div key={index} className='m-2 p-2'>
            <ProjectsCard name={card.name} description={""} src={card.picturelink} githublink={card.githublink} livelink={card.livelink}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
