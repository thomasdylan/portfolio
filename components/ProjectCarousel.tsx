import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
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
          src='/Python-Symbol.png'
          alt='Second slide'
          width={200}
          height={150}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className='d-block w-100'
          src='/Python-Symbol.png'
          alt='Third slide'
          width={200}
          height={150}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProjectCarousel;
