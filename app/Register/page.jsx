"use client";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    if (formData.termsAccepted) {
      //   console.log("Form submitted with data:", formData);

      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          alert("succesful user creation");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log({ errorCode, errorMessage });
          // ..
        });
    }
  };

  return (
    <div className="w-80 rounded-2xl bg-slate-900">
      <div className="flex flex-col gap-2 p-8">
        <p className="mb-4 text-3xl text-center text-gray-300">Register</p>
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
          placeholder="Email"
          name="email"
          type="text"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
          placeholder="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
          placeholder="Confirm password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <label className="flex items-center justify-between p-1 cursor-pointer text-slate-400">
          Accept terms of use
          <div className="relative inline-block">
            <input
              className="w-12 h-6 border border-gray-300 rounded-full appearance-none cursor-pointer peer bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
            />
            <span className="absolute block w-4 h-4 transition-all duration-200 rounded-full pointer-events-none left-1 top-1 bg-slate-600 peer-checked:left-7 peer-checked:bg-green-300"></span>
          </div>
        </label>
        <button
          className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
