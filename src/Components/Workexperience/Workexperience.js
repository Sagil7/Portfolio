import React from 'react'
import './Workexperience.css'
import Techcard from '../../Cards/Normalcard/Techcard'

function Workexperience() {
  return (
    <div id="Workexperience">
        <h1 id='workexp'>Work Experience</h1>
      <div className="box"> 
      
        <div className="companyname"> <p>Maanof Pvt Ltd</p> </div>
        <div className="position">
          <p>FrontEnd Developer</p>
          <p id='date'>june 2022 - Sep 2022</p>
          </div>
        <div className="content">
           <li>Developed and implemented 10+ complex user interface components using React, resulting in a more user-friendly and engaging web application.</li>
           <li>Utilized React components and state management (e.g., Redux) to create modular and maintainable code, resulting in improved
development efficiency.</li>
           <li>Reduced time-to-market for multiple components by up to 25%, improved performance of web application by 15%.</li>
          
        </div>
        <div className="techused">
            <Techcard val="HTML"/>
            <Techcard val="CSS"/>
            <Techcard val="ReactJs"/>
            <Techcard val="Netlify"/>
            <Techcard val="Npm"/>
            {/* <Techcard val="Java"/> */}
        </div>
      </div>
      <div className="box"> 
      
        <div className="companyname"> <p>Ltimindtree</p> </div>
        <div className="position">
          <p>Graduate Engineer Trainee</p>
          <p id='date'>Feb 2023 - May 2023</p>
          </div>
        <div className="content">
           <li>Attained a solid grasp of core Java concepts, including object-oriented programming, data types, control structures, and exception handling,
which enabled me to successfully develop and contribute to Java-based projects during the internship.</li>
           <li>Developed and implemented 15+ front-end components using HTML, CSS, and JavaScript, resulting in a 20% improvement in user
experience feedback and a 25% increase in overall application responsiveness</li>
          
        </div>
        <div className="techused">
            <Techcard val="Java"/>
            <Techcard val="Python"/>
            <Techcard val="SQL"/>
            <Techcard val="JDBC"/>
            <Techcard val="HTML/CSS"/>
            {/* <Techcard val="Java"/> */}
        </div>
      </div>
    </div>
  )
}

export default Workexperience
