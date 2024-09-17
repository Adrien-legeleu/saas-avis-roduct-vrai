import { auth } from "@/src/lib/auth";
import Image from "next/image";
import { LoginButton, LogoutButton } from "./AuthButtons";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      {/* <h1>
        {session?.user
          ? "Authentificated " + session?.user.email
          : "Not Authentificated"}
      </h1>
      <div>{!session?.user ? <LoginButton /> : <LogoutButton />}</div> */}
      <h1>bievenue</h1>
    </div>
  );
}
