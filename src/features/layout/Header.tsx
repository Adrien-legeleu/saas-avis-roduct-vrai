import { LoggedInButton } from "../auth/LoggedInButton";
import { ModeToggle } from "../theme/ModeToggle";

export const Header = async () => {
  return (
    <div className="flex h-12  justify-between items-center px-6 py-8  border-b border-border ">
      <h1 className="text-2xl tracking-widest font-semibold">
        {/* <Image src="/icon.png" width={20} height={20} alt="saas-avis-product" /> */}
        Saas Avis Product
      </h1>

      <div className="flex items-center  gap-4">
        <ModeToggle />
        <LoggedInButton />
      </div>
    </div>
  );
};
