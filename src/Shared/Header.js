import React from "react";
import {
  BsCalendar2Date,
  BsChatLeftDots,
  BsClock,
  BsHouseDoorFill,
} from "react-icons/bs";
// import { MdOutlineContacts } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sidebar-section p-4 hidden bg-[#1c1f2e] sm:block !z-20 fixed !bottom-0 !left-0 sm:inset-0 max-w-[90px] border-r ">
      <div className="sm:block hidden">
        <Link className="" to="/">
          <p className="p-4 text-white bg-[#0e78f9] text-2xl w-14 h-14 rounded-xl block shadow-md">
            <FaVideo />
          </p>
        </Link>
      </div>
      <nav className="">
        <ul>
          <li className="mt-20  w-14 h-14 text-white text-2xl text-center border border-transparent rounded-lg">
            <Link className="flex justify-center py-4" to={"/"}>
              <BsHouseDoorFill />
            </Link>
          </li>
          <li className="mt-2 w-14 h-14 text-white text-2xl text-center rounded-lg">
            <Link className="flex justify-center py-4" to={"/"}>
              <BsChatLeftDots />
            </Link>
          </li>
          <li className="mt-2 w-14 h-14 text-white text-2xl text-center rounded-lg">
            <Link className="flex justify-center py-4" to={"/"}>
              <BsClock />
            </Link>
          </li>
          <li className="mt-2 w-14 h-14 text-white text-2xl text-center rounded-lg">
            <Link className="flex justify-center py-4" to={"/"}>
              <BsCalendar2Date />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
