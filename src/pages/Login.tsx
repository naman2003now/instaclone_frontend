import React from "react";
import { ReactComponent as Instagram } from "../assets/Instagram.svg";

function Login() {
  return (
    <div className="bg-white h-screen w-screen flex flex-col justify-center items-center">
      <div className="bg-white sm:bg-[#ffffff] p-5 sm:p-10 border-0 sm:border border-seperator grid grid-rows-6 justify-center items-center gap-2">
        <div className="row-span-3 flex justify-center items-center">
          <Instagram />
        </div>
        <div className="row-span-3 w-full grid gap-2">
          <div className="bg-white border border-seperator px-4 py-1 rounded-sm">
            <input className="bg-white outline-0 w-64" placeholder="Username" />
          </div>
          <div className="bg-white border border-seperator px-4 py-1 rounded-sm">
            <input className="bg-white outline-0 w-64" placeholder="Password" />
          </div>
          <button
            type="button"
            className="bg-blue text-white rounded-md my-2 w-full h-10"
          >
            Log In
          </button>
        </div>
      </div>
      <div className="bg-white sm:bg-[#ffffff] border-0 sm:border border-seperator my-4 px-10">
        <div className="w-64 m-4 flex flex-row gap-2">
          <div>Do not have an account?</div>
          <a href="/" className="text-blue font-semibold">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
