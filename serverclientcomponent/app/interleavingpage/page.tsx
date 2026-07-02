import { ServerComponentOne } from "@/components/servercomponent-one";
import { ClientComponentone } from "@/components/clientcomponent-one";
export default function InterLeavingPage() {
  return (
    <div>
        <ClientComponentone>
            <ServerComponentOne/>
        </ClientComponentone>
      <h1>InterLeaving Page</h1>
    </div>
  );
}
