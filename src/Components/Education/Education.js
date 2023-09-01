import React from 'react'
import Educationcard from '../../Cards/Educationcard/Educationcard'
import college from './College.jpg' 
import school from './School.jpeg'
import './Education.css'

function Education() {
  return (
    <>
    <div id="Education">
     <div className="headline" ><h1>Education</h1></div>
    <div className="Outercont">
        
        <Educationcard image={college} title="Sri Sairam College of Engineering" innercontent="Bachelors of Engineering" course="Computer Science " link="http://sairamce.edu.in/" />
        <Educationcard image={school} title="Central Public School" innercontent="Bachelors of Engineering" course="Computer Science " link="https://www.facebook.com/cpssamastipur/"/>
        <Educationcard image={school} title="Sri Sairam College of Engineering" innercontent="Bachelors of Engineering" course="Computer Science " link="https://www.facebook.com/cpssamastipur/"/>
        
    </div>
   
    </div>
    </>
  )
}

export default Education
