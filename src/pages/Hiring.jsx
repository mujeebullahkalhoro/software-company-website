import {Link} from "react-router-dom";
import './Hiring.css';

const HiringVacancyPage = () => {
  return (
    <div className="hiring-container">
      <h1 className='heading-one'>Hiring Vacancy</h1>
      {/* Job Listings Section */}
      <section className="job-listings hiring-section">
        <h2 className='heading-two'>Job Listings</h2>
        <div className="job-item">
          <h3 className='heading-three'>Software Developer</h3>
          <p className="paragraphs">
            We are looking for a skilled Software Developer with experience in full-stack web development. The ideal candidate should have expertise in React, Node.js, and database management.
          </p>
        </div>
        <div className="job-item">
          <h3 className='heading-three'>UI/UX Designer</h3>
          <p className="paragraphs">
            As a UI/UX Designer, you will create user-centric designs for our applications. You should have proficiency in Figma or Adobe XD, with a strong portfolio showcasing your design skills.
          </p>
        </div>
        <div className="job-item">
          <h3 className='heading-three'>Data Analyst</h3>
          <p className="paragraphs">
            The Data Analyst will be responsible for interpreting complex data sets and providing actionable insights. Proficiency in Python, R, and SQL is required.
          </p>
        </div>
        <div className="job-item">
          <h3 className='heading-three'>Mobile App Developer</h3>
          <p className="paragraphs"> 
            We are seeking a Mobile App Developer skilled in Swift, Kotlin, or React Native. You will be responsible for developing high-performance apps for Android and iOS platforms.
          </p>
        </div>
      </section>

      {/* Application Links Section */}
      <section className="application-links hiring-section">
        <h2 className='heading-two'>Application Links</h2> 
        <Link to="/vacancy" className="vacancy-links"> Software Developer Job Description and Application</Link>
        <br />
        <Link to="/vacancy" className="vacancy-links"> UI/UX Designer Job Description and Application</Link>
        <br />
        <Link to="/vacancy" className="vacancy-links">Data Analyst Job Description and Application</Link>
        <br />
        <Link to="/vacancy" className="vacancy-links"> Mobile App Developer Job Description and Application</Link>
      </section>

      {/* Employee Benefits Section */}
      <section className="employee-benefits hiring-section">
        <h2 className='heading-two'>Employee Benefits</h2>
        <ul className='unorder-list'>
          <p className="paragraphs"><strong className="paragraphs">Health and Wellness:</strong> Comprehensive medical, dental, and vision coverage.</p>
          <p className="paragraphs"><strong className="paragraphs" >Retirement Plans:</strong> Competitive 401(k) with company match.</p>
          <p className="paragraphs"><strong className="paragraphs">Professional Development:</strong> Continuous learning opportunities through workshops and courses.</p>
          <p className="paragraphs"><strong className="paragraphs">Flexible Work Environment:</strong> Options for remote work and flexible schedules.</p>
          <p className="paragraphs"><strong className="paragraphs">Paid Time Off:</strong> Generous vacation and personal days, as well as paid holidays.</p>
          <p className="paragraphs"><strong className="paragraphs">Employee Recognition:</strong> Regular rewards and recognition programs for outstanding work.</p>
        </ul>
      </section>

      {/* Company Culture Section */}
      <section className="company-culture hiring-section">
        <h2 className='heading-two'>Company Culture</h2>
        <p className="paragraphs">
          We believe in fostering a collaborative, inclusive, and innovative work environment. At <strong>GlintTEch</strong>, we encourage creativity, support professional growth, and value work-life balance. 
          Our diverse team thrives on open communication, mutual respect, and a shared passion for technology.
        </p>
        <p className="paragraphs">
          We host regular team-building activities, provide spaces for employees to share ideas, work autonomously, and make a meaningful impact.
        </p>
      </section>
    </div>
  );
};

export default HiringVacancyPage;
