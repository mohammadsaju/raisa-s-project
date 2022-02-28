import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <header className='py-5 px-14 bg-slate-800 fixed top-0 right-0 left-0 z-20 border-b-4 border-green-400'>
        <div>
            <ul className='flex  justify-center items-center gap-16'>
                <li><Link to='/' className='text-lg font-medium text-teal-100 hover:text-pink-300 transition'>HOME</Link></li>
                <li><Link to='/about' className='text-lg font-medium text-teal-100 hover:text-pink-300 transition'>ABOUT</Link></li>
                <li><Link to='/contact' className='text-lg font-medium text-teal-100 hover:text-pink-300 transition'>CONTACT</Link></li>
                <li><Link to='/blog' className='text-lg font-medium text-teal-100 hover:text-pink-300 transition'>BLOG</Link></li>
                {user?.email ? (
                  <li onClick={() => logOut()} className='bg-red-400 px-3 rounded-full'><Link to='/sign-up' className='text-lg font-medium text-teal-100 hover:text-green-200 transition'>Logout</Link></li>
                ) : (
                  <li className='bg-teal-500 px-3 rounded-full'><Link to='/sign-up' className='text-lg font-medium text-teal-100 hover:text-green-200 transition'>Sign Up</Link></li>
                )}
                
            </ul>
        </div>
    </header>
  )
}

export default Header