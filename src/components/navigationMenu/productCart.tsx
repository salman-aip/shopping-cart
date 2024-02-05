"use client";

import { useState } from "react";
import { Button, Text } from "@radix-ui/themes";
import { BackpackIcon } from "@radix-ui/react-icons";

import CartDrawer from "../cart/cartDrawer";
import { useSelector } from "react-redux";

export default function ProductCart() {
  const totalItems = useSelector((state: any) => state.cart.totalQuantity);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size={"3"}
        variant="soft"
        color="green"
        radius="large"
        className="cursor-pointer relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {totalItems > 0 && (
          <Text className="absolute -top-[15px] right-0 text-2xl" color="sky">
            {totalItems}
          </Text>
        )}
        <BackpackIcon />
      </Button>

      {isOpen && <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
