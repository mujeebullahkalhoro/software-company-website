import React from 'react'
import './Services.css';
import ServicesBox from './ServicesBox';
import './ServicesBox.css'
import '../base-components/Button.css';

export default function ServicesSection() {
  return (
    <div className='services-section'>

        <ServicesBox
        logo={'./src/assets/web.jpeg'}
        serviceTitle={'Web Development'}
        btnTitle={"Find More"}
        btnStyle={"webButton"}
         />

        <ServicesBox
        logo={'./src/assets/app.jpeg'}
        serviceTitle={'App Development'}
        btnTitle={"Find More"}
        btnStyle={"appButton"}
        />

        <ServicesBox
        logo={'./src/assets/ui.jpeg'}
        serviceTitle={'UI/UX'}
        btnTitle={"Find More"}
        btnStyle={"uiButton"}
         />

      

        
         

      </div>
  )
}
