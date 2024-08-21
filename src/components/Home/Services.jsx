import React from 'react';
import './Services.css';
import ServicesBox from './ServicesBox';
import './ServicesBox.css';
import '../base-components/Button.css';
import { Link } from "react-router-dom";

import webImage from '../../assets/web.jpeg';
import appImage from '../../assets/app.jpeg';
import uiImage from '../../assets/ui.jpeg';

export default function ServicesSection() {
  return (
    <div className='services-section'>
      <Link to="/services">
        <ServicesBox
          logo={webImage}
          serviceTitle={'Web Development'}
          btnTitle={"Find More"}
          btnStyle={"webButton"}
        />
      </Link>

      <Link to="/services">
        <ServicesBox
          logo={appImage}
          serviceTitle={'App Development'}
          btnTitle={"Find More"}
          btnStyle={"appButton"}
        />
      </Link>

      <Link to="/services">
        <ServicesBox
          logo={uiImage}
          serviceTitle={'UI/UX'}
          btnTitle={"Find More"}
          btnStyle={"uiButton"}
        />
      </Link>
    </div>
  );
}
