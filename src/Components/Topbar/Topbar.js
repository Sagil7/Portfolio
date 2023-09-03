import React from 'react'
import "./Topbar.css";

function Topbar() {
    // const emailicon = require('../image/email.png')
    // const phoneicon = require('../image/phone.png')
  return (
    <>
    <div className="topbar"> 
   <div className="email">
   <i className="fa-solid fa-envelope"></i>sagilfaraz15@gmail.com   
   </div>
   {/* <div className="phone">
   <i className="fa-solid fa-phone"></i>9599380707
   </div> */}
   <div className="socialmedia">
     <a href="https://www.facebook.com/sagil.faraz/"  target="_blank"><i className="fa-brands fa-facebook-f" id="facebook"></i></a>
     <a href="https://www.instagram.com/sagilfaraz/"  target="_blank" ><i className="fa-brands fa-instagram" id="insta"></i></a>
     <a href="https://github.com/Sagil7"  target="_blank" ><i className="fa-brands fa-github" id="youtube"></i></a>
     <a href="https://www.linkedin.com/in/sagil-faraz/"  target="_blank"><i className="fa-brands fa-linkedin-in" id="linkdin"></i></a>
     </div>
    </div>
    </>
  )
}

export default Topbar
