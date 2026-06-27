import React from "react";

export default function productLayout({children}:{children:React.ReactNode}){
    return (
        <>
        <header className="text-green-300 h-auto w-auto">
                I am nested Layout.
        </header>
        {children}
        <h1>Feature Of Product (from nested Layout)</h1>
        </>
    )
}