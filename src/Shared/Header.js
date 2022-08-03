import React from "react";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth); 

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <nav className="h-20 bg-slate-700 text-white flex items-center justify-between">
      <Link to="/" className="pl-8">
        <FcHome className="text-4xl" />
      </Link>
      <Link to="/zoom" className="pl-8">
        <p className="hover:italic text-xl pr-8">ZOOM</p>
      </Link>

      {
        user ?
        <Link to="/sign-in" onClick={handleSignOut}>
        <p className="hover:italic text-2xl pr-8">SignOut</p>
      </Link>
        :
        <Link to="/sign-in">
        <p className="hover:italic text-2xl pr-8">SignIn</p>
      </Link>
      }
    </nav>
  );
};

export default Header;
