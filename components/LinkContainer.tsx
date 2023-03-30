import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

const LinkContainer = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Container fluid className='bg-secondary' style={{ minHeight: '100vh'}}>
        <Row className={`${isSmallScreen ? 'pt-2' : 'pt-4'} justify-content-center`}>
            <Col className='d-flex align-items-center justify-content-center'>
                <Card className='bg-dark text-light'>
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-center'>Skills</Card.Title>
                      <Card.Text className='d-flex align- p-1'>
                        Javascript, React, Python, SQL, Node.js,<br /> 
                        Next.js, HTML, CSS and more.
                      </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='d-flex align-items-center justify-content-center'>
                <Button variant='contained' className='bg-success' size='lg'>
                    <h3>About</h3>
                </Button>
            </Col>
            <Col className='d-flex align-items-center justify-content-center'>
                <Button variant='contained' className='bg-success' size='lg'>
                    <h3>Contact</h3>
                </Button>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default LinkContainer
