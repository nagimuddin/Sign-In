import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import auth from "../../firebase";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

function SignUp() {
  const [
    createUserWithEmailAndPassword,
    user,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification, sending1, error1] = useSendEmailVerification(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    createUserWithEmailAndPassword(email, password);
  };

  if (error || error1) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (sending || sending1) {
    return <p>Sending...</p>;
  }

  if (user) {
    navigate("/sign-in");
  }

  const resetPassword = async (e) => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Password reset email sent successfully");
    } else {
      toast.error("Please enter email");
    }
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
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              className="border border-cyan-300 rounded-lg py-2 pl-2 pr-40"
              type="text"
              name="name"
              id="name"
              ref={nameRef}
              placeholder="Please Enter Your Name"
              required
            />
            <input
              className="border border-cyan-300 rounded-lg py-2 pl-2 pr-40"
              type="text"
              name="email"
              id="email"
              ref={emailRef}
              placeholder="Please Enter Your Email"
              required
            />
            <input
              className="border border-black rounded-lg py-2 pl-2 pr-40"
              type="password"
              name="password"
              id="password"
              ref={passwordRef}
              placeholder="Enter Your Password"
              required
            />
            <input
              className="border border-black rounded-lg py-2 pl-2 pr-40"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              ref={confirmPasswordRef}
              placeholder="Confirm Your Password"
              required
            />
            <p className="text-center">{error?.message}</p>
            <button
              onClick={async () => {
                await sendEmailVerification();
                alert("Sent email");
              }}
              type="submit"
              className="rounded-lg bg-slate-300 py-2 text-slate-500 font-semibold"
            >
              Sign Up
            </button>
            {/* <ClipLoader className='mx-auto mt-4' color={"#36D7B7"} size={30} /> */}
            <p onClick={resetPassword} className="flex justify-center">Forgot Password? <span className="text-red-600">reset it</span></p>
          </form>
        </div>
      </div>
      <div className="flex justify-between m-10 pb-5">
        <p className="flex items-center gap-1">
          {" "}
          <FaChevronLeft /> Back
        </p>
        <Link to="/sign-in">
          <p className="text-cyan-300">Sign In</p>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
