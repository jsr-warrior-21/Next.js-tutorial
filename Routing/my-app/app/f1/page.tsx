import Link from "next/link";
export default function f2() {
  return (
    <>
      <h1>F1 page</h1>
      <br />
      <div>
            <Link href={"/f1/f2"}>Page F2</Link>
      </div>
    </>
  );
}
