import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading";

function SocialLogin() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error || error1 || error2) {
      errorElement = <div>
        <p className="text-red-600">Error: {error?.message} {error1?.message} {error2?.message}</p>
      </div>                                    
  }

  if (loading || loading1 || loading2) {
    return <p><Loading></Loading></p>;
  }

  if (user || user1 || user2) {
    navigate('/home');
  }
  return (
    <div className="section bg-slate-100 w-1/2 m-auto">
      <div className="check-box flex justify-center gap-x-2 m-4">
        <input type="checkbox" />
        <p>Keep Me Signed In</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <hr className="w-full h-[1px] bg-black border-none" />
        <h2 className="shrink-0">or Sign In with</h2>
        <hr className="w-full h-[1px] bg-black border-none" />
      </div>
      {errorElement}
      <div>
        <ul className="flex justify-center items-center gap-24 m-4">
          <button onClick={() => signInWithGoogle()} className="">
            {" "}
            <FcGoogle className="ml-4 mb-4" /> Google
          </button>
          <button onClick={() => signInWithGithub()} className="">
            {" "}
            <BsGithub className="ml-4 mb-4" /> GitHub
          </button>
          <button onClick={() => signInWithFacebook()} className="">
            {" "}
            <BsFacebook className="ml-4 mb-4" /> Facebook
          </button>
        </ul>
      </div>
    </div>
  );
}

export default SocialLogin;
