import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
      <Carousel.Item>
        <Image
          className='d-block w-100'
          src='/Python-Symbol.png'
          alt='100 Days of Python'
          width={200}
          height={150}
        />
        <Carousel.Caption>
          <h3>100 Days of Python</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className='d-block w-100'
          src='/ClientPanel.png'
          alt='Client Panel'
          width={200}
          height={150}
        />

        <Carousel.Caption>
          <h3>Client Panel</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className='d-block w-100'
          src='/ClickyGame.png'
          alt='Clicky Game'
          width={200}
          height={150}
        />

        <Carousel.Caption>
          <h3>Clicky Game</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProjectCarousel;
