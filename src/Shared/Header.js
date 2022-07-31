import React from 'react';
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";

const Header = () => {
  return (
    <nav className='h-20 bg-slate-700 text-white flex items-center justify-between'>
        <Link to='/' className='pl-8'><FcHome className='text-4xl'/></Link>
        <Link to="/sign-in"><p className='hover:italic text-2xl pr-8'>SignIn</p></Link>
    </nav>
  );
}

export default Header;
