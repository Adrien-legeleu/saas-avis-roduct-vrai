import { User } from "@prisma/client";
import { auth } from "./auth";

export const currentUser = async () => {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  const user = session.user as User;

  return user;
};

export const requiredCurrentUser = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("user not found");
  }

  return user;
};
