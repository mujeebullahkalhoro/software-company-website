
import './Hiring.css';

const HiringVacancyPage = () => {
  return (
    <div className="hiring-container">
      <h1>Hiring Vacancy</h1>

      {/* Job Listings Section */}
      <section className="job-listings">
        <h2>Job Listings</h2>
        <div className="job-item">
          <h3>Software Developer</h3>
          <p>
            We are looking for a skilled Software Developer with experience in full-stack web development. The ideal candidate should have expertise in React, Node.js, and database management.
          </p>
        </div>
        <div className="job-item">
          <h3>UI/UX Designer</h3>
          <p>
            As a UI/UX Designer, you will create user-centric designs for our applications. You should have proficiency in Figma or Adobe XD, with a strong portfolio showcasing your design skills.
          </p>
        </div>
        <div className="job-item">
          <h3>Data Analyst</h3>
          <p>
            The Data Analyst will be responsible for interpreting complex data sets and providing actionable insights. Proficiency in Python, R, and SQL is required.
          </p>
        </div>
        <div className="job-item">
          <h3>Mobile App Developer</h3>
          <p>
            We are seeking a Mobile App Developer skilled in Swift, Kotlin, or React Native. You will be responsible for developing high-performance apps for Android and iOS platforms.
          </p>
        </div>
      </section>

      {/* Application Links Section */}
      <section className="application-links">
        <h2>Application Links</h2>
        <ul>
          <li><a href="#apply-software-developer">Software Developer Job Description and Application</a></li>
          <li><a href="#apply-ui-ux-designer">UI/UX Designer Job Description and Application</a></li>
          <li><a href="#apply-data-analyst">Data Analyst Job Description and Application</a></li>
          <li><a href="#apply-mobile-developer">Mobile App Developer Job Description and Application</a></li>
        </ul>
      </section>

      {/* Employee Benefits Section */}
      <section className="employee-benefits">
        <h2>Employee Benefits</h2>
        <ul>
          <li><strong>Health and Wellness:</strong> Comprehensive medical, dental, and vision coverage.</li>
          <li><strong>Retirement Plans:</strong> Competitive 401(k) with company match.</li>
          <li><strong>Professional Development:</strong> Continuous learning opportunities through workshops and courses.</li>
          <li><strong>Flexible Work Environment:</strong> Options for remote work and flexible schedules.</li>
          <li><strong>Paid Time Off:</strong> Generous vacation and personal days, as well as paid holidays.</li>
          <li><strong>Employee Recognition:</strong> Regular rewards and recognition programs for outstanding work.</li>
        </ul>
      </section>

      {/* Company Culture Section */}
      <section className="company-culture">
        <h2>Company Culture</h2>
        <p>
          We believe in fostering a collaborative, inclusive, and innovative work environment. At <strong>[Your Company Name]</strong>, we encourage creativity, support professional growth, and value work-life balance. 
          Our diverse team thrives on open communication, mutual respect, and a shared passion for technology.
        </p>
        <p>
          We host regular team-building activities, provide spaces for employees to share ideas, work autonomously, and make a meaningful impact.
        </p>
      </section>
    </div>
  );
};

export default HiringVacancyPage;
