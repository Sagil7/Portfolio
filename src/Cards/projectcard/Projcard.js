import React from 'react'
import './Projectcard.css'
import pic1 from './Projectpic1.jpg'
import pic2 from './proj2.png'
import pic4 from './projectpic4.jpg'
import pic5 from './projectpic5.jpg'
import mycineplex from './mycineplex.jpg'
import coursemera from './coursemera.jpg'
import skyworldimg from './skyworld.png'
import amayraimg from './amayrainfra.png'
import jobkaimg from './jobka.png'

function Projcard() {
  return (
    <div>
      <section class="articles">
        <article>

          <div class="article-wrapper">
            <figure>
              <img src={pic4} alt="" />
            </figure>
            <div class="article-body">
              <h2>NoteOnCloud</h2>
              <p>
              Built a robust backend with Node.js, Express.js, and MongoDB, implementing CRUD operations. Strengthened user security with JSON Web Token (JWT) authentication and authorization. Optimized MongoDB data manipulation using Mongoose. Managed state in the frontend with Context API and utilized over 5 React Hooks for enhanced functionality.
              </p>
              <div className="buttonscontainer">
                <a href="https://github.com/Sagil7/Noteoncloud.git" target='_blank'>
                  <button className='githubbutton'>github</button>
                </a>
                <a href="https://sagilcrud.netlify.app/" target='_blank'>
                  <button className='livebutton'>livelink</button>
                </a>
             
              
              </div>
      
             

            </div>
          </div>
        </article>

        <article>
          <div class="article-wrapper">
            <figure>
              <img src={pic1} alt="" />
            </figure>
            <div class="article-body">
              <h2>Newsapp</h2>
              <p>     
                Experienced in developing dynamic web applications using React.js, a premier JavaScript library. Proficient in React JSX syntax and utilizing hooks to create over 5 reusable components. Skilled in front-end tasks, including UI implementation, API integration, and state management with React's solutions like hooks and context API.
              </p>

              <div className="buttonscontainer">
              <a href="https://github.com/Sagil7/NewsDekho.git">
                  <button className='githubbutton'>github</button>
                </a>
                <a href="https://github.com/Sagil7/NewsDekho.git">
                <button className='livebutton'>live demo</button>
                </a>
              </div>
            </div>
          </div>
        </article>
        <article>

          <div class="article-wrapper">
            <figure>
              <img src={pic2} alt="" />
            </figure>
            <div class="article-body">
              <h2>Maanof Website</h2>
              <p>
                I completed this project during my internship in which I created a website for their affiliated company. Within this project, I designed and implemented more than 10 React-based components.
              </p>
              <div className="buttonscontainer">
              <a   href="https://github.com/shin-igami/maanoftrust.git" target='_blank'>
                  <button className='githubbutton'>github</button>
                </a>
                <a  href="https://maanof.org/" target='_blank'>
                <button className='livebutton'>live demo</button>
                </a>
              </div>
            </div>
          </div>
        </article>
        <article>

          <div class="article-wrapper">
            <figure>
              <img src={mycineplex} alt="" />
            </figure>
            <div class="article-body">
              <h2>MyCineplex</h2>
              <p>
              Developed a user-friendly UI using React to showcase TV show details fetched dynamically from an API. The interface displays show names along with selected details. Each show features a button, enabling users to navigate to a dedicated screen presenting a comprehensive summary of the particular show.              </p>
              <div className="buttonscontainer">
              <a  href="https://github.com/Sagil7/MyCineplex.git" target='_blank'>
                  <button className='githubbutton'>github</button>
                </a>
                <a href="https://sagilcineplex.netlify.app/" target='_blank'>
                <button className='livebutton'>live demo</button>
                </a>
              </div>
          
            </div>
          </div>
        </article>

        <article>

          <div class="article-wrapper">
            <figure>
              <img src={coursemera} alt="" />
            </figure>
            <div class="article-body">
              <h2>Coursemera</h2>
              <p>
              Designed and implemented a React web app for course management. Features include a course listing page, detailed course view, and a student dashboard. Ensured a responsive design, efficient data handling, and user-friendly navigation.
              </p>
              <div className="buttonscontainer">
              <a href="https://github.com/Sagil7/Courselisting.git" target='_blank'>
                  <button className='githubbutton'>github</button>
                </a>
                <a href="https://almenocourse.netlify.app/" target='_blank'>
                <button className='livebutton'>live demo</button>
                </a>
              </div>
            </div>
          </div>
        </article>
        <article>

          <div class="article-wrapper">
            <figure>
              <img src={pic5} alt="" />
            </figure>
            <div class="article-body">
              <h2>TextUtil</h2>
              <p>
              Developed a simple application utilizing React state concepts, seamlessly converting text between uppercase and lowercase in real-time. The app also features a dynamic word count functionality, providing a responsive and user-friendly experience.
              </p>
              <div className="buttonscontainer">
              <a href="https://sagiltextutil.netlify.app/" target='_blank'>
                  <button className='githubbutton'>github</button>
                </a>
                <a href="https://sagiltextutil.netlify.app/" target='_blank'>
                <button className='livebutton'>live demo</button>
                </a>
              </div>
            </div>
          </div>
        </article>
        <article>

          <div class="article-wrapper">
            <figure>
              <img src={skyworldimg} alt="" />
            </figure>
            <div class="article-body">
              <h2>SkyWorld</h2>
              <p>
              Crafted the official website for Skyworld Manpower, a dynamic platform showcasing their services and values. Leveraging the power of React.js, the website comprises key sections such as Home, About, and Services, providing visitors with a comprehensive overview of the company.
              </p>
              <div className="buttonscontainer">
              <a href="https://github.com/Sagil7/Skyworld.git" target='_blank'>
                  <button className='githubbutton'>github</button>
                </a>
                <a href="https://skyworldindia.com/" target='_blank'>
                <button className='livebutton'>live demo</button>
                </a>
              </div>
            </div>
          </div>
        </article>
        <article>

          <div class="article-wrapper">
            <figure>
              <img src={amayraimg} alt="" />
            </figure>
            <div class="article-body">
              <h2>AmayraInfraTech</h2>
              <p>
              Designed and developed the official website for AmayraInfraTech, a prominent real estate company. The website strategically incorporates key sections, including Home, About, Contact, and a dedicated Project showcase. Through a combination of compelling visuals and informative content, the website serves as an engaging digital presence for the company.
              </p>
              <div className="buttonscontainer">
              <a href="https://github.com/Sagil7/AmayraInfraTech.git" target='_blank'>
                  <button className='githubbutton'>github</button>
                </a>
                <a href="https://amayrainfratech.in/" target='_blank'>
                <button className='livebutton'>live demo</button>
                </a>
              </div>
            </div>
          </div>
        </article>
        <article>

          <div class="article-wrapper">
            <figure>
              <img src={jobkaimg} alt="" />
            </figure>
            <div class="article-body">
              <h2>JobKa</h2>
              <p>
              Developed a comprehensive recruitment platform using React.js for Jobka Pvt Ltd. This website empowers the company to seamlessly manage client interactions and efficiently register candidates seeking employment opportunities.
              </p>
              <div className="buttonscontainer">
              <a href="https://github.com/Sagil7/jobka.git" target='_blank'>
                  <button className='githubbutton'>github</button>
                </a>
                <a href="https://jobka.netlify.app/" target='_blank'> 
                <button className='livebutton'>live  demo</button>
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Projcard
