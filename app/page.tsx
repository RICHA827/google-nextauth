"use client";
import React from "react";
import { signIn } from "next-auth/react";
import GoogleButton from "react-google-button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-center font-bold text-4xl mb-4 font-serif">
            LOGIN PAGE
          </h1>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              placeholder="Username or email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="Password"
              placeholder="Password"
              className="shadow appearance-none w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              className="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded w-full"
            >
              Sign In
            </button>
          </div>
          <p className="font-bold flex-grow text-center mb-2">Or</p>
          <div className="flex items-center justify-center">
            <GoogleButton onClick={() => signIn("google")} />
          </div>
        </form>
      </div>
    </div>
  );
}
