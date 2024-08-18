import React from 'react';
import './ServicesBox.css';
import Button from '../base-components/Button';
import {Link} from "react-router-dom";
import '../base-components/Button.css';


export default function ServicesBox({logo,serviceTitle,btnTitle,btnStyle}) {
  return (
    <div className='Service-Box'>

         
      <Link to="/" className='service-logo'>
                  <img className="logoImage" src={logo} alt="Logo" />
      </Link>
        

        <div className='Service-Title'>
            <h4>{serviceTitle}</h4>
        </div>

        <div className='service-button'>
            <Button title={btnTitle} style={btnStyle} />
        </div>
      
    </div>
  )
}
