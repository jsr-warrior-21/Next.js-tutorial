import Link from "next/link"

export default function product(){
    return (
        <>
            <h1>Featured Products</h1>
            <br />
            <Link href="/products/1">Product 1</Link>
            <Link href="/products/2" >Product 2</Link>
            <Link href="/products/3">Product 3</Link>
        </>
    )
}