import React from 'react'
import CardItem from '../CardItem/CardItem'
import './Cards.css'
import boafgroup from '../../assets/boaf-group.png'
import boafsolo from '../../assets/boaf-solo.png'
import golden from '../../assets/golden.png'
import screams from '../../assets/scream-streams.png'

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out some of my projects!</h1>
      <p>All projects utilized: GIT version control, Node, GitHub, Heroku/Vercel<br/> Honorable Mention: StackOverflow </p>
      <div id="cardsContainer" className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            id="1"
            src={boafgroup}
            text="React, Ruby on Rails, GraphQL, CircleCI, Cypress"
            label="Group"
            path="https://birds-ui.vercel.app/"
            />
            <CardItem
            id="2"
            src={boafsolo}
            text="React, Cypress"
            label="Solo"
            path="https://birds-of-a-feather-omega.vercel.app/"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              id="3"
              src={golden}
              text='JavaScript, HTML, CSS, Mocha/Chai'
              label='Solo'
              path='https://golden-tic-tac-toe.vercel.app/'
            />
            <CardItem
              id="4"
              src={screams}
              text='React, Cypress'
              label='Paired'
              path='https://scream-streams.vercel.app/Consent'
            />

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
