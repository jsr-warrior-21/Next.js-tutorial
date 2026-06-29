import { cookies } from "next/headers";

export default async function about() {
  const cookieTheme = await cookies();
  const getTheme = cookieTheme.get("theme");
  console.log(getTheme);
  console.log("About server component."); // in console you will see that this is a sever componet with server tag.
  return (
    <>
      <h1>New About page for server Client component.</h1>
    </>
  );
}
