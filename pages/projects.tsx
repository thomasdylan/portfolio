import React from 'react';
import AvatarDesc from '../components/AvatarDesc';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const projects = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const cardSize = isSmallScreen ? '100%' : '300px';

  return (
    <>
      <AvatarDesc />
      <Container fluid className='bg-secondary' style={{ height: '125vh' }}>
        <Row className='align-items-left pt-1 bg-secondary'>
          <Link href='/' style={{ textDecoration: 'none', color: 'white' }}>
            <ArrowBackIcon /> Back{' '}
          </Link>
        </Row>
        <Row
          className={`${
            isSmallScreen ? 'pt-2' : 'pt-4'
          } justify-content-center bg-secondary`}
        >
          <Col className='d-flex justify-content-center pb-1' sm='auto'>
            <Card
              className='bg-dark text-light pb-2'
              style={{ width: cardSize, height: cardSize + '50px' }}
            >
              <Card.Img
                variant='top'
                src='/Python-Symbol.png'
                className='pt-1'
              />
              <Card.Title className='d-flex justify-content-center'>
                100 Days of Python
              </Card.Title>
              <Card.Body className='d-flex justify-content-center'>
                100 python projects in 100 days.
              </Card.Body>
              <div className='d-flex justify-content-center mt-3'>
                <Link
                  href='https://github.com/thomasdylan/100DaysOfPython'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Button
                    variant='secondary'
                    className='d-flex justify-content-center'
                  >
                    Code
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
          <Col className='d-flex justify-content-center pb-1' sm='auto'>
            <Card
              className='bg-dark text-light pb-2'
              style={{ width: cardSize, height: cardSize + '50px' }}
            >
              <Card.Img variant='top' src='/ClientPanel.png' />
              <Card.Title className='d-flex justify-content-center'>
                Client Panel
              </Card.Title>
              <Card.Body>
                A panel to manage clients information and account balances.
                Built with Angular and Typescript.
              </Card.Body>
              <div className='d-flex justify-content-around'>
                <Link
                  href='https://client-panel-6e5ab.web.app/'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Button
                    variant='secondary'
                    className='d-flex justify-content-center'
                  >
                    Site
                  </Button>
                </Link>
                <Link
                  href='https://github.com/thomasdylan/clientpanel'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Button
                    variant='secondary'
                    className='d-flex justify-content-center'
                  >
                    Code
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
          <Col className='d-flex justify-content-center pb-1' sm='auto'>
            <Card
              className='bg-dark text-light pb-2'
              style={{ width: cardSize, height: cardSize + '50px' }}
            >
              <Card.Img variant='top' src='/ClickyGame.png' />
              <Card.Title className='d-flex justify-content-center'>
                Clicky Game
              </Card.Title>
              <Card.Body>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Built with React. Click the pictures to get points, but don't
                click the same picture twice.
              </Card.Body>
              <div className='d-flex justify-content-around'>
                <Link
                  href='https://thomasdylan.github.io/Clicky-Game/'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Button
                    variant='secondary'
                    className='d-flex justify-content-center'
                  >
                    Site
                  </Button>
                </Link>
                <Link
                  href='https://github.com/thomasdylan/Clicky-Game'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Button
                    variant='secondary'
                    className='d-flex justify-content-center'
                  >
                    Code
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default projects;
