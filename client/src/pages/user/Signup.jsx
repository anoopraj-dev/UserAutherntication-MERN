import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='font-bold text-3xl text-center my-7'>Sign Up</h1> 
     <form  className='flex flex-col gap-4'>
      <input type="text" placeholder='Name' id ='name' className='bg-slate-100 p-4 rounded-lg'/>
      <input type="text" placeholder='Email' id ='email' className='bg-slate-100 p-4 rounded-lg'/>
      <input type="text" placeholder='Password' id ='password' className='bg-slate-100 p-4 rounded-lg'/>
      <button className='bg-cyan-900 text-white p-3 rounded-lg font-semibold uppercase hover:opacity-90'>Sign Up</button>
     </form>
     <div className=' flex gap-2 mt-5'>
      <p>Have an account?</p>
    
      <span className='text-blue-500'>Sign In</span>
     
     </div>
    </div>
  )
}

export default Signup
