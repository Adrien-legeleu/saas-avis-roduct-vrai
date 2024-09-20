"use client";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginButton } from "../AuthButtons";
import { Layout } from "lucide-react";

export default function RouteError() {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>
            Sorry , you need to be logged in to view this page
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <LoginButton />
        </CardFooter>
      </Card>
    </Layout>
  );
}
