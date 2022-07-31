import React from "react";

const SignIn = () => {
  return (
    <div className="section grid justify-center bg-slate-100 w-1/2 m-auto">
      <div>
        <h1 className="text-4xl font-bold text-cyan-300 py-8">ZOOMLA</h1>
      </div>
      <div>
        <form className="grid gap-4">
          <input
            className="border border-cyan-300 rounded-lg py-2 pl-2 pr-40"
            type="text"
            name="email"
            placeholder="Your Email"
            required
          />
          <input
            className="border border-black rounded-lg py-2 pl-2 pr-40"
            type="text"
            name="password"
            placeholder="Your Password"
            required
          />
          <button className="border border-black rounded-lg bg-slate-300 py-2 text-slate-400">
            Sign In
          </button>
        </form>
        <div className="check-box m-4">
            <p>Keep Me Signed In</p>
        </div>
         <div className="flex justify-center items-center gap-3">
        <hr className="w-full h-[1px] bg-black border-none" />
        <h2 className="shrink-0">or Sign In with</h2>
        <hr className="w-full h-[1px] bg-black border-none" />
      </div>
      </div>
    </div>
  );
};

export default SignIn;
