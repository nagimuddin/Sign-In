import React from "react";
import {
  BsCalendar2Date,
  BsChatLeftDots,
  BsClock,
  BsHouseDoorFill,
} from "react-icons/bs";
import { MdOutlineContacts } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sidebar-section fixed top-0 left-0 ">
      <div className=" p-3 hidden bg-[#1c1f2e] sm:block !z-20 fixed !bottom-0 !left-0 sm:inset-0 max-w-[90px] border-r border-gray-800">
        <Link className="flex justify-center py-4" to="/">
          <p className="p-4 text-white bg-[#0e78f9] text-2xl w-14 h-14 rounded-xl block shadow-md">
            <FaVideo />
          </p>
        </Link>
      </div>
      <nav className="mt-20">
        <ul>
          <li className="text-white text-2xl text-center w-14 h-14 rounded-lg m-4 mt-20">
            <Link className="flex justify-center py-4" to={"/"}>
              {" "}
              <BsHouseDoorFill />{" "}
            </Link>
          </li>
          <li className="text-white text-2xl text-center w-14 h-14 rounded-lg m-4 mt-4">
            <Link className="flex justify-center py-4" to={"/"}>
              {" "}
              <BsChatLeftDots />{" "}
            </Link>
          </li>
          <li className="text-white text-2xl text-center w-14 h-14 rounded-lg m-4 mt-4">
            <Link className="flex justify-center py-4" to={"/"}>
              {" "}
              <BsClock />{" "}
            </Link>
          </li>
          <li className="text-white text-2xl text-center w-14 h-14 rounded-lg m-4 mt-4">
            <Link className="flex justify-center py-4" to={"/"}>
              {" "}
              <MdOutlineContacts />{" "}
            </Link>
          </li>
          <li className="text-white text-2xl text-center w-14 h-14 rounded-lg m-4 mt-4">
            <Link className="flex justify-center py-4" to={"/"}>
              {" "}
              <BsCalendar2Date />{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
