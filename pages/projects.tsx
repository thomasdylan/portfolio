import React from 'react';
import AvatarDesc from '../components/AvatarDesc';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';

const projects = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const cardSize = isSmallScreen ? '100%' : '300px';

  return (
    <>
      <AvatarDesc />
      <Container fluid>
        <Row
          className={`${
            isSmallScreen ? 'pt-2' : 'pt-4'
          } justify-content-center`}
        >
          <Col className='d-flex justify-content-center'>
            <Card
              className='bg-dark text-light'
              style={{ width: cardSize, height: cardSize + '50px' }}
            >
              <Card.Img
                variant='top'
                src='https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png'
                className='pt-1'
              />
              <Card.Title className='d-flex justify-content-center'>
                100 Days of Python
              </Card.Title>
              <Card.Body className='d-flex justify-content-center'>
                100 python projects in 100 days.
              </Card.Body>
              <Button
                variant='secondary'
                className='d-flex justify-content-center'
              >
                <Link href='https://github.com/thomasdylan/100DaysOfPython' />
                Code
              </Button>
            </Card>
          </Col>
          <Col className='d-flex justify-content-center'>
            <Card
              className='bg-dark text-light'
              style={{ width: cardSize, height: cardSize + '50px' }}
            >
              <Card.Img
                variant='top'
                src='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
              />
              <Card.Title className='d-flex justify-content-center'>
                Placeholder
              </Card.Title>
              <Card.Body>lorem ipsum</Card.Body>
              <div className='d-flex justify-content-between'>
                <Button
                  variant='secondary'
                  className='d-flex justify-content-center'
                >
                  <Link href='https://github.com/thomasdylan/100DaysOfPython' />
                  Site
                </Button>
                <Button
                  variant='secondary'
                  className='d-flex justify-content-center'
                >
                  <Link href='https://github.com/thomasdylan/100DaysOfPython' />
                  Code
                </Button>
              </div>
            </Card>
          </Col>
          <Col className='d-flex justify-content-center'>
            <Card
              className='bg-dark text-light'
              style={{ width: cardSize, height: cardSize + '50px' }}
            >
              <Card.Img
                variant='top'
                src='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
              />
              <Card.Title className='d-flex justify-content-center'>
                Placeholder
              </Card.Title>
              <Card.Body>lorem ipsum</Card.Body>
              <div className='d-flex justify-content-between'>
                <Button
                  variant='secondary'
                  className='d-flex justify-content-center'
                >
                  <Link href='https://github.com/thomasdylan/100DaysOfPython' />
                  Site
                </Button>
                <Button
                  variant='secondary'
                  className='d-flex justify-content-center'
                >
                  <Link href='https://github.com/thomasdylan/100DaysOfPython' />
                  Code
                </Button>
              </div>
            </Card>
          </Col>
          <Col className='d-flex justify-content-center'>
            <Card
              className='bg-dark text-light'
              style={{ width: cardSize, height: cardSize + '50px' }}
            >
              <Card.Img
                variant='top'
                src='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
              />
              <Card.Title className='d-flex justify-content-center'>
                Placeholder
              </Card.Title>
              <Card.Body>lorem ipsum</Card.Body>
              <div className='d-flex justify-content-between'>
                <Button
                  variant='secondary'
                  className='d-flex justify-content-center'
                >
                  <Link href='https://github.com/thomasdylan/100DaysOfPython' />
                  Site
                </Button>
                <Button
                  variant='secondary'
                  className='d-flex justify-content-center'
                >
                  <Link href='https://github.com/thomasdylan/100DaysOfPython' />
                  Code
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default projects;
