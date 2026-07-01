"use client";
import serverFunction from "@/utils/server-utils";
export default function clientRoute() {
    const result = serverFunction();
  return (
    <>
      <h1>Client-Route : {result}</h1>
    </>
  );
}
