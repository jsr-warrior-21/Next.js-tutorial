"use client";
import serverFunction from "@/utils/server-utils";
import { useTheme } from "@/components/theme-provider";

export default function clientRoute() {
    const result = serverFunction();
    const theme = useTheme();
  return (
    <>

      <h1 style={{color:theme.colors.primary}}>Client-Route : {result}</h1>
    </>
  );
}
