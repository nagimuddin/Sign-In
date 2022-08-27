import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase";
import { signOut } from "firebase/auth";
import { Input } from "@mantine/core";

const Topbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
      <div className="section sticky top-0 h-20 bg-[#1c1f2e] text-white list-none flex items-center justify-end gap-5 ml-20 pr-4 border-b border-gray-800">        
        <ul>
        <li className="bg-slate-700">
            <form>
              <Input
                icon={<FiSearch />}
                placeholder="Search By Keyword"
                radius="md"
                size="md"
              />
            </form>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="#" />
            </div>
          </label>
          <ul
            tabindex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-700 rounded-box w-52"
          >
            <li>Profile</li>
            <li>Update</li>
            <li>
              {user ? (
                <Link to="/sign-in" onClick={handleSignOut}>
                  <p>Sign-Out</p>
                </Link>
              ) : (
                <Link to="/sign-in">
                  <p>Sign-In</p>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Topbar;
