import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newUser,setNewuser] = useState(false);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const SIGNUP_URL = import.meta.env.VITE_SIGNUP_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      const res = await fetch(SIGNUP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if(data.success===false){
        setError(true);
        return;
      }

    } catch (error) {
      setLoading(false);
      setError(true)
    }
  };


  const handleSignin =()=>{
    setNewuser((prev)=>!prev)
    console.log(newUser)
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-bold text-3xl text-center my-7">{!newUser ? 'Sign Up': 'Sign In'}</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          className="bg-slate-100 p-4 rounded-lg"
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-4 rounded-lg"
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-4 rounded-lg"
          onChange={handleInput}
        />
        <button className="bg-cyan-900 text-white p-3 rounded-lg font-semibold uppercase hover:opacity-90">
          {
            loading? 'Loading....':'Sign Up'
          }
        </button>
      </form>
      <p className="text-red-500 mt-5">{ error && 'Something went wrong!'}</p>
      <div className=" flex gap-2 mt-5">
        <p>Have an account?</p>

        <span className="text-blue-500" onClick={handleSignin}>Sign In</span>
      </div>
      
    </div>
  );
}

export default SignUp;
