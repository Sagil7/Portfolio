import React from 'react'
import './Workexperience.css'
import Techcard from '../../Cards/Normalcard/Techcard'

function Workexperience() {
  return (
    <div id="Workexperience">
        <h1 id='workexp'>Work Experience</h1>
      <div className="box"> 
      
        <div className="companyname"> <p>Ltimindtree</p> </div>
        <div className="position">
          <p>FroneEnd Developer</p>
          <p id='date'>june 2022 - Sep 2022</p>
          </div>
        <div className="content">
           <li>Developed and implemented 10+ complex user interface components using React, resulting in a more user-friendly and engaging web application.</li>
           <li>Utilized React components and state management (e.g., Redux) to create modular and maintainable code, resulting in improved
development efficiency.</li>
           <li>Reduced time-to-market for multiple components by up to 25%, improved performance of web application by 15%.</li>
          
        </div>
        <div className="techused">
            <Techcard val="Java"/>
            <Techcard val="Angular"/>
            <Techcard val="Java"/>
            <Techcard val="Java"/>
            <Techcard val="Java"/>
            <Techcard val="Java"/>
        </div>
      </div>
      <div className="box"> 
      
        <div className="companyname"> <p>Ltimindtree</p> </div>
        <div className="position">
          <p>FroneEnd Developer</p>
          <p id='date'>june 2022 - Sep 2022</p>
          </div>
        <div className="content">
           <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis magni quaerat? Quis, illo aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, accusamus?</li>
           <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis magni quaerat? Quis, illo aspernatur.</li>
           <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis magni quaerat? Quis, illo aspernatur.</li>
          
        </div>
        <div className="techused">
            <Techcard val="Java"/>
            <Techcard val="Angular"/>
            <Techcard val="Java"/>
            <Techcard val="Java"/>
            <Techcard val="Java"/>
            <Techcard val="Java"/>
        </div>
      </div>
    </div>
  )
}

export default Workexperience
