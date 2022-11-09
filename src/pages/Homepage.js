import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Background from '../components/Background/Background'
import './home.css'
import About from '../components/About/about'
import Feedback from '../components/Feedback/Feedback'
import Footer from '../components/Footer/Footer'
const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Background/>
      <About/>
      <Feedback/>
      <Footer/>
    </>
   
  )
}

export default Homepage