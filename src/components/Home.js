import React from 'react';

const Home = () => {
  return (
    <div className='mt-20 flex flex-col items-center'>
        <div className='mb-12 text-center'>
            <h1 className='text-slate-700 font-extrabold text-6xl tracking-tight '>Hello. <br/> <span className='text-5xl'>I am Your <br/> Home Page</span></h1>
        </div>
        <div>
            <img src="./images/home.gif" />
        </div>
        
    </div>
  )
}

export default Home;