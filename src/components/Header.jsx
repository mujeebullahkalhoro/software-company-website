import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate= useNavigate();

  const handleContactClick=()=>{

    navigate("/");

    setTimeout(()=>{
      const FooterSection = document.getElementById("footerId");

      if(FooterSection){
        FooterSection.scrollIntoView({behavior:"smooth"});
      }
    },0);
  }


  return (
    <header>
      <nav className='navbar'>
        <div className='Logo-Section'>
          <Link to="/">
            <img className="logo-pic" src=".\src\assets\Logo.jpeg" alt="Logo" />
          </Link>
          <div className='company-name'>
            <h3>GlintTech</h3>
            <h2 className='tech-innovative'>Tech-Innovation</h2>
          </div>
        </div>

        <div className={`Nav-Items ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item' : 'nav-item'} onClick={handleContactClick}>Contact Us</NavLink>
          <NavLink to="/choose" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'} onClick={toggleMenu}>Why Choose Us</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'} onClick={toggleMenu}>Services</NavLink>
          <NavLink to="/vacancy" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'} onClick={toggleMenu}>Hiring Vacancy</NavLink>
        </div>

        

        <div className='Search-Section'>
             <input type="text" className='search-input' placeholder="Search Services" />
            <button className='search-button'>
                    <i className="fa-solid fa-magnifying-glass"></i>
            </button>
       </div>

       {/* Hamburger Icon */}
       <div className='hamburger' onClick={toggleMenu}>
        <h2 className='menu'>Menu</h2>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
