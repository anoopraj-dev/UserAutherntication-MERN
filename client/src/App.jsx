
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/user/Home'
import Header from './components/Header'
import About from './pages/user/About'
import Signup from './pages/user/Signup'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
