import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/user/Home'
import Header from './components/Header'
import About from './pages/user/About'
// import Signup from './pages/user/Signup'
import Modal from './components/Modal'
import { useSelector } from 'react-redux'
import UserHome from './pages/user/UserHome'

const App = () => {
  const { signupModal } = useSelector((state) => state.modal)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/user' element={<UserHome/>} />
      </Routes>

      {signupModal && (
        <>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <Modal />
          </div>
        </>
      )}
    </BrowserRouter>
  )
}

export default App
