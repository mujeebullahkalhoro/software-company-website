import React from 'react'
import './TitleBox.css'

export default function TitleBox({title}) {
  return (
    <div className='Title'>
            <div className='dashes'>
               <span><h5>-</h5></span>
               <span><h4>-</h4></span>
                <span><h3>-</h3></span>
            </div>
            <h2 className='glint'>{title}</h2>
            <div className='dashes'>
                 <span><h3>-</h3></span>
                 <span><h4>-</h4></span>
                 <span><h5>-</h5></span>
            </div>
        </div>
  )
}
