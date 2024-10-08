import { LoginButton } from "@/app/AuthButtons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth } from "@/src/lib/auth";
import { LoggedInDropdown } from "./LoggedInDropdown";

export const LoggedInButton = async () => {
  const session = await auth();

  if (!session?.user) {
    return <LoginButton />;
  }

  return (
    <LoggedInDropdown>
      <Button variant="outline" size="sm">
        <Avatar className="">
          <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
          {session.user.image ? (
            <AvatarImage
              src={session.user.image}
              alt={`${session.user.name ?? "-"}'s profile pictures`}
            />
          ) : null}
        </Avatar>
      </Button>
    </LoggedInDropdown>
  );
};
