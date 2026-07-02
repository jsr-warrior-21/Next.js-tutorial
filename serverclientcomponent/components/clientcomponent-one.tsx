"use client"
// import { ClientComponentTwo } from "./clientcomponent-two"
import { ServerComponentOne } from "./servercomponent-one"
import { useState } from "react"
export const ClientComponentone=({children}:{children:React.ReactNode})=>{
    const [name,setName] = useState("batman")
    return (
        <>
            {/* <ClientComponentTwo/> */}
            {/* <ServerComponentOne/> */}
            {children}
            <h1>Client Component One</h1>
        </>
    )
}