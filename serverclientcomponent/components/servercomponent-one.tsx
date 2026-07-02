import fs from "fs";
import path from "path";
// import { ServerComponentTwo } from "./servercomponent-two";
import { ClientComponentone } from "./clientcomponent-one";

export const ServerComponentOne = () => {
  const filePath = path.join(process.cwd(), "components/servercomponent-one.tsx");
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <>
      {/* <ServerComponentTwo /> */}
      <ClientComponentone/>
      <h1>Server Component One</h1>
    </>
  );
};