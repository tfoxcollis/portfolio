import React from 'react'
import './About.css'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import mypic from '../../assets/mypic.JPG'

const About = () => {
  return (
    <div>
      <div id="about" className="about-title">
        <Avatar className="avatar" src={mypic} alt="picture of Trish" sx={{ bgcolor: deepPurple[500], width: 150, height: 150}}>T</Avatar>
        <p>Me. Myself. And I.</p>
      </div>
      <section className="about-me-section">
        <pre className="about-container">
          {`
  Heres an abridged progression of my career journey.  Want to know more?  
  Hit that contact button and lets connect!  

  I started my work career at Wells Fargo bank at the age of 19 - within 2 years 
  I was a Service Manager.  I was responsible for the teller side and compliance 
  for the entire branch.  I spent just over 8 years at Wells Fargo before I decided 
  to pursue my childhood dream of becoming a nurse.  

  I went to the University of Colorado where I obtained my Bachelors, graduating 
  with a 3.6 GPA (humble brag- I did this with a 1 and 2 year old at home haha).  
  Being a nurse was everything my 12 year old self had hoped it would be. 
  That is until the pandemic. After a lot of self reflection and many talks
  with my family - I decided to rewrite my future and go back to school to
  become a Frontend Software Developer. 

  I was accepted into the rigorous frontend program at Turing school of Software and Design
  in Jan of 2022 and graduated in October 2022. I was introduced to Javascript, HTML,
  CSS, React, end to end testing, deployment, and many, m a n y other technologies. 
  However, the real power of the Turing curriculum is the tools and support they 
  gave me to continue learning new technologies.  For example, in my projects section you'll  
  see Zen in Ten which was a group project in which we had a week to research and implement 
  Typescript. We not only did that but also decided to dig into React functional components 
  with hooks (Turing teaches class based components) and built the project solely with those.  

  Birds of A Feather was my capstone and continuation of my solo project from the section
  prior. I was placed on a combined team of Frontend and Backend students 
  and together we built a multi application project utilizing a React frontend 
  and Rails backend. Our stretch goal was to learn and implement Graphql on both 
  client and server side. The app was a success and we later were selected to compete in 
  Turings Demo comp - where we took 2nd place!

    If you've made it this far, either... 
      A. You should hire me. 
      B. We should probably be best friends. 
      C. No, I will not send you feet pics. Please stop asking.

  The culmination of my work history has set me up to be a valuable asset to any team.  
  Not to mention I am a Pisces and so basically an artist. Jk but really- I also chose 
  frontend because it satisfies the artistic and creative part of my personality.  
          `}
        </pre>
      </section>
    </div>
  )
}

export default About