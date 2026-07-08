import { UserProfile } from "@clerk/nextjs";

export default function userProfilePage() {
  return (
    <div className="flex justify-center items-center py-8">
      <UserProfile path="/user-profile" />
    </div>
  );
}
