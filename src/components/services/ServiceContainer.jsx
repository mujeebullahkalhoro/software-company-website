import './ServiceContainer.css';
export default function ServiceContainer({ image, heading, text }) {
  return (
    <div className="service-container">
      <h1 className='service-heading'>{heading}</h1>

      <div className="service-box">
        <div className='image'>
        <img src={image} alt="image" />
        </div>
        
        <div className='text'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
