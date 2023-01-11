import React, { useEffect } from 'react'
import './Skills.scss'

const Skills = () => {
  function setupTypewriter (t) {
    const HTML = t.innerHTML
    t.innerHTML = ''
    let cursorPosition = 0
    let tag = ''
    let writingTag = false
    let tagOpen = false
    const typeSpeed = 75
    let tempTypeSpeed = 0
    const type = function () {
      if (writingTag === true) {
        tag += HTML[cursorPosition]
      }

      if (HTML[cursorPosition] === '<') {
        tempTypeSpeed = 0
        if (tagOpen) {
          tagOpen = false
          writingTag = true
        } else {
          tag = ''
          tagOpen = true
          writingTag = true
          tag += HTML[cursorPosition]
        }
      }
      if (!writingTag && tagOpen) {
        tag.innerHTML += HTML[cursorPosition]
      }
      if (!writingTag && !tagOpen) {
        if (HTML[cursorPosition] === ' ') {
          tempTypeSpeed = 0
        } else {
          tempTypeSpeed = (Math.random() * typeSpeed) + 50
        }
        t.innerHTML += HTML[cursorPosition]
      }
      if (writingTag === true && HTML[cursorPosition] === '>') {
        tempTypeSpeed = (Math.random() * typeSpeed) + 50
        writingTag = false
        if (tagOpen) {
          const newSpan = document.createElement('span')
          t.appendChild(newSpan)
          newSpan.innerHTML = tag
          tag = newSpan.firstChild
        }
      }
      cursorPosition += 1
      if (cursorPosition < HTML.length) {
        setTimeout(type, tempTypeSpeed)
      }
    }
    return {
      type
    }
  }

  useEffect(() => {
    const target = document.getElementById('typewriter')
    const typer = setupTypewriter(target)
    typer.type()
  }, [])

  return (
    <div id="skills">
      <pre id="typewriter">
        <span className="var-highlight">    var</span>{` object = 
        { 
          name: `}<span className="string-highlight">'Trish Fox-Collis'</span>{`,
          classification: `}<span className="string-highlight">'Frontend Developer'</span>{`,
          location: `}<span className="string-highlight">'Las Vegas, NV'</span>{`,
          devSkills:[`}<span className="string-highlight">'React'</span>,
              <span className="string-highlight">'HTML'</span>,
              <span className="string-highlight">'CSS'</span>,
              <span className="string-highlight">'Javascript'</span>,
              <span className="string-highlight">'E2E testing'</span>{`],
          currentlyLearning:[`}<span className="string-highlight">'Graphql'</span>,
              <span className="string-highlight">'Typescript'</span>,
              <span className="string-highlight">'MUI'</span>{`],
          hobbies:[`}<span className="string-highlight">'Reading'</span>,
              <span className="string-highlight">'Photography'</span>,
              <span className="string-highlight">'Long walks to the Fridge'</span>{`]
        }`}
        </pre>
    </div>
  )
}

export default Skills
