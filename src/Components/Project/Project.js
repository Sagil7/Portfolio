import React from 'react'
import './Project.css'
import Projcard from '../../Cards/projectcard/Projcard'

function Project() {
  return (
    <div id="Project">
       <h1 id='Title'>Projects</h1>
      <div className="Outerbox">
       
        <Projcard/>
        
      </div>
    </div>
  )
}

export default Project
