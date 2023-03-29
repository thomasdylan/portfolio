import { Avatar } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//Component Imports
import AvatarDesc from '../components/AvatarDesc'

//React Bootstrap imports
import { Container, Row, Col } from 'react-bootstrap'


export default function Home() {
  return (
    <>
      <Container fluid>
        <AvatarDesc /> 
      </Container>
    </>
  )
}
