import Link from "next/link";
import { Button } from "@radix-ui/themes";

import SearchProduct from "./productSearchInput";
import ProductCart from "./productCart";

export default function NavigationBar() {
  return (
    <div className="shadow-xl px-2 sm:px-8 z-10">
      <div className="hidden sm:flex flex-row justify-between items-center gap-x-8 w-full max-w-[1600px] mx-auto py-4">
        <Link href={"/"}>
          <Button
            size={"3"}
            variant="soft"
            color="green"
            radius="large"
            className="cursor-pointer"
          >
            Home
          </Button>
        </Link>
        <SearchProduct />
        <ProductCart />
      </div>

      {/* for small screen */}
      <div className="sm:hidden w-full mx-auto py-4 flex flex-col gap-y-4">
        <div className="flex flex-row justify-between items-center gap-x-8">
          <Link href={"/"}>
            <Button
              size={"3"}
              variant="soft"
              color="green"
              radius="large"
              className="cursor-pointer"
            >
              Home
            </Button>
          </Link>
          <ProductCart />
        </div>
        <SearchProduct />
      </div>
    </div>
  );
}
