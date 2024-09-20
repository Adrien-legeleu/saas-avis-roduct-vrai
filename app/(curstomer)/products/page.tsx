import { Layout, LayoutTitle } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { requiredCurrentUser } from "@/src/lib/current-user";
import { prisma } from "@/src/lib/prisma";
import { PageParams } from "@/src/types/next";
import Link from "next/link";

export default async function RoutePage(props: PageParams<{}>) {
  const user = await requiredCurrentUser();

  const products = await prisma.product.findMany({
    where: {
      userId: user.id,
    },
  });

  return (
    <Layout>
      <LayoutTitle>Products</LayoutTitle>
      <Card className="p-4">
        {products.length ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>Test produits</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Link
            href="/products/new"
            className="border-[2px] block transition-colors hover:bg-accent/40 border-dashed border-primary w-full rounded-md  p-8 lg:p-12"
          >
            Create product
          </Link>
        )}
      </Card>
    </Layout>
  );
}
