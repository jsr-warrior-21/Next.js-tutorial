import React from "react";

export default function productLayout({children}:{children:React.ReactNode}){
    return (
        <>
        {children}
        <h1>Feature Of Product (from nested Layout)</h1>
        </>
    )
}