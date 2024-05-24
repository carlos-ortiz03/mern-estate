import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="block border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="block border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="block border p-3 rounded-lg"
          id="password"
        />
        <button className="rounded-lg bg-emerald-700 text-white p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div>
        <p>Have an account?</p>>
        <Link to="/sign-in">
          <span className="text-emerald-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
