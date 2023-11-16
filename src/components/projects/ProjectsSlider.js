import React, { useState } from 'react';
import Slider from 'react-slider';
const Card = ({ title, description }) => {
    return (
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', color: 'white' }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
const ProjectsSlider = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
      const cardData = [
        {
          title: 'Card 1',
          description: 'This is the description of Card 1.',
        },
        {
          title: 'Card 2',
          description: 'This is the description of Card 2.',
        },
        {
          title: 'Card 3',
          description: 'This is the description of Card 3.',
        },
        // Add more cards as needed
      ];
    
      return (
        <div>
          <h1>React Slider with Cards</h1>
          <Slider {...sliderSettings}>
            {cardData.map((card, index) => (
              <div key={index}>
                
                <Card title={card.title} description={card.description} />
              </div>
            ))}
          </Slider>
        </div>
      );
};

export default ProjectsSlider;