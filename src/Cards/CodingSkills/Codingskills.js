import React from 'react'
import './CodingSkill.css'
import CountUp from 'react-countup';

function Codingskills() {
  return (
    <div className="Codingouterbox"> <h1 id="codingskill">Coding Score</h1>
       <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="https://www.codechef.com/users/sagil7" target="_blank" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          CodeChef
        </div>

        <div class="ag-courses-item_date-box">
        Problem Solved  {'  '} 
          <span class="ag-courses-item_date">
          <CountUp end={283} duration={10}/>
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="https://codeforces.com/profile/sagil7" target="_blank" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Codeforces
        </div>

        <div class="ag-courses-item_date-box">
        Problem Solved  {' '}
          <span class="ag-courses-item_date">
          <CountUp end={165} duration={10}/>
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="https://auth.geeksforgeeks.org/user/faraz15799" target="_blank" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         GeeksforGeeks
        </div>

        <div class="ag-courses-item_date-box">
        Problem Solved  {' '}
          <span class="ag-courses-item_date">
          <CountUp end={120} duration={10}/>
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="https://atcoder.jp/users/sagil7" target="_blank"class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Atcoder
        </div>

        <div class="ag-courses-item_date-box">
        Problem Solved  {' '}  
          <span class="ag-courses-item_date">
            <CountUp end={60} duration={10}/>
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="https://leetcode.com/faraz15799/" target="_blank" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          LeetCode
        </div>
        
        <div class="ag-courses-item_date-box">
        Problem Solved  {' '}
          <span class="ag-courses-item_date">
          <CountUp end={55} duration={10}/>
          </span>
        </div>
      </a>
    </div>
    <div class="ag-courses_item">
      <a href="https://www.stopstalk.com/user/profile/sagil7" target='_blank' class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          All Platform
        </div>
        
        <div class="ag-courses-item_date-box">
        Problem Solved  {' '}
          <span class="ag-courses-item_date">
          <CountUp end={708} duration={10}/>
          </span>
        </div>
      </a>
    </div>

    {/* <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Leetcode
         <div className="problemscore">
         <p className='problemsolvedpara'>Problem Solved </p>
         <CountUp end={81} duration={10}/>

         </div>
    
        </div>
      </a>
    </div> */}

  </div>
</div>      
    </div>
  )
}

export default Codingskills
