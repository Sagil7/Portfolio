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

          <Educationcard image={college} title="Sri Sairam College of Engineering (VTU)" innercontent="Bachelors of Engineering (8. CGPA)" course="Computer Science  " link="http://sairamce.edu.in/" />
          <Educationcard image={school} title="Central Public School (C.B.S.E)" innercontent="HSC/Intermediate (79%)" course="PCM" link="https://www.facebook.com/cpssamastipur/" />
          <Educationcard image={school} title="Sri Sairam College of Engineering" innercontent="SSC/Matriculation (9.6 CGPA)" course="Science" link="https://www.facebook.com/cpssamastipur/" />

        </div>

      </div>
    </>
  )
}

export default Education
