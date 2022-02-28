import React from 'react';

const About = () => {
  return (
    <div className='text-center mt-16'>
      <img className='object-cover w-72 h-80 rounded-full mx-auto' src="./images/raisa.jpg" alt="raisa" />
      <h1 className='text-4xl font-extrabold text-slate-600 mb-2 mt-5'>About Me</h1>
      <h5 className='text-lg font-medium text-gray-500'>I am A Front End Developer From <br /> Comilla, Bangladesh </h5>
      <p className='mt-5 text-xl font-medium text-slate-400 capitalize'>i enjoy taking complex problems and turning them into <br /> simple and beautiful interface designs. i also love the logic <br /> and structure of coding and always strive to write elegant <br /> and efficient code, whether it be  HTML, CSS or JS...</p>
      <button className='bg-sky-400 px-10 py-3 rounded-full text-white font-medium mt-8 shadow-md shadow-green-300 hover:-translate-y-2 transition'>Dwonload My Resume</button>
    </div>
  )
}

export default About;