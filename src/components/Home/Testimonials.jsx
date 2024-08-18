import React from "react";
import './Testimonials.css'; 
import TestimonialBox from "./TestimonialBox";

const Testimonials = () => {
  return (
    <section className="testimonials">

        <TestimonialBox 
        logo={'./src/assets/webclient.jpeg'}
        quote={"GlintTEch transformed our website with a stunning design and seamless functionality."}
        client={"John Smith"} />

       <TestimonialBox 
        logo={'./src/assets/appclient.jpeg'}
        quote={'Their mobile app development exceeded our expectations, highly recommend GlintTEch!'}
        client={"Alberto"} />

       <TestimonialBox 
        logo={'./src/assets/uiclient.jpeg'}
        quote={"Professional and creative, they delivered top-notch graphics design for our brand."}
        client={"Camus Dom"} />
     
    </section>
  );
};

export default Testimonials;
