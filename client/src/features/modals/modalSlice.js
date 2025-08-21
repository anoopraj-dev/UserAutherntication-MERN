import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    signupModal : false,
    signinModal : false
}

const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers: {
        toggleSignupModal : (state)=>{
            state.signupModal = !state.signupModal;
        },
        toggleSigninModal : (state)=>{
            state.signinModal = !state.signinModal;
        },

        closeModals: (state) =>{
            state.signupModal = false;
            state.signinModal = false;
        }
    }
})

export const {toggleSignupModal,toggleSigninModal,closeModals} = modalSlice.actions;
export default modalSlice.reducer;