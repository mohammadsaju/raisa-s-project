import React, {useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const SignIn = () => {
  const {signInUser, signInUsingGoogle} = useAuth();
  const [user, setUser] = useState({email: '', password:''});
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_url = location.state?.from || '/';
  //handleChange function
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }
  //handleLogin function
  const handleLogin = (e) => {
    e.preventDefault();
    signInUser(user.email, user.password)
    .then(() => navigate(redirect_url));
  }
  //handle google login
  const handleGoogleLogin = () => {
    signInUsingGoogle()
    .then(() => navigate(redirect_url))
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border p-6 shadow-md shadow-purple-300">
      <form>
        <img className='form-logo' src="./images/register.jpg" alt="" />
        <label className="form-lable">email</label>
        <input className="form-input" type="text" name="email" value={user.email} onChange={handleChange} placeholder="email..."/>
        <label className="form-lable">password</label>
        <input className="form-input block" type="password" name="password" value={user.password} onChange={handleChange} placeholder="password..."/>
        <button onClick={handleLogin} className="form-btn">Submit</button>
      </form>
      <button onClick={handleGoogleLogin} className='google-btn'><img className='w-6' src="./images/google.webp" /> sign in with google</button>
        <Link to='/sign-up' className='form-xs-text'>Create an account?</Link>
      </div>
    </div>
  )
}

export default SignIn