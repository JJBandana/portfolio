import React from 'react'
import PropTypes from 'prop-types'

function Logo(props) {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto pt-2 h-20' src={require(`../assets/logo-${props.file}.svg`)} alt={props.name+'-logo'}/>
        <p className='py-2'>{props.name}</p>
    </div>
  )
}

Logo.propTypes = {}

export default Logo
