import React from 'react'
import hiring from './hiring.jpg'
import college from './15120_SAIRAM_NEW.jpg'
import './Educationcard.css'
function Educationcard(props) {
  return (
    <div className="Eduouter">
      <div class="card" style={{width: '18rem'}}>   
  <img src={props.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.innercontent}</p>
    <p class="card-text">{props.course} </p> 
    <a href={props.link} target="_blank" class="btn btn-primary">Visit </a>
  </div>
</div>
    </div>
  )
}

export default Educationcard
