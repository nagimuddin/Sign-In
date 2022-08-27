import React from "react";
import { FaVideo } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { TbScreenShare } from "react-icons/tb";
import { Link } from "react-router-dom";
import Bennar from "../Shared/Bennar";

function Card() {
  return (
    <div className="section flex h-screen md:flex-nowrap flex-wrap text-white ml-20">
      <div className="px-4 sm:pt-8 lg:pt-12 w-1/2 border-r border-gray-800 rounded-none">
        <div className="card grid justify-center grid-cols-2 gap-6 px-4">
          <Link to="/home" className="bg-[#ff742e] rounded-[20px]">
            <p className="w-16 h-16 p-3 mt-6 ml-6 text-4xl bg-[#ff894d] text-[#fff]shadow-2xl text-center border rounded-lg">
              <FaVideo />
            </p>
            <h4 className="text-xl font-semibold ml-6 pt-16">New Meeting</h4>
            <p className="ml-6 mb-4">Set up new meeting</p>
          </Link>
          <Link to="/" className="bg-[#0e78f9] rounded-[20px]">
            <p className="w-16 h-16 p-3 mt-6 ml-6 text-4xl bg-[#328cfa] text-[#fff]shadow-2xl text-center border rounded-lg">
              <AiOutlinePlusSquare />
            </p>
            <h4 className="text-xl font-semibold ml-6 pt-16">Join Meeting</h4>
            <p className="ml-6 mb-4">Vai invitetion link</p>
          </Link>
          <Link to="/" className="bg-[#0e78f9] rounded-[20px]">
            <p className="w-16 h-16 p-3 mt-6 ml-6 text-4xl bg-[#328cfa] text-[#fff]shadow-2xl text-center border rounded-lg">
              <BsFillCalendarDateFill />
            </p>
            <h4 className="text-xl font-semibold ml-6 pt-16">Scedule</h4>
            <p className="ml-6 mb-4">Plan your meeting</p>
          </Link>
          <Link to="/" className="bg-[#0e78f9] rounded-[20px]">
            <p className="w-16 h-16 p-3 mt-6 ml-6 text-4xl bg-[#328cfa] text-[#fff]shadow-2xl text-center border rounded-lg">
              <TbScreenShare />
            </p>
            <h4 className="text-xl font-semibold ml-6 pt-16">Share Screen</h4>
            <p className="ml-6 mb-4">Show your work</p>
          </Link>
        </div>
      </div>
      <Bennar></Bennar>
    </div>
  );
}

export default Card;
