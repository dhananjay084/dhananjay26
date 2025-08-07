import React from 'react'
import { GlobalStyles } from './assets/styles/globalStyles'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App