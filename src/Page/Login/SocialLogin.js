import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";

function SocialLogin() {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithGithub, ghUser, ghLoading, ghError] = useSignInWithGithub(auth);
  const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  let errorElement;

  if (gError || ghError || fError) {
      errorElement = <div>
        <p className="text-red-600">Error: {gError?.message} {ghError?.message} {fError?.message}</p>
      </div>                                    
  }

  if (gLoading || ghLoading || fLoading) {
    return <p>Loading...</p>;
  }

  if (gUser || ghUser || fUser) {
    navigate('/zoom');
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
