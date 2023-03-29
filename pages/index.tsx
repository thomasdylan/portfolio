import { Avatar } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
//Component Imports
import AvatarDesc from '../components/AvatarDesc'
import LinkContainer from '../components/LinkContainer'
//React Bootstrap imports
import { Container, Row, Col } from 'react-bootstrap'


export default function Home() {
  return (
    <>
      <AvatarDesc /> 
      <LinkContainer />
    </>
  )
}
