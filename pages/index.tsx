import { Avatar } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//React Bootstrap imports
import { Container, Row, Col } from 'react-bootstrap'


export default function Home() {
  return (
    <>
      <Container>
        <Row className='pt-4 pb-2'>
          <Col className='my-auto'>
            <Avatar 
              src='/tempAvatar.png'
              alt='Dylan Thomas'
              sx={{ width: 144, height: 144 }}
            />
          </Col>
          </Row>
          <Row>
            <h1>Dylan Thomas</h1>
        </Row>
      </Container>
    </>
  )
}
