"use client";

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
        <IconButton className="cursor-pointer">
          <MagnifyingGlassIcon width="18" height="18" />
        </IconButton>
      </TextField.Slot>
    </TextField.Root>
  );
}
