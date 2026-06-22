import Link from "next/link";
export default function products() {
  const productId = 100;
  return (
    <>
      <div>
        <Link href="/">go to HomePage</Link>
        <br />
        <h1>Products</h1>
        <li>Products 1</li>
        <li>Products 2</li>
        <li>Products 3</li>
        <Link href={`products/${productId}`} replace>Product {productId} Details.</Link>
      </div>
    </>
  );
}
