import { useState, useEffect,useRef } from "react";
import "./Navbar2.css";
// import {Link} from 'react-scroll'
import {HashLink} from 'react-router-hash-link'
// import { a ,Link} from 'react-router-dom';
import Logo from './Mylogo.png'
function Navbar() {
  const [val, setVal] = useState("navbox")
  useEffect(() => {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 35) {
        setVal("navbox sticky")
      } else {
        setVal("navbox")
      }

    }
  }, [val])
const refClose = useRef(null);
const handleClick =() =>{
  refClose.current.click();
}
  return (

    <>
      <header id="header">
        <div className={val}>
          <div id="logo">
            <a href="/"><img src={Logo} alt="Maanof" title="" /></a>
          </div>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="menu-btn" ref={refClose}>
            <i className="fas fa-bars"></i>
          </label>
          <ul className="navitems">
          
            <li class="nav-item">
              <HashLink class="nav-link" to="#Intro" onClick={handleClick}>Home</HashLink>
            </li>
            <li class="nav-item">
              <HashLink class="nav-link" to="#About" onClick={handleClick}>About</HashLink>
            </li>
            <li class="nav-item">
              <HashLink class="nav-link" to="#Skill" onClick={handleClick}>Skill</HashLink>
            </li>
            <li class="nav-item">
              <HashLink class="nav-link" to="#Project" onClick={handleClick}>Project</HashLink>
            </li>
            <li class="nav-item">
              <HashLink class="nav-link" to="#Workexperience" onClick={handleClick}>Workexperience</HashLink>
            </li>
            <li class="nav-item">
              <HashLink  class="nav-link" to="#Education" onClick={handleClick}>Education</HashLink>
            </li>
            <li class="nav-item">
              <HashLink  class="nav-link" to="#Contact" onClick={handleClick}>Contact</HashLink>
            </li>
             
            
          </ul>
          <div className="socialmedia">
     <a href="https://www.facebook.com/sagil.faraz/"  target="_blank"><i className="fa-brands fa-facebook-f" id="facebook"></i></a>
     <a href="https://www.instagram.com/sagilfaraz/"  target="_blank" ><i className="fa-brands fa-instagram" id="insta"></i></a>
     <a href="https://github.com/Sagil7"  target="_blank" ><i className="fa-brands fa-github" id="youtube"></i></a>
     <a href="https://www.linkedin.com/in/sagil-faraz/"  target="_blank"><i className="fa-brands fa-linkedin-in" id="linkdin"></i></a>
     </div>
          
        </div>
      </header>
    </>
  )
}

export default Navbar
