import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './logout.css';

const Logout = () => {
  return (
    <div className='logout'>
         <div style={styles.container}>
              <h2 style={styles.message}>You have been logged out successfully.</h2>
               <p style={styles.subMessage}>Thank you for visiting GlintTEch.</p>
               <Link to="/signin" style={styles.loginLink}>Click here to Signin again</Link>
         </div>
         </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    background: 'linear-gradient(to top left, rgba(208, 223, 236, 0.603),#becfe1fb )',
    width:'100vw'
  },
  message: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#1a245d',
  },
  subMessage: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#1a245d',
  },
  loginLink: {
    fontSize: '16px',
    color: '#1a245d',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Logout;
