"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GRADIENTS, ProductSchema, ProductType } from "./product.schema";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  useZodForm,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type ProductFormProps = {
  defaultValues?: ProductType;
};

export const ProductForm = (props: ProductFormProps) => {
  const form = useZodForm({
    schema: ProductSchema,
    defaultValues: props.defaultValues,
  });
  const isCreate = !Boolean(props.defaultValues);
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isCreate
            ? "create product"
            : `Edit product ${props.defaultValues.name}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          form={form}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="S24 samsung" {...field} />
                </FormControl>
                <FormDescription>
                  The name of the product to rview
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Color</FormLabel>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {GRADIENTS.map((gradient: any) => (
                      <SelectItem value={gradient} key={gradient}>
                        <span
                          className={cn(gradient, "w-full h-8 rounded-md")}
                        ></span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </FormControl>
                <FormDescription>
                  The review page background color
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>
      </CardContent>
    </Card>
  );
};
