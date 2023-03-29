import { useMediaQuery } from '@mui/material';
import Avatar from '@mui/material/Avatar'
import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const AvatarDesc = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <>
        <Container fluid className='bg-dark text-light'>
            <Row className={`${isSmallScreen ? 'pt-3' : 'pt-5'} pb-2`}>
                <Col className='d-flex justify-content-center'>
                    <Avatar 
                    src='/tempAvatar.png'
                    alt='Dylan Thomas'
                    sx={{ width: 144, height: 144 }}
                    />
                </Col>
            </Row>
            <Row className='pb-2'>
                <Col className='d-flex justify-content-center'>
                <h1>Dylan Thomas</h1>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col className='text-center'>
                    <h5>Web Developer</h5>
                </Col>
            </Row>
            <Row className={`${isSmallScreen ? 'pt-2' : 'pb-4'} d-flex justify-content-center `}>
                <Col className='text-center'>
                    <h6>Graduate from the University of Utah Full Stack Web Development Bootcamp</h6>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AvatarDesc