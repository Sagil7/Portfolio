import React from 'react'
import "./Navbar.css";
import {HashLink} from 'react-router-hash-link'
import profilepic from './profilebitmoji.jpeg'

function Navbar() {
  return (
    <div className="Navbar">
     
        <ul className="Navitems">
            
        <img src={profilepic} alt="bitmoji" />
            <li className="Navitem"><a href="/">home</a></li>
            <li className="Navitem"><a href="#About">About</a></li>
            <li className="Navitem"><HashLink to="#Project">Projects</HashLink></li>
            <li className="Navitem">Contact</li>
            <li className="Navitem">Work experience</li>
        </ul>

        
    </div>
  )
}

export default Navbar
