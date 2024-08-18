import React from 'react';
import './ProfilePage.css';
import Button from '../components/base-components/Button';
import {Link} from "react-router-dom";

export default function ProfilePortal () {
  return (
    <div className="profile-page">
      {/* Dashboard Section */}
      <section className="dashboard section">
        <h2 className='section-name'>Dashboard</h2>
        <p>Overview of user activity and submissions</p>
      </section>

      {/* Profile Section */}
      <section className="profile-section section">
        <h2>Profile</h2>
        <div className="user-info">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <Button title={"Edit Profile"} style={"editBtn"}/>
        </div>
      </section>

      <section className="project-submission section">
        <h2>Project Submission</h2>
        <form>
          <div className='formDiv'>
            <label htmlFor="project-title">Project Title:</label>
            <input type="text" id="project-title" className='dashInput' />
          </div>
          <div className='formDiv'>
            <label htmlFor="project-description">Project Description:</label>
            <textarea id="project-description" className='dashInput' ></textarea>
          </div>
          <Button type="submit" title={"Submit Project"} style={"submitProjectBtn"}/>
        </form>
        <div className="submitted-projects formDiv">
          <h3>Submitted Projects</h3>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
          </ul>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="notifications section">
        <h2>Notifications</h2>
        <ul>
          <li>Notification 1</li>
          <li>Notification 2</li>
        </ul>
      </section>

      
      <section className="support section">
        <h2>Support</h2>
        <p>For any issues, please <Link to="/" className='contactUS'>contact us</Link></p>
      </section>

      
      <section className="section">
        <h2>Logout</h2>
        <p>Click here to Logout<Link to="/logout"><Button title={"logout"} style={"logoutBtn"} /></Link></p>
      </section>
    </div>
  );
};


