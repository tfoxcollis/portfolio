import React from 'react'
import { Link } from 'react-router-dom'
import './CardItem.css'

const CardItem = (props) => {
  return (
    <>
      <li className='cards-item'>
        <Link className="project-link" to={{
          pathname: `/projects/${props.id}`
        }}>
        {/* <a className='cards__item__link' href={props.path} target="_blank" rel="noreferrer"> */}
          <figure className='cards-item-pic-wrap' data-category={props.label}>
            <img
              className='cards-item-img'
              alt='Project Image'
              src={props.src}
            />
          </figure>
          <div className='cards-item-info'>
            <h5 className='cards-item-text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
