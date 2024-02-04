"use client";

import Link from "next/link";
import { useState } from "react";
import { IconButton, TextField } from "@radix-ui/themes";
import { DotsHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SearchProduct() {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <TextField.Root className="w-full max-w-[600px]">
      <TextField.Input
        size={"3"}
        variant="soft"
        color="green"
        radius="large"
        placeholder="Search the products..."
        className="py-4"
        onChange={(e: any) => setSearchProduct(e.target.value)}
      />
      <TextField.Slot pr="3">
        <IconButton size="2" variant="ghost">
          <DotsHorizontalIcon height="16" width="16" />
        </IconButton>
      </TextField.Slot>
      <TextField.Slot>
        <Link
          href={"/search"}
          as={`/search?product_name=${searchProduct}`}
          passHref
          className={`${searchProduct.length ? "" : "search-link-disabled"}`}
        >
          <IconButton className="cursor-pointer">
            <MagnifyingGlassIcon width="18" height="18" />
          </IconButton>
        </Link>
      </TextField.Slot>
    </TextField.Root>
  );
}
