import Avatar from '@mui/material/Avatar'
import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const AvatarDesc = () => {
  return (
    <>
        <Row className='mt-5 pb-2'>
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
        <Row className='d-flex justify-content-center'>
          <Col className='text-center'>
            <h5>Graduate from the University of Utah Full Stack Web Development Bootcamp</h5>
          </Col>
        </Row>
    </>
  )
}

export default AvatarDesc