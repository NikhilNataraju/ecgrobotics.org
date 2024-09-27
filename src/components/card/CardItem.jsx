import React from 'react'
import { Link } from 'react-router-dom'
import './CardItem.css'

function CardItem(props) {
  return (
    <>
        <div className="cards-item">
            <Link className="cards-item-link" to={props.path} style = {{ backgroundColor: props.backgroundColor }}>
                <figure className="cards-item-pic-wrap" >
                    <img src={props.src} alt='Team Image' className="cards-item-img" />
                </figure>
                <div className="cards-item-info">
                    <h5 className="cards-item-title">{props.title}</h5>
                    <h5 className='cards-item-number'>{props.number}</h5>
                    <p className='cards-item-description'>{props.description}</p>
                </div>
            </Link>
        </div>
    </>
  )
}

export default CardItem