import Link from "next/link";
export default async function article({
  params,
  searchParams,
}: {
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" }>;
}) {
  const { articlesId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <>
      <div>
        <h1>News Article {articlesId}</h1>
        <p>Reading in {lang}</p>
      </div>
      <div>
        <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
        <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
      </div>
    </>
  );
}
