import React from 'react';
import {Link} from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-fold text-[#ccd6f6]'>Juan José Briasco</h1>
            <h2 className='text-4xl sm:text-7xl font-fold text-[#8892b0]'>I'm a Full Stack developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Programming is my passion since i am just a kid. Focused on every type of projects.</p>
            <div>
              <Link to='work' smooth={true} duration={1000}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className='ml-3' />
                  </span>
                </button>
              </Link>
            </div>
        </div>

    </div>
  )
}

export default Home
