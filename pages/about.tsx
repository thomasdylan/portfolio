import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className='d-flex justify-content-center mt-4 pb-4'>
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center text-center'>
            <p>I am a developer with a passion to create applications that are useful for people in everyday life. 
               I graduated in 2020 from the University of Utah Full Stack Web Development Bootcamp.</p>
            <p>Proficient in Javascript, Node.js, React, MySQL, HTML, CSS and more.</p>
            <p>Looking to join a team where I can have a positive impact while continuing to develop my skills. 
               I have experience working with a team of four developers creating an app 
               that was used to help users find the best rest stops while traveling that focus on UX with a personal 
               focus on backend development and user authentication with JWT, passport and express sessions. 
               I also developed a single page MERN app with one other developer for users to plan their savings or track progress towards big purchases and vacations. 
               With experience developing applications in a six month bootcamp at the University of Utah.
               as well as developing applications using a MERN stack I will be a great asset as a full stack developer in this fast growing and exciting field.</p>
        </Row>
      </Container>
    </>
  )
}