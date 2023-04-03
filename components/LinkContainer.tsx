import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
//import GitHubIcon from '@mui/icons-material/Github';  Vercel is unable to build project with this icon

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import Image from 'next/image';

import ProjectCarousel from './ProjectCarousel';

const LinkContainer = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const cardSize = isSmallScreen ? '100%' : '300px';

  return (
    <>
      <Container fluid className='bg-secondary' style={{ height: '151vh' }}>
        <Row
          className={`${
            isSmallScreen ? 'pt-2' : 'pt-4'
          } justify-content-center`}
        >
          <Col
            sm='auto'
            className='d-flex align-items-center justify-content-center pb-1'
          >
            <Card
              className='bg-dark text-light'
              style={{ width: cardSize, height: cardSize }}
            >
              <Card.Body>
                <Card.Title className='d-flex justify-content-center'>
                  Skills
                </Card.Title>
                <Card.Text className='d-flex p-1 pt-3'>
                  Javascript, Typescript, React, Python, SQL, Node, Next.js,
                  FireBase, Postgres, HTML, CSS and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm='auto'
            className='d-flex align-items-center justify-content-center pb-1'
          >
            <Card
              className='bg-dark text-light'
              style={{ width: cardSize, height: cardSize }}
            >
              <Card.Body className='d-flex flex-column align-items-center p-1 pt-4'>
                <Card.Title className='d-flex justify-content-center'>
                  Projects
                </Card.Title>
                <Card.Body className='d-flex flex-column align-items-center p-1 pt-4 justify-content-center'>
                  <div className='mb-3'>
                    <ProjectCarousel />
                  </div>

                  <Button variant='outline-light'>
                    <Link
                      href='/projects'
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      View Projects
                    </Link>
                  </Button>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm='auto'
            className='d-flex align-items-center justify-content-center pb-1'
          >
            <Card
              className='bg-dark text-light'
              style={{ width: cardSize, height: cardSize }}
            >
              <Card.Body>
                <Card.Title className='d-flex justify-content-center'>
                  About
                </Card.Title>
                <Card.Text className='d-flex p-1 pt-3'>
                  Developer with a background in the medical device industry and
                  a graduate of the Coding Boot Camp at the University of Utah.
                  Passionate about creating applications that benefit people’s
                  lives while using the most current technologies and the best
                  industry standards.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm='auto'
            className='d-flex align-items-center justify-content-center pb-1'
          >
            <Card
              className='bg-dark text-light'
              style={{ width: cardSize, height: cardSize }}
            >
              <Card.Body>
                <Card.Title className='d-flex justify-content-center pb-3'>
                  Contact
                </Card.Title>
                <Card.Text className='d-flex flex-column p-1'>
                  <Link
                    href='https://github.com/thomasdylan'
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <Image
                      src='/github.svg'
                      alt='Github'
                      width={28}
                      height={28}
                      className='m-1'
                    />
                    {'  '}
                    Github
                  </Link>
                  <br />
                  <Link
                    href='https://www.linkedin.com/in/dylanthomas76/'
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <LinkedInIcon fontSize='large' /> LinkedIn
                  </Link>
                  <br />
                  <Link
                    href='mailto:thomasdylan76@gmail.com'
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <EmailIcon fontSize='large' /> thomasdylan76@gmail.com
                  </Link>
                  <br />
                  <Link
                    href='https://docs.google.com/document/d/1qtOFLzJf2M4k2w_QUw4_Dp6A7qJ6_qz-DWRQAQ_V7nI/edit?usp=sharing'
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <DescriptionIcon fontSize='large' /> Resume
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LinkContainer;
