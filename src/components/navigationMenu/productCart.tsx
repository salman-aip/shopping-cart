"use client";

import { useState } from "react";

import { Button } from "@radix-ui/themes";
import { BackpackIcon } from "@radix-ui/react-icons";
import CartDrawer from "../cart/cartDrawer";

export default function ProductCart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size={"3"}
        variant="soft"
        color="green"
        radius="large"
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BackpackIcon />
      </Button>

      {isOpen && <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
