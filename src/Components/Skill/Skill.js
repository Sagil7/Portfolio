import React from 'react'
import './Skill.css'
import Codingskills from '../../Cards/CodingSkills/Codingskills'
function Skill() {
  return (
  <>
  <div id="Skill">
   <div><h1 id="text">Skills</h1></div>
    <div className="boxcontainer" >
    <div className="firstbox">
        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: '15px' }}>
          <div className="progress-bar bg-success" style={{ width: '80%' }} ><strong >Java</strong></div>
        </div>
        <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{height: '15px' }}>
  <div className="progress-bar bg-info" style={{ width: '55%' }}> <strong >Javascript</strong></div>
</div>
<div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '15px' }}  >
  <div className="progress-bar bg-warning" style={{ width: '72%' }}><strong >C++</strong></div>
</div>
<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{height: '15px' }}>
  <div className="progress-bar bg-danger" style={{ width: '60%' }}><strong >Python</strong></div>
</div>
<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{height: '15px' }}>
  <div className="progress-bar bg-secondary" style={{ width: '50%' }}><strong >SQL</strong></div>
</div>

    </div>
    <div className="secondbox">
        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: '15px' }}>
          <div className="progress-bar bg-warning" style={{ width: '82%' }} ><strong >HTML</strong></div>
        </div>
        <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{height: '15px' }}>
  <div className="progress-bar bg-secondary" style={{ width: '60%' }}><strong >CSS</strong></div>
</div>
<div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '15px' }}>
  <div className="progress-bar bg-success" style={{ width: '68%' }}><strong >ReactJs</strong></div>
</div>
<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{height: '15px' }}>
  <div className="progress-bar bg-info" style={{ width: '65%' }}><strong >Android Studio</strong></div>
</div>
<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{height: '15px' }}>
  <div className="progress-bar bg-danger" style={{ width: '70%' }}><strong >Vs Code</strong></div>
</div>

    </div>

</div>
</div>
<Codingskills/>
</>
  )
}

export default Skill
