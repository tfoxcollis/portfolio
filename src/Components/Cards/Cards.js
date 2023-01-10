import React from 'react'
import CardItem from '../CardItem/CardItem'
import './Cards.css'
import boafgroup from '../../assets/boaf-group.png';
import boafsolo from '../../assets/boaf-solo.png';
import golden from '../../assets/golden.png';
import screams from '../../assets/scream-streams.png';


const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out some of my projects</h1>
      <div id="cardsContainer" className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src={boafgroup}
            text="Multi app project built with React, Rails and GraphQL"
            label="Group"
            path="https://birds-ui.vercel.app/"
            />
            <CardItem 
            src={boafsolo}
            text="React"
            label="Solo"
            path="https://birds-of-a-feather-omega.vercel.app/"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src={golden}
              text='Vanilla JavaScript'
              label='Solo'
              path='https://golden-tic-tac-toe.vercel.app/'
            />
            <CardItem
              src={screams}
              text='React'
              label='Paired'
              path='https://scream-streams.vercel.app/Consent'
            />
            {/* <CardItem
              src={img8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards