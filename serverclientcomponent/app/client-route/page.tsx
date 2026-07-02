"use client";
import serverFunction from "@/utils/server-utils";
import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

export default function clientRoute() {
  const result = serverFunction();
  const theme = useTheme();
  const clientResult = clientSideFunction();
  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>Client-Route : {result}</h1>
      <p>{clientResult}</p>
    </>
  );
}
