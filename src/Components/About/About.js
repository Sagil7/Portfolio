import React from 'react'
import './About.css'
import profilepic from './sagil.jpg'



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
      
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non tenetur unde culpa eveniet accusamus laboriosam.</p>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non tenetur unde culpa eveniet accusamus laboriosam Lorem ipsum dolor sit amet.</p>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non tenetur unde culpa eveniet accusamus laboriosam Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, consequatur?</p>
    </div>
 
  </div>
  </div>
  </>
  )
}

export default About
