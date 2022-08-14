import React from 'react'

function Project(props) {
  return (
    <div className='container bg-white rounded-xl bg-opacity-10 flex flex-col justify-around shadow-xl shadow-black'>
        <a href={props.url}><img className='p-4' src={require(`../assets/${props.file}-project.jpg`)} alt={props.file}/></a>
        <a href={props.url}><h1 className='text-gray-300 text-center text-4xl font-semibold pb-3'>{props.name}</h1></a>
    </div>
  )
}

export default Project