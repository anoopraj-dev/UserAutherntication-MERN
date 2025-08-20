
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/user/Home'
import SignIn from './pages/user/SignIn'
import Profile from './pages/user/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
