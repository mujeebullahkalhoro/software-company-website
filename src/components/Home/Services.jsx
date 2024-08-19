import React from 'react'
import './Services.css';
import ServicesBox from './ServicesBox';
import './ServicesBox.css'
import '../base-components/Button.css';
import {Link} from "react-router-dom";

export default function ServicesSection() {
  return (
    <div className='services-section'>

      <Link to="/services"> 
        <ServicesBox
        logo={'./src/assets/web.jpeg'}
        serviceTitle={'Web Development'}
        btnTitle={"Find More"}
        btnStyle={"webButton"}
         />
         </Link>

         <Link to="/services"> 
        <ServicesBox
        logo={'./src/assets/app.jpeg'}
        serviceTitle={'App Development'}
        btnTitle={"Find More"}
        btnStyle={"appButton"}
        />
         </Link>

<Link to="/services"> 
        <ServicesBox
        logo={'./src/assets/ui.jpeg'}
        serviceTitle={'UI/UX'}
        btnTitle={"Find More"}
        btnStyle={"uiButton"}
         />
          </Link>

      

        
         

      </div>
  )
}
