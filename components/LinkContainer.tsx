import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

const LinkContainer = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const cardSize = isSmallScreen ? '100%' : '300px'

  return (
    <>
      <Container fluid className='bg-secondary' style={{ minHeight: '100vh'}}>
        <Row className={`${isSmallScreen ? 'pt-2' : 'pt-4'} justify-content-center`}>
            <Col sm='auto' className='d-flex align-items-center justify-content-center pb-1'>
                <Card className='bg-dark text-light' style={{ width: cardSize, height: cardSize }}>
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-center'>Skills</Card.Title>
                      <Card.Text className='d-flex p-1'>
                        Javascript, React, Python, SQL, Node.js,<br /> 
                        Next.js, HTML, CSS and more.
                      </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm='auto' className='d-flex align-items-center justify-content-center pb-1'>
                <Card className='bg-dark text-light' style={{ width: cardSize, height: cardSize }}>
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-center'>Projects</Card.Title>
                      <Card.Text className='d-flex p-1'>
                        Javascript, React, Python, SQL, Node.js, Next.js, HTML, CSS and more.
                      </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm='auto' className='d-flex align-items-center justify-content-center pb-1'>
                <Card className='bg-dark text-light' style={{ width: cardSize, height: cardSize }}>
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-center'>About</Card.Title>
                      <Card.Text className='d-flex p-1'>
                        <Button>About</Button>
                      </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm='auto' className='d-flex align-items-center justify-content-center pb-1'>
                <Card className='bg-dark text-light' style={{ width: cardSize, height: cardSize }}>
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-center'>Contact</Card.Title>
                      <Card.Text className='d-flex p-1'>
                        Javascript, React, Python, SQL, Node.js,<br /> 
                        Next.js, HTML, CSS and more.
                      </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default LinkContainer
