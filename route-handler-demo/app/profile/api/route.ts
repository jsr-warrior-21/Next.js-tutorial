import { type NextRequest } from "next/server";
import { headers,cookies } from "next/headers"; // both headers and cookies are async function so you must have to await

export async function GET(request: NextRequest) {
  // method 1 - extracting headers

  // const newHeaders = new Headers(request.headers);
  // console.log(newHeaders.get("Authorization"));

  // method 2 - extracting headers

  const HeaderList = await headers();
  console.log(HeaderList.get("Authorization"));


  // method 1 - handling cookies - reading cookie

  const getCookie = request.cookies.get("theme");
  console.log(getCookie);
  
 // method 2 for setting and getting cookies

   const cookieSet =  await cookies();
   cookieSet.set("resultPage","20");
   const cookieGet = cookieSet.get("resultPage");
   console.log(cookieGet);

  // return new Response("<h1>Profile Api Data</h1>"); // without content type you will get ditto same content inside the quote

  return new Response("<h1>Profile Api Data</h1>", {
    headers: {
      "content-type": "text/html",   // now you will get Profile Api Data with big text as you see in html
      "Set-Cookie":"theme=dark"
    },
  });
}
