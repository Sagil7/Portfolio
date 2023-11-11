import React from 'react'
import './About.css'
import profilepic from './sagil.png'



function About() {
  return (
    <>
    <div id="About">
    <h1>About Me</h1>
  <div className="Aboutcontainer">
    
    <div className="imagecontainer">
    <img src={profilepic} alt="profile pic" />
    {/* <PersonCard name="MD Akhlaque Aslam" about="Director" image={profilepic}/> */}
     
    </div>
    <div className="aboutcontent">
     <p>Hello there 👋</p>
     <p>I'm Sagil Faraz, I did B.E. in Computer Science from Sri Sairam College of Engineering.I'm genuinely passionate about all things tech, and I see myself as a developer driven by curiosity and enthusiasm.</p>
     <p>Apart from coding, I love to play cricket, watching movies, and travel.</p>
     <p>I'm driven by the philosophy of lifelong learning, constantly seeking out new knowledge and experiences to enrich my perspective and sharpen my skills.</p>
     <p>Thanks for taking the time to learn a little about me!</p>
    </div>
 
  </div>
  </div>
  </>
  )
}

export default About
