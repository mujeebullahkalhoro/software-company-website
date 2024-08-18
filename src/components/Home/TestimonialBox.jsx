import React from 'react'
import './TestimonialBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TestimonialBox({logo,quote,client}) {
  return (
    <div className='Testimonial-Box'>
        <img className="logoImage" src={logo} alt="Logo" />
        <p className='quote style'>{quote}&nbsp;&nbsp;<i className="fa-solid fa-comment message-icon"></i></p>
        <p className='name style'>{client}</p>
    </div>
  )
}
