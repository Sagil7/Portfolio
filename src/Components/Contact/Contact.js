import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
    <h1 id='contactheading'>Contact</h1>
    <div className="footerbox">
        
        <div className="footercontainer">
        <div className="footertitle">Social Media</div>   
        <div><a href="">Linkedin</a></div>
        <div><a href="">Facebook</a></div>
        <div><a href="">Instagram</a></div>
        {/* <div><a href="">Google</a></div>
        <div><a href="">Google</a></div> */}

        </div>
        
        <div className="footercontainer">
        <div className="footertitle">Coding Profile</div>   
        <div><a href="">CodeChef</a></div>
        <div><a href="">CodeForces</a></div>
        <div><a href="">GeeksforGeeks</a></div>
        {/* <div><a href="">Google</a></div>
        <div><a href="">Google</a></div> */}

        </div>  

        <div className="footercontainer">
        <div className="footertitle">Social Media</div>   
        <div><a href="">Google</a></div>
        <div><a href="">Google</a></div>
        <div><a href="">Google</a></div>
     

        </div>
         {/* <div className="copyright">
          <p>Made with ♥ by Sagil Faraz.</p>
          <p>© No Copyrights. Feel free to use this template.</p>
      
         </div> */}
    </div>
    
    </>
  )
}

export default Contact
