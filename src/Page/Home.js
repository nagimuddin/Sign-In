import React from "react";
import { FaVideo } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { TbScreenShare } from "react-icons/tb";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="section bg-slate-700 text-white ml-24">
      <div className="flex w-full h-screen ml-8">
        <div className="card w-1/2 grid grid-cols-2 pr-8 pt-12 gap-4 border-r border-gray-800 rounded-none">
          <Link to="/home" className="bg-[#ff742e] rounded-lg">
            <p className="text-4xl border rounded-lg m-6 p-2"><FaVideo/></p>
            <h4 className="text-xl font-semibold ml-6 pt-12">New Meeting</h4>
            <p className="ml-6 mt-2">Set up new meeting</p>
          </Link>
          <Link to="/" className="bg-[#0e78f9] rounded-lg">
            <p className="text-4xl text-white text-center border rounded-lg m-4 p-2"><AiOutlinePlusSquare /></p>
            <h4 className="text-xl font-semibold ml-6 pt-12">Join Meeting</h4>
            <p className="ml-6 mt-2">Vai invitetion link</p>
          </Link>
          <Link to="/" className="bg-[#0e78f9] rounded-lg">
            <p className="text-4xl text-center border rounded-lg m-4 p-2"><BsFillCalendarDateFill /></p>
            <h4 className="text-xl font-semibold ml-6 pt-12">Scedule</h4>
            <p className="ml-6 mt-2">Plan your meeting</p>
          </Link>
          <Link to="/" className="bg-[#0e78f9] rounded-lg">
            <p className="text-4xl text-center border rounded-lg m-4 p-2"><TbScreenShare /></p>
            <h4 className="text-xl font-semibold ml-6 pt-12">Share Screen</h4>
            <p className="ml-6 mt-2">Show your work</p>
          </Link>
        </div>
        <div className="schedual pl-8 pt-12">
          <h1>Welcome to Meeting scaduale</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
