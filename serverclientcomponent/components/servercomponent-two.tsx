import fs from "fs";
import path from "path";

export const ServerComponentTwo = () => {
  const filePath = path.join(
    process.cwd(),
    "components/servercomponent-two.tsx",
  );
  const content = fs.readFileSync(filePath, "utf-8");
  return (
    <>
      <h1>Server Component Two</h1>
    </>
  );
};
