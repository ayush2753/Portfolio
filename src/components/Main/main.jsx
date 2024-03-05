import React from 'react'
import NavBar from '../Navbar/NavBar'
import AboutMe from '../About/AboutMe'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Home from '../Home/Home'
import Skills from '../Skills/Skills'
import ReachMe from '../ReachMe/Contact'
import Footer from '../Footer/Footer'


export default function main() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      
      <Experience/>
      <Projects/>
      <ReachMe/>
      <Footer/>
    </div>
  )
}
