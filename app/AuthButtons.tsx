"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";

export const LoginButton = () => {
  return (
    <Button onClick={() => signIn()}>
      {" "}
      <LogIn className="mr-2" size={16} /> Login
    </Button>
  );
};
export const LogoutButton = () => {
  return (
    <Button onClick={() => signOut()}>
      <LogOut className="mr-2" size={16} />
      Logout
    </Button>
  );
};
