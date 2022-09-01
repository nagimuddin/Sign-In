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
    <div
      className="section p-1 sm:p-3 sm:py-4 bg-[#212534] text-white fixed top-0 left-0 sm:pl-10 pl-3 w-full z-10 border-b"
    >
      <div>
        <ul className="flex items-center justify-between gap-x-2 sm:gap-x-2.5">
          <li className="hidden sm:block font-medium text-2xl sm:pl-20 capitalize">
            Home
          </li>
          <li className="ml-auto hidden sm:block grow-0 shrink-0 basis-auto ">
            <form className="relative z-10 ">
              <Input
                className=""
                icon={<FiSearch />}
                variant="filled"
                placeholder="Search by keyword"
                radius="md"
                size="md"
              />
            </form>
          </li>
          <li className="w-12 h-12">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="#" />
                </div>
              </label>
              <ul
                tabIndex="0"
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
