import {notFound} from "next/navigation";
// This is a Next.js special function that:

// Stops execution immediately
// Tells Next.js to show not-found.tsx
// Works like throwing an error internally

function getRandomInt(count:number){
    return Math.floor(Math.random() * count);
}

export default async function({params}:{params:Promise<{productId:string,reviewId:string}>}){
    const {reviewId,productId} = (await params);
    const random = getRandomInt(2);
    if(random===1){
        throw new Error("Review Id error")
    }
    if(parseInt(reviewId)>1000){
        notFound(); 
    }
    return <h1>Review of {productId} Products {reviewId}</h1>
} 