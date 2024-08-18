import React, { useState } from 'react'
import './SignIn.css';
import Button from '../components/base-components/Button';
import {Link} from "react-router-dom";
import '../components/base-components/Button.css';


export default function Signin() {
 

  let [signInFormData,setSignIn]=useState({
    email:"",
    password:"",
  });

  let handleInputChange=(event)=>{
    let fieldName=event.target.name;
    let newValue=event.target.value;

    setSignIn((currentData)=>{
      return {
        ...currentData,[fieldName]:newValue
      };
    });
  }

  let handleSubmit = (event)=>{
    event.preventDefault();
    setSignIn({
      email:"",
      password:"",
    })
  }

  return (
    <div className="outer-box">
    <div className="signin-inner-box">
        <div className="signin-header">
            <h1>SignIn</h1>
            <p>It just takes 30 seconds</p>
        </div>
        <main className="signin-body">
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="Email">Email</label>
                    <input
                    type="text"
                    value={signInFormData.email}
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
                    value={signInFormData.password}
                    onChange={handleInputChange}
                    name="password"
                     required />
                </p>
                <p>
                  <Link to="/profile">
                     <Button
                      type="submit"
                      title="Sign in"
                      style="signInBtn" />
                      </Link>
                </p>
            </form>
        </main>
    </div>
    <div className="circle c1"></div>
    <div className="circle c2"></div>
</div>
  );
}
