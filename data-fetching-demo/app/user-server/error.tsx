"use client"
import { useEffect } from "react"
export default function errorServer({error}:{error:Error}){
    useEffect(()=>{
        console.error(`${error}`);
    },[error]);

    return (

            <div className="flex items-center justify-center h-screen">
                <div className="text-2xl text-red-500">

                        Error in fetching User data

                </div>


            </div>
        
    )
}