import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const SignUp = () => {
  const {signUpUser, signInUsingGoogle} = useAuth();
  const [user, setUser] = useState({name: '', email: '', password: '', confirmPassword: ''});
  const navigate = useNavigate();
  
  //handlechange function
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }
  //handlesubmit function
  const handlesubmit = (e) => {
    e.preventDefault();
    signUpUser(user.email, user.password)
    .then(() => navigate('/'))
  }
  //handleGoogle login
  const handleGoogleLogin = () => {
    signInUsingGoogle() 
    .then(() => navigate('/'))
  }


  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border p-6 shadow-md shadow-purple-200">
      <form  onSubmit={handlesubmit}>
        <img className='form-logo' src="./images/register.jpg" alt="" />
        <label className="form-lable">Username</label>
        <input className="form-input" type="text" name="name" value={user.name} onChange={handleChange} placeholder="username..."/>
        <label className="form-lable">email</label>
        <input className="form-input" type="text" name="email" value={user.email} onChange={handleChange} placeholder="email..."/>
        <label className="form-lable">password</label>
        <input className="form-input" type="password" name="password" value={user.password} onChange={handleChange} placeholder="password..."/>
        <label className="form-lable">Confirm_password</label>
        <input className="form-input block" type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="confirm_password..."/>
        <button type="submit" className="form-btn">Submit</button>
      </form>
      <button onClick={handleGoogleLogin} className='google-btn'><img className='w-6' src="./images/google.webp" /> sign up with google</button>
        <Link to='/sign-in' className='form-xs-text'>Already have an account?</Link>
      </div>
    </div>
  )
}

export default SignUp