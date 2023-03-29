import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const LinkContainer = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Container fluid className='bg-secondary' style={{ minHeight: '100vh'}}>
        <Row className={`${isSmallScreen ? 'pt-2' : 'pt-4'} justify-content-center`}>
            <Col className='d-flex align-items-center justify-content-center'>
                <Button variant='contained' className='bg-success' size='lg'>
                    <Row>
                      <h3>Skills</h3>
    
                    </Row>
                    <Row>

                    </Row>
                </Button>
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
