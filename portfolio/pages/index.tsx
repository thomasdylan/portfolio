//React & Next imports
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
//Stylesheet imports
import styles from '../styles/Home.module.css'
//Component imports

//Landing page will display a flashy css animation displaying my projects on the right half of the screen
//A nav bar with all links will be displayed at the top
//Left side will contain information such as resume, github, linkedin and email information & links as well as headshot
export default function Home() {
  return (
    <Fragment>
      <div>
        <h1>Landing Page</h1>
        {/* All navigation links will be refactored into a nav bar component */}
        <Link href='/projects'>Projects</Link>
      </div>
    </Fragment>
  )
}
