import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
const SignOut = () => {
  const handleSignOut = async () => {
    await authClient.signOut();
    redirect("/");
  };
  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
