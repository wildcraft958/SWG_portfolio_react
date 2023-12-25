
// import styles from './App.module.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import NavBar from './components/NavBar'
import Portfolio from "./components/Portfolio"
import SideBar from './components/SideBar'
import { BrowserRouter as Router } from "react-router-dom"

// import {require} from 'react'


function App() {
  const slides = [
    { url: "./assets/im1.jpeg", title: "1" },
    { url: "./assets/im2.jpeg", title: "2" },
    { url: "./assets/im3.jpeg", title: "3" },
    { url: "./assets/im4.jpeg", title: "4" },
    { url: "./assets/im5.jpeg", title: "5" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "80px auto",
  };
  return (
    <>
      <Router>

        <div id='home'>

          <NavBar />
          <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <div style={{ backgroundColor: "var(--color-tertiary)" }}>
            <Intro />
            <hr className='line' style={{ width: "100%" }} />
            <h1 style={{ textAlign: "center", margin: '16px 0' }}>Welcome To My Work Gallery</h1>
            <hr className='line' style={{ color: 'var(--color-hex)', width: "30%" }} />

            <div style={containerStyles}>
              <Portfolio slides={slides} />
            </div>
            <hr className='line' />
            <About />
            <hr className='line' />
            <br />
            <br />
            {/* <hr className='line' style={{width :"100%"}}/> */}
            <Contact />

          </div>
          <Footer />
        </div>
      </Router>

    </>
  )
}

export default App
