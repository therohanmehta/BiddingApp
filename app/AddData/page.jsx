"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

async function addToStore(name) {
  try {
    const docRef = await addDoc(collection(db, "biddingItem"), {
      Name: name,
      id: Math.random(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function AddData() {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const added = await addToStore(name);
  };

  return (
    <div className="flex flex-col">
      {JSON.stringify(name)}
      <input
        className="w-1/2 border-2 border-red-400 h-28 text-4xl"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button
        className="btn h-20 border-2 w-1/2 mt-4"
        onClick={handleSubmit} // Pass handleSubmit function reference to onClick
      >
        ClickAdd
      </button>
    </div>
  );
}

export default AddData;
