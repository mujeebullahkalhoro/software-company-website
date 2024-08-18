import React, { useState } from 'react'
import './SignUp.css';
import Button from '../components/base-components/Button';
import {Link} from "react-router-dom";


export default function Signup() {
 

  let [signUpFormData,setSignUp]=useState({
    fullName:"",
    email:"",
    password:"",
  });

  let handleInputChange=(event)=>{
    let fieldName=event.target.name;
    let newValue=event.target.value;

    setSignUp((currentData)=>{
      return {
        ...currentData,[fieldName]:newValue
      };
    });
  }

  let handleSubmit = (event)=>{
    event.preventDefault();
    console.log(signUpFormData);
    setSignUp({
      fullName:"",
      email:"",
      password:"",
    })
  }

  return (
    <div className="outer-box">
    <div className="inner-box">
        <div className="signup-header">
            <h1>SignUp</h1>
            <p>It just takes 30 seconds</p>
        </div>
        <main className="signup-body">
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="fullname">Full Name</label>
                    <input
                     type="text"
                     id="fullname"
                     placeholder="Enter Full Name"
                     value={signUpFormData.fullName}
                     onChange={handleInputChange}
                     name="fullName"
                      required />
                </p>
                <p>
                    <label htmlFor="Email">Email</label>
                    <input
                    type="text"
                    value={signUpFormData.email}
                    onChange={handleInputChange}
                    id="Email"
                    placeholder="Enter email"
                    name="email"
                     required />
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input
                     type="password"
                     id="password"
                    placeholder="At least 8 characters"
                    value={signUpFormData.password}
                    onChange={handleInputChange}
                    name="password"
                     required />
                </p>
                <p>
                     <Button
                      type="submit"
                      title="Create Account"
                      style="Submit" />
                </p>
            </form>
        </main>
        <footer className="signup-footer">
            <p>Already have an Account ?<Link to="/signin" ><Button title={"Sign in"} style={"sign-in"} /> </Link></p>
        </footer>
    </div>
    <div className="circle c1"></div>
    <div className="circle c2"></div>
</div>
  );
}
