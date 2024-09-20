import { Layout } from "@/components/layout";
import { LoggedInButton } from "../auth/LoggedInButton";
import { ModeToggle } from "../theme/ModeToggle";

export const Header = async () => {
  return (
    <header className="px-6 py-8  border-b border-border w-full">
      <Layout className="flex items-center flex-row gap-4">
        <div className="flex-1">
          <h1 className="text-2xl tracking-widest font-semibold">
            {/* <Image src="/icon.png" width={20} height={20} alt="saas-avis-product" /> */}
            Saas Avis Product
          </h1>
        </div>

        <div className="flex items-center  gap-4">
          <ModeToggle />
          <LoggedInButton />
        </div>
      </Layout>
    </header>
  );
};
