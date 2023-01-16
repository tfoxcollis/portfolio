import React from 'react'
import { Link } from 'react-router-dom'
import './CardItem.css'

const CardItem = (props) => {
  return (
    <>
      <li className='cards__item'>
        <Link className="project-link" to={{
          pathname: `/projects/${props.id}`
        }}>
        {/* <a className='cards__item__link' href={props.path} target="_blank" rel="noreferrer"> */}
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Project Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
