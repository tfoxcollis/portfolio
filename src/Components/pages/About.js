import React from 'react'
import './About.scss'
import Avatar from '@mui/material/Avatar'
import mypic from '../../assets/mypic2.jpg'
import Contact from '../Contact/Contact'

const About = () => {
  return (
    <div className="main-about">
      <div id="about" className="about-title">
        <Avatar className="avatar" src={mypic} alt="picture of Trish" sx={{ width: 150, height: 150 }}></Avatar>
        <p>Me. Myself. And I.</p>
      </div>
      <section className="about-me-section">
        <p className={'about-container' }>

        {/* &nbsp; &nbsp;Heres an abridged progression of my career journey.  Want to know more?
  Hit that contact button and lets connect!  <br/> <br/> */}

  &nbsp; &nbsp;I started my career at Wells Fargo bank at the age of 19 - within 2 years
  I was a Service Manager.  I was responsible for the teller side- which included hiring, training
  and retaining employees, as well as compliance for the branch. I value my time at Wells Fargo as they helped shape me into a strong leader.
  I learned the value of hardwork, teamwork and communication while there and spent just over 8 years learning and growing.
  I decided to leave Wells Fargo to go back to school to become a nurse.  <br/> <br/>

  &nbsp; &nbsp;I went to the University of Colorado where I obtained my Bachelors of Science in Nursing, graduating
  with a 3.7 GPA (humble brag- I did this with a 1 and 2 year old at home). After a little over a year as a nurse,
  I became a Charge Nurse and was responsible for the unit as well as the nurses on my shift.  I thrived under pressure
  and utilized what I had learned at Wells Fargo while also developing a love for problem solving.  Each day as a nurse
  held a new challenge to work through and overcome and I enjoyed being the one that kept the spirits high amongst my team.
  After the pandemic hit, I did a lot of self reflection and soul searching, weighing my passion for nursing and helping others vs my
  work/life balance along with the impact nursing was having on my mental health. I soon found myself more interested in my husbands job as a
  full stack engineer, asking him daily questions about his Jira board, pestering him about why tickets werent moving, and
  basically micro managing him. It was shortly after that, I decided to rewrite my future and go back to school to
  become a Frontend Software Developer. <br/> <br/>

  &nbsp; &nbsp;I was accepted into the rigorous frontend program at Turing school of Software and Design
  in Jan of 2022 and graduated in October 2022. I was introduced to Javascript, HTML,
  CSS, React, end to end testing, deployment, and many, m a n y other technologies.
  However, the real power of the Turing curriculum is the tools and support they
  gave me to continue learning new technologies.  For example, in my projects section you&apos;ll
  see Zen in Ten which was a group project in which we had a week to research and implement
  Typescript. We not only did that but also decided to dig into React functional components
  with hooks (Turing teaches class based components) and built the project solely with those. <br/> <br/>

  &nbsp; &nbsp;Birds of A Feather was my capstone and continuation of my solo project from the section
  prior. I was placed on a combined team of Frontend and Backend students
  and together we built a multi application project utilizing a React frontend
  and Rails backend. Our stretch goal was to learn and implement Graphql on both
  client and server side. The app was a success and we later were selected to compete in
  Turings Demo comp - where we took 2nd place!<br/> <br/>

  {/* &nbsp; &nbsp;&nbsp; &nbsp;If you've made it this far, either... <br/>
  &nbsp; &nbsp;&nbsp; &nbsp;A. You should hire me. <br/>
  &nbsp; &nbsp;&nbsp; &nbsp;B. We should probably be best friends. <br/>
  &nbsp; &nbsp;&nbsp; &nbsp;C. No, I will not send you feet pics. Please stop asking.<br/> <br/> */}

      &nbsp; &nbsp;I know that the culmination of my work history has set me up to be a valuable asset to any team.
      I&apos;m excited for what the future holds and hope to secure a position at a company that values their employees,
      cultivates an inclusive, fun and positive environment, encourages growth and challenges me to do more.<br/> <br/>
        </p>
        <div className="about-contact">
          <Contact />
        </div>
      </section>
    </div>
  )
}

export default About
