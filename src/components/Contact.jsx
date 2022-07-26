import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] inline-flex justify-center items-center p-4'>
        <form action='https://getform.io/f/b8a18ece-7188-4e73-8e4c-f6957d0b4a92' method='POST' className="flex flex-col max-w-[600px] w-full">
            <div className="p-8">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                <p className="text-gray-300 py-4">Submit the form below or shoot me an email - jj.briasco@gmail.com </p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='name' />
            <textarea className='p-2 bg-[#ccd6f6]' name="message" rows="10" placeholder='Message'></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Submit</button>
        </form>
    </div>
  )
}

export default Contact