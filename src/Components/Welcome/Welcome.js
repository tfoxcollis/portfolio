import React, { useEffect } from 'react'
import './Welcome.css'


const Welcome = () => {

  const spans = document.querySelectorAll('.js-span');
  const executeAnimation = (event) => {
    event.target.classList.add('active')
    event.target.on('animationed', () => {
      debugger
      event.target.classList.remove('active')
    })
  }

  useEffect(() => {
      // Initial animation
    spans.forEach(span => span.classList.add('active'));
  }, [])

  return (
    <div>
      <div className="word">
          <span className="js-span" onClick={(event) => executeAnimation(event)}>H</span>
          <span className="js-span" onClick={(event) => executeAnimation(event)}>E</span>
          <span className="js-span" onClick={(event) => executeAnimation(event)}>L</span>
          <span className="js-span" onClick={(event) => executeAnimation(event)}>L</span>
          <span className="js-span" onClick={(event) => executeAnimation(event)}>O</span>
      </div>
      <div className="intro">
        <h2>My name is Trish.</h2>
        <h3>Frontend Developer, hi</h3>

        </div>

    </div>
  )
}

export default Welcome