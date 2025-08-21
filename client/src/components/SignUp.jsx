
import { useState } from "react";
import { useDispatch} from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(true);
  const navigate = useNavigate();


  const dispatch = useDispatch();
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const SIGNUP_URL = import.meta.env.VITE_SIGNUP_URL;
  const SIGNIN_URL = import.meta.env.VITE_SIGNIN_URL

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      const res = await fetch(SIGNUP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        return;
      }
    } catch (error) {
      setLoading(false);
      setError("Network error. Please try again!");
    }
  };

  const handleLogin = async(e)=>{
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);

      const res = await fetch (SIGNIN_URL,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        credentials:"include",
        body:JSON.stringify(formData)
      });

      const data = await res.json();
      setLoading(false);

      if(!res.ok){
        setError(data.message || 'Something went wrong');
        return;
      }

      dispatch(setUser({user:data.user, token:data.token}));
      navigate('/user')

    } catch (error) {
      console.error(error)
    }
  }

  const handleToggleSignin = () => {
    setMode((prev)=>!prev);
    setFormData({});
    setError("");
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-bold text-3xl text-center my-7">
        {mode ? "Sign Up" : "Sign In"}
      </h1>
      <form className="flex flex-col gap-4" onSubmit={mode?handleSignUp:handleLogin}>
        {error && (
          <h1 className="font-semibold text-red-500 text-center">
            Oops! You've made a mistake!
          </h1>
        )}
        {mode  && (
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="bg-slate-100 p-4 rounded-lg"
            onChange={handleInput}
            value={formData.name || ""}
          />
        )}
        
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-4 rounded-lg"
          onChange={handleInput}
          value={formData.email || ""}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-4 rounded-lg"
          onChange={handleInput}
          value={formData.password || ""}
        />

        {mode && (
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            className="bg-slate-100 p-4 rounded-lg"
            onChange={handleInput}
            value={formData.confirmPassword || ""}
          />
        )}

        <button className="bg-cyan-900 text-white p-3 rounded-lg font-semibold uppercase hover:opacity-90">
          {loading
          ?'Loading...'
          :mode
          ? 'Sign Up'
          :'Sign In'
          }
        </button>
      </form>

      {error && <p className="text-red-600 mt-5 text-center ">{error}</p>}

      <div className=" flex gap-2 mt-5">
        <p>{mode?'Already a member ? ':`Don't have an account ?`}</p>
        <span className="text-blue-500" onClick={handleToggleSignin}>
          {
            mode?'Sign In':'Sign Up'
          }
        </span>
      </div>
    </div>
  );
}

export default SignUp;
