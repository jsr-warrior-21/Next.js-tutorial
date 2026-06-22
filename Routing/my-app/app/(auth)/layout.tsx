"use client"

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "../globals.css"
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
  return (
    <div>
      {navLinks.map((links) => {
        const isActive = pathname==links.href || (pathname.startsWith(links.href) && links.href!=="/");
        return (
          <Link className={isActive?"font-bold mr-4":"text-blue-500 mr-4"} href={links.href} key={links.name}>
            {links.name}
          </Link>
        );
      })}

      {children}
    </div>
  );
}
