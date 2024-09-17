import { auth } from "@/src/lib/auth";
import { LoggedInButton } from "../auth/LoggedInButton";

export const Header = async () => {
  const session = await auth();
  return (
    <div className="flex  justify-center items-center  w-full gap-16 ">
      <h1 className="text-xl font-bold "> Saas Avis Product</h1>

      <LoggedInButton />
    </div>
  );
};
