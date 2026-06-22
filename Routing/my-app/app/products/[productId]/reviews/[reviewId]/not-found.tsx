"use client"

import { usePathname } from "next/navigation";

export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];
    return (
        <div>
            <h1>Review for {reviewId} not Found of the Product {productId}</h1>
        </div>
    );
}