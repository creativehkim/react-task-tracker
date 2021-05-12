import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
  const onClick= () => {
    console.log('click')
  }


  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

// not neccessary but makes the code more robust
Header.propTypes = {
  title: PropTypes.string.isRequired,  
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black', --> camelCase
// }


export default Header
