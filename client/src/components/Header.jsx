import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-cyan-950 text-white flex justify-around  mx-auto p-5'>
        <Link to='/'>
      <h1 className='font-bold text-xl'>User Mannagement App</h1>
        </Link>
      <ul className='flex gap-5 font-bold'>
        <Link to = '/about'>
        <li>About</li>
        </Link>
        <Link to='/signin'>
        <li>Sign In</li>
        </Link>
      </ul>
    </div>
  )
}

export default Header
