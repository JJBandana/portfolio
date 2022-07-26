import React from 'react'
import Logo from './Logo'

const Skills = () => {
    return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 h-screen'>
        {/*CONTAINER*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with.</p>
            </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <Logo file='html'name='HTML5' />
            <Logo file='css'name='CSS3' />
            <Logo file='js'name='JavaScript' />
            <Logo file='sass'name='Sass' />
            <Logo file='react'name='React' />
            <Logo file='tailwind' name='Tailwind'/>
            <Logo file='node'name='Node.js' />
            <Logo file='sql'name='MySQL' />
            <Logo file='python'name='Python' />
            <Logo file='cplusplus'name='C++' />
            <Logo file='csharp'name='C#' />
            <Logo file='unity' name='Unity' />
        </div>

        </div>
    </div>
  )
}

export default Skills