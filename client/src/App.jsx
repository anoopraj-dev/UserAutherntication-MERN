
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/user/Home'
import SignIn from './pages/user/SignIn'
import Header from './components/Header'
import About from './pages/user/About'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
