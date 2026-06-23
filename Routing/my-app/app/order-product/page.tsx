"use client"

import { useRouter } from "next/navigation";
export default function programmaticallRouting(){
    const router = useRouter();
    const hadleClick = () =>{
        console.log("Your Order is Placing...");
        router.push("/"); // here you can also use redirect("/")-- by importing redirect form "next/navigation"
    }
    return(
        <>
        <h1>Place Your Order .</h1>
        <button onClick={hadleClick}>Place Order</button>
        </>
    );
}