/* import Hero from "./components/Hero/Hero"; */

import React from 'react'
import Hero from '../../components/Hero/Hero'
import Benefits from '../../components/Benefits/Benefits'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <>
     <Hero/>
     <Benefits/>
     <About/>
     <Contact/>
    </>
    
  )
}

export default Home
