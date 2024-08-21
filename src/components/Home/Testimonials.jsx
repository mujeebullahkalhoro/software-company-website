import React from "react";
import './Testimonials.css'; 
import TestimonialBox from "./TestimonialBox";

import webClientImage from '../../assets/webclient.jpeg';
import appClientImage from '../../assets/appclient.jpeg';
import uiClientImage from '../../assets/uiclient.jpeg';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <TestimonialBox 
        logo={webClientImage}
        quote={"GlintTEch transformed our website with a stunning design and seamless functionality."}
        client={"John Smith"} 
      />

      <TestimonialBox 
        logo={appClientImage}
        quote={"Their mobile app development exceeded our expectations, highly recommend GlintTEch!"}
        client={"Alberto"} 
      />

      <TestimonialBox 
        logo={uiClientImage}
        quote={"Professional and creative, they delivered top-notch graphics design for our brand."}
        client={"Camus Dom"} 
      />
    </section>
  );
};

export default Testimonials;
