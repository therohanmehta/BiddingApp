"use client";
import Image from "next/image";
import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const loginAttempt = () => {
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("errors");
      });
  };
  return (
    <>
      <h1>Firebase authentication</h1>
      {JSON.stringify(userData)}
      <div className="flex items-center justify-center ">
        <div class="relative">
          {/* <div class="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div> */}
          <div
            id="form-container"
            class="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
          >
            <h2
              id="form-title"
              class="text-center text-3xl font-bold mb-10 text-gray-800"
            >
              Login
            </h2>
            <div class="space-y-5">
              <input
                class="w-full h-12 border border-gray-800 px-3 rounded-lg text-red-500 "
                placeholder="Email"
                id=""
                name=""
                type="text"
                onChange={(state) => {
                  setUserData({ ...userData, email: state.target.value });
                }}
              />
              <input
                class="w-full h-12 border border-gray-800 px-3 rounded-lg text-red-500"
                placeholder="Password"
                id=""
                name=""
                type="password"
                onChange={(state) => {
                  setUserData({ ...userData, password: state.target.value });
                }}
              />
              <button
                class="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={loginAttempt}
              >
                Sign in
              </button>
              <a class="text-blue-500 hover:text-blue-800 text-sm" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
