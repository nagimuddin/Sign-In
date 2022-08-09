import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import SocialLogin from "./SocialLogin";

const SignIn = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();

  const location = useLocation();
  let errorElement;

  const from = location.state?.from?.pathname || '/';

  const handelSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    errorElement = <div>
      <p className="text-red-600">Error: {error.message}</p>
    </div>                                    
}
  
  if (user) {
    navigate('/zoom');
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
          <form onSubmit={handelSubmit} className="grid gap-4">
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
            {errorElement}
            <button
              type="submit"
              className="rounded-lg bg-slate-300 py-2 text-slate-500 font-semibold"
            >
              Sign In
            </button>
            <p className="flex justify-center">Forgot Password?</p>
          </form>
        </div>
      </div>
      <SocialLogin></SocialLogin>
      <div className="flex justify-between m-10 pb-5">
        <p className="flex items-center gap-1">
          {" "}
          <FaChevronLeft /> Back
        </p>
        <Link to="/sign-up">
          <p className="text-cyan-300">Sign Up</p>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
