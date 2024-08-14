import './Container.css';

export default function Container({ heading, text, icon }) {
  return (
    <div className='container'>
      <div className='icon-heading'>
        {icon} 
        <h2>{heading}</h2>
      </div>
      <p>{text}</p>
    </div>
  )
}
