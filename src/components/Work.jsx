import React from 'react'
import Project from './Project'

const Work = () => {
  return (
    <div name='work' className='w-full h-full text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
            <div className='pb-8 pt-20'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:mx-10'>
            <Project file='survey' name='Survey Page'/>
            <Project file='game' name='Dinosaur Game'/>
            <Project file='survey' name='Survey Page'/>
        </div>
    </div>
  )
}

export default Work