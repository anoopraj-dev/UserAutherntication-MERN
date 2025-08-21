import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const { signupModal } = useSelector((state) => state.modal)

  return (
    <div >
      <h1>Home</h1>
    </div>
  )
}

export default Home
