import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// first method of handling auto redirection

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher:"/profile",
// };


// second conditional method for handling redirection

// export function middleware(request:NextRequest){
//   if(request.nextUrl.pathname==="/profile"){
//     // return NextResponse.redirect(new URL("/hello",request.nextUrl));
//         return NextResponse.rewrite(new URL("/hello",request.nextUrl)); // if you want that url shouldn't be change but content should be shown of that target url use rewrite intead of redirect

//   }
// }


// Handling cookie via middleware

export function middleware(request:NextRequest){
  const response = NextResponse.next();
  const themePreference = response.cookies.get("theme");
  if(!themePreference){
    response.cookies.set("theme","dark");
  }

  response.headers.set("custom-header","custom-value");
  return response;
}