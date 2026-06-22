import Link from "next/link"
export default function home(){
  return (
    <>
    <h1>Welcome to the Home !!</h1><br />
    <Link href="/blog" className="p-3">Blog</Link>
    <Link href="/products" className="p-3">Products</Link>
    <Link href="/article">article</Link>
    </>
  )
}