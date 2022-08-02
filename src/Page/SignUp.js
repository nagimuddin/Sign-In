import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

function SignUp() {

    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const confirmPasswordRef = useRef("");

    const handleSubmit = event => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        console.log(name, email, password, confirmPassword);
    }


  return (
    <div className="bg-slate-100 w-1/2 m-auto">
      <div className="section grid justify-center">
        <div>
          <h1 className="flex justify-center text-4xl font-bold text-cyan-300 py-8">
            ZOOMLA
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="grid gap-4">
          <input
              className="border border-cyan-300 rounded-lg py-2 pl-2 pr-40"
              type="text"
              name="name"
              id="name"
              ref={nameRef}
            //   value="name"
              placeholder="Please Enter Your Name"
              required
            />
            <input
              className="border border-cyan-300 rounded-lg py-2 pl-2 pr-40"
              type="text"
              name="email"
              id="email"
              ref={emailRef}
            //   value="email"
              placeholder="Please Enter Your Email"
              required
            />
            <input
              className="border border-black rounded-lg py-2 pl-2 pr-40"
              type="password"
              name="password"
              id="password"
              ref={passwordRef}
            //   value="password"
              placeholder="Enter Your Password"
              required
            />
            <input
              className="border border-black rounded-lg py-2 pl-2 pr-40"
              type="confirmPassword"
              name="confirmPassword"
              id="confirmPassword"
              ref={confirmPasswordRef}
            //   value="password"
              placeholder="Confirm Your Password"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-slate-300 py-2 text-slate-500 font-semibold"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-between m-10 pb-5">
        <p className="flex items-center gap-1">
          {" "}
          <FaChevronLeft /> Back
        </p>
        <Link to="/signin"><p className="text-cyan-300">Sign In</p></Link>
      </div>
    </div>
  );
};

export default SignUp;
