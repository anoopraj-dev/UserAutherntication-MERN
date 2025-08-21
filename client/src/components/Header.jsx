import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { toggleSignupModal } from '../features/modals/modalSlice';


const Header = () => {
 const dispatch = useDispatch();
  return (
    <div className='bg-cyan-950 text-white flex justify-around  mx-auto p-5'>
        <Link to='/'>
      <h1 className='font-bold text-xl'>User Mannagement App</h1>
        </Link>
      <ul className='flex gap-5 font-bold'>
        <Link to = '/about'>
        <li>About</li>
        </Link>
     
        <li onClick={()=>dispatch(toggleSignupModal())}>Signup</li>
      
      </ul>
    </div>
  )
}

export default Header
