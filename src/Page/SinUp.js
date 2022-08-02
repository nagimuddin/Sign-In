import React, { useRef } from "react";
// import app from "../firebase.init";
import { FaChevronLeft } from "react-icons/fa";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth(app);

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  };
  
  return (
    <div className="bg-slate-100 w-1/2 m-auto">
      <div className="section grid justify-center">
        <div>
          <h1 className="flex justify-center text-4xl font-bold text-cyan-300 py-8">
            ZOOMLA
          </h1>
        </div>
        <div>
          <form onSubmit={onSubmit} className="grid gap-4">
          <input
              className="border border-cyan-300 rounded-lg py-2 pl-2 pr-40"
              type="text"
              name="name"
              id="name"
              value="name"
              ref="nameRef"
              placeholder="Please Enter Your Name"
              required
            />
            <input
              className="border border-cyan-300 rounded-lg py-2 pl-2 pr-40"
              type="text"
              name="email"
              id="email"
              value="email"
              ref="emailRef"
              placeholder="Please Enter Your Email"
              required
            />
            <input
              className="border border-black rounded-lg py-2 pl-2 pr-40"
              type="password"
              name="password"
              id="password"
              value="password"
              ref="passwordRef"
              placeholder="Please Enter Your Password"
              required
            />
            <button
              // onClick={handleGoogleSignIn}
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
        <p className="text-cyan-300">Sign Up</p>
      </div>
    </div>
  );
};

export default SignUp;

