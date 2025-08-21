import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const { signupModal } = useSelector((state) => state.modal)

  return (
    <div >
     LandingPage
    </div>
  )
}

export default Home
