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
      <p>All projects utilized: Git version control, Node, GitHub, Heroku/Vercel<br/> Honorable Mention: StackOverflow </p>
      <div id="cardsContainer" className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
            id="1"
            src={boafgroup}
            text="Birds of a Feather"
            label="Group"
            path="https://birds-ui.vercel.app/"
            />
            <CardItem
            id="2"
            src={boafsolo}
            text="Birds of a Feather"
            label="Solo"
            path="https://birds-of-a-feather-omega.vercel.app/"
            />
          </ul>
          <ul className="cards-items">
          <CardItem
              id="3"
              src={golden}
              text='Golden Tic-Tac-Toe'
              label='Solo'
              path='https://golden-tic-tac-toe.vercel.app/'
            />
            <CardItem
              id="4"
              src={screams}
              text='Scream Streams'
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
