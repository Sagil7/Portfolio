import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Project from './Components/Project/Project';
import Workexperience from './Components/Workexperience/Workexperience';
import Education from './Components/Education/Education';
import Codingskills from './Cards/CodingSkills/Codingskills';
import Contact from './Components/Contact/Contact';
import Navbar2 from './Components/Navbar2/Navbar2';
import Footer from './Cards/Footer/Footer';
import Modal from './Cards/Modal/Modal';



function App() {
  return (
 <>
    {/* dalkjg */}
    <BrowserRouter>
    <Navbar2/>
    
     <Intro/>
     <About/>
     <Skill/>
     <Project/>
     <Workexperience/>
     <Education/>

     <Contact/>
     <Footer/>
     {/* <Modal/> */}
     </BrowserRouter>
     {/* <Contact/> */}
     

       {/* <BrowserRouter>
       <Routes>
     <Route path="/Intro" element={<Intro />} />
     <Route path="/About" element={<About />} />
     <Route path="/Skill" element={<Skill />} />
     <Route path="/Project" element={<Project />} />
     <Route path="/Workexperience" element={<Workexperience />} />
     <Route path="/Education" element={<Education />} />
     <Route path="/Codingskills" element={<Codingskills />} />
     </Routes>
       
       </BrowserRouter> */}
  
   

 </>
     
   
     
     


   
    
  );
}

export default App;
