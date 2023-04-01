import React from 'react';
import AvatarDesc from '../components/AvatarDesc';
import { Col, Container, Row } from 'react-bootstrap';

const projects = () => {
  return (
    <>
      <AvatarDesc />
      <Container fluid>
        <Row className='pt-3'>
          <Col>A</Col>
          <Col>B</Col>
          <Col>C</Col>
        </Row>
        <Row className='pt-3'>
          <Col>A</Col>
          <Col>B</Col>
          <Col>C</Col>
        </Row>
        <Row className='pt-3 pb-3'>
          <Col>A</Col>
          <Col>B</Col>
          <Col>C</Col>
        </Row>
      </Container>
    </>
  );
};

export default projects;
