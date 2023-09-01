import React from 'react'
import './Workexperience.css'
import Techcard from '../../Cards/Normalcard/Techcard'

function Workexperience() {
  return (
    <div id="Workexperience">
        <h1 id='workexp'>Work Experience</h1>
      <div className="box"> 
      
        <div className="companyname"> <p>Ltimindtree</p> </div>
        <div className="position"><p>FroneEnd Developer</p></div>
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
      <div className="box"> 
      
        <div className="companyname"> <p>Ltimindtree</p> </div>
        <div className="position"><p>FroneEnd Developer</p></div>
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
