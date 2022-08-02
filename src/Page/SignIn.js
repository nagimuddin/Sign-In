import React, { useRef } from "react";
import { Link } from "react-router-dom";
import app from "../firebase.init";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  };

  const forgotPasswordHandler = (event) => {
    const email = emailRef.current.value;
  }
  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

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
              Sign In
            </button>
            <p onClick={forgotPasswordHandler} className="flex justify-center">Forgot Password?</p>
          </form>
          <div className="check-box flex justify-center gap-x-2 m-4">
            <input type="checkbox" />
            <p>Keep Me Signed In</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <hr className="w-full h-[1px] bg-black border-none" />
            <h2 className="shrink-0">or Sign In with</h2>
            <hr className="w-full h-[1px] bg-black border-none" />
          </div>
          <div>
            <ul className="flex justify-center items-center gap-24 m-4">
              <li className="">
                {" "}
                <FcGoogle className="ml-4 mb-4" /> Google
              </li>
              <li className="">
                {" "}
                <BsGithub className="ml-4 mb-4" /> GitHub
              </li>
              <li className="">
                {" "}
                <BsFacebook className="ml-4 mb-4" /> Facebook
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between m-10 pb-5">
        <p className="flex items-center gap-1">
          {" "}
          <FaChevronLeft /> Back
        </p>
        <Link to="/sign-up"><p className="text-cyan-300">Sign Up</p></Link>
      </div>
    </div>
  );
};

export default SignIn;
