import React from 'react'
import HomeDescription from '../components/Home/homeDescription'
import HomeImage from '../components/Home/homeImage';
import ServicesSection from '../components/Home/Services';
import TitleBox from '../components/Home/TitleBox';
import Testimonials from '../components/Home/Testimonials';

function Home() {
  return (
    <div>
      <HomeDescription />
      <HomeImage />
      <TitleBox title={"Glint Services"} />
      <ServicesSection />
      <TitleBox title="Testimonials" />
      <Testimonials />
    </div>
  )
}

export default Home;
