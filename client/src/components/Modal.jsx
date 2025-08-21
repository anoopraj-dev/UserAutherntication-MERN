
import SignUp from './SignUp';
import { useDispatch } from 'react-redux'
import { closeModals } from '../features/modals/modalSlice';

const Modal = () => {
    const dispatch = useDispatch();
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
        <div className="bg-white rounded-lg p-6 w-full max-w-lg relative shadow-xl">
            <button className="absolute top-3 right-3 text-gray-600 hover:text-black" onClick={()=>dispatch(closeModals())}>X</button>
             <SignUp/>
        </div>
       
      
    </div>
  )
}

export default Modal
