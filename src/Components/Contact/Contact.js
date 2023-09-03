import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
    <h1 id='contactheading'>Contact</h1>
    <div className="footerbox">
        
        <div className="footercontainer">
        <div className="footertitle">Social Media</div>   
        <div><a href="https://www.linkedin.com/in/sagil-faraz/" target="_blank">Linkedin</a></div>
        <div><a href="https://www.facebook.com/sagil.faraz/" target="_blank">Facebook</a></div>
        <div><a href="https://www.instagram.com/sagilfaraz/" target="_blank">Instagram</a></div>
        {/* <div><a href="">Google</a></div>
        <div><a href="">Google</a></div> */}

        </div>
        
        <div className="footercontainer">
        <div className="footertitle">Coding Profile</div>   
        <div><a href="https://www.codechef.com/users/sagil7" target="_blank">CodeChef</a></div>
        <div><a href="https://codeforces.com/profile/sagil7" target="_blank">CodeForces</a></div>
        <div><a href="https://auth.geeksforgeeks.org/user/faraz15799" target='_blank'>GeeksforGeeks</a></div>
        {/* <div><a href="">Google</a></div>
        <div><a href="">Google</a></div> */}

        </div>  

        <div className="footercontainer">
        <div className="footertitle">Some more links</div>   
        <div><a href="https://github.com/Sagil7" target="_blank">Github</a></div>
        <div><a href="https://www.stopstalk.com/user/profile/sagil7" target='_blank'>Stopstalk</a></div>
        <div><a href="mailto:sagilfaraz15@gmail.com">Email</a></div>
     

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
