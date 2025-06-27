import React,{useEffect}from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact';
import Experience from './components/experience';
import Aos from "aos";
import "aos/dist/aos.css"
import Education from './components/Education'

const App = () => {
  useEffect(() => {
    Aos.init();
    
   }, [])

  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Home/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>

      </div>
    </div>
  )
}

export default App
