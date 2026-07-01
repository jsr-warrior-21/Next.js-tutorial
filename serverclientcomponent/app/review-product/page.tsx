import { Suspense } from "react";

import { review as Review } from "@/components/review";
import { product as Product } from "@/components/product";

export default function ReviewProduct() {
  return (
    <>
      <h1>Product Review</h1>

      <Suspense fallback={<p>loading product details...</p>}>
        <Review />
      </Suspense>
      <Suspense fallback={<p>loading reviews...</p>}>
        <Product />
      </Suspense>
    </>
  );
}
