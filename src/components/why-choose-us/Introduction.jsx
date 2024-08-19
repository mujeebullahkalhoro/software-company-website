import './Introduction.css';
export default function Introduction() {
  return (
    <div className='company-intro'>
      <div className="intro">
        <div className='headings'>
          <h1>Why choose Glint Tech</h1>
          <h2>Empowering Innovation with Cutting-Edge Technology</h2>
        </div>
        <p className='paraColour'>
         <b> Welcome to GlintTech!</b> We are more than just a technology company; we
          are your partners in innovation. With a deep understanding of the
          ever-evolving tech landscape, we are dedicated to delivering
          high-quality software solutions that drive business success. Whether
          you're a startup or an established enterprise, our team is committed
          to transforming your vision into reality.
        </p>
      </div>
      <div className='img-box'>
        <div className='image-container'>
        <img className='image' src="src/assets/about1.png" alt="" />
        </div>
      </div>
      
    
     

    </div>
  );
}
