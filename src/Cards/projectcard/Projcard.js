import React from 'react'
import './Projectcard.css'
import pic1 from  './Projectpic1.jpg'
import pic2 from  './proj2.png'
import pic3 from  './project3.jpg'

function Projcard() {
  return (
    <div>
      <section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={pic1} alt="" />
      </figure>
      <div class="article-body">
        <h2>Newsapp</h2>
        <p>
        An application built with React that provides access to news articles across various categories by seamlessly integrating data from an API.
        </p>
      
        <a href="https://github.com/Sagil7/NewsDekho" class="read-more" target="_blank">
            <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
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
        <a href="https://maanof.org/" class="read-more" target="_blank">
          <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src={pic3} alt="" />
      </figure>
      <div class="article-body">
        <h2>Web Portfolio</h2>
        <p>
        Web Portfolio to showcase acadmics, skills, projects and contact details in better manner
        </p>
        <a href="https://github.com/Sagil7/Portfolio.git" class="read-more" target="_blank">
           <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</section>
    </div>
  )
}

export default Projcard
