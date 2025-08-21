import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSignupModal } from "../features/modals/modalSlice";
import { useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isLoggedIn) navigate('/')
  })
  return (
    <div className="bg-cyan-950 text-white uppercase flex justify-around  mx-auto p-5">
      <Link to="/">
        <h1 className="font-bold text-xl">User Mannagement App</h1>
      </Link>
      <ul className="flex gap-5 font-md ">
        <Link to="/about">
          <li>About</li>
        </Link>

        {isLoggedIn && <li onClick={() => dispatch(logout())}>Logout</li>}
        <li onClick={() => dispatch(toggleSignupModal())}>
          {" "}
          {isLoggedIn ? user.name.toUpperCase() : "Signup"}
        </li>
      </ul>
    </div>
  );
};

export default Header;
