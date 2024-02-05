import { useSelector } from "react-redux";
import { Drawer } from "@mui/material";
import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";

import CartItem from "./cartItem";
import Link from "next/link";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: any;
}

export default function CartDrawer(props: DrawerProps) {
  const cartItems = useSelector((state: any) => state.cart.itemsList);

  return (
    <>
      <Drawer
        open={props.isOpen}
        onClose={() => props.setIsOpen(!props.isOpen)}
        anchor="right"
        variant="temporary"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: 350,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 350,
            boxSizing: "border-box",
          },
        }}
        className="relative"
      >
        <Flex justify={"between"} align={"center"} className="px-2 py-4">
          <Heading>Shopping Cart</Heading>
          <Button
            variant="solid"
            className="cursor-pointer"
            color="orange"
            onClick={() => props.setIsOpen(!props.isOpen)}
          >
            <Cross2Icon />
          </Button>
        </Flex>

        {cartItems.map((item: any) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              discount={item.discount}
              totalPrice={item.totalPrice}
              quantity={item.quantity}
            />
          );
        })}

        <Button className="absolute bottom-0 bg-teal-600 text-white w-full py-3 cursor-pointer">
          <Link href={"/checkout"}>Checkout</Link>
        </Button>
      </Drawer>
    </>
  );
}
