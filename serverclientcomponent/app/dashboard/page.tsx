"use client"

import { useState } from "react";

export default function dashboard() {
  const [name, setName] = useState("");
  console.log("This is a client component.")
  return (
    <>
      <input
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-fit h-auto border-black border-2 bg-white text-black"
      />
      <h2>Hi {name} !</h2>
    </>
  );
}
