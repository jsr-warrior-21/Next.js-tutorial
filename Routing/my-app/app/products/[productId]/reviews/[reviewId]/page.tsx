import {notFound} from "next/navigation";
// This is a Next.js special function that:

// Stops execution immediately
// Tells Next.js to show not-found.tsx
// Works like throwing an error internally

export default async function({params}:{params:Promise<{productId:string,reviewId:string}>}){
    const {reviewId,productId} = (await params);
    if(parseInt(reviewId)>1000){
        notFound(); 
    }
    return <h1>Review of {productId} Products {reviewId}</h1>
} 