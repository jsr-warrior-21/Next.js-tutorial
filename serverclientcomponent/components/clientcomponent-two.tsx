"use client"
import { useState } from "react"
export const ClientComponentTwo=()=>{
    const [name,setName] = useState("batman")
    return (
        <>
            <h1>Client Component One</h1>
        </>
    )
}