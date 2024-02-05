import Image from "next/image";
import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/redux/cartSlice";

interface CartItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  totalPrice: number;
  quantity: number;
}

export default function CartItem(props: CartItemProps) {
  const totalCartPrice = useSelector((state: any) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        discount: props.discount,
        image: props.image,
      })
    );
  };

  const handleRemoveFromCart = () => {
    dispatch(cartActions.removeFromCart(props.id));
  };

  return (
    <>
      <Card size={"1"} style={{ width: "100%" }}>
        <Flex
          direction={"row"}
          justify={"between"}
          align={"center"}
          className="gap-x-2"
        >
          <Image
            src={props.image}
            alt=""
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />

          <Box>
            <Text mb={"2"}>{props.name}</Text>
            <Box>
              <Text size={"4"} weight={"bold"}>
                $
                {(props.price -
                  Math.round((props.price * props.discount) / 100)) *
                  props.quantity}
              </Text>
              <Flex gap={"2"} mt={"2"}>
                <Text size={"3"} trim={"start"} color="gray">
                  $<span className="line-through">{props.price} </span>
                </Text>
                <Text size={"2"}>
                  <span className="ml-2"> - </span> {props.discount} %
                </Text>
              </Flex>
            </Box>
          </Box>

          <Flex direction={"column"} align={"center"} className="mr-4">
            <Button
              color="gray"
              variant="outline"
              className="px-2 py-1 w-8 cursor-pointer"
              onClick={handleRemoveFromCart}
            >
              -
            </Button>
            <Text className="font-semibold text-lg">{props.quantity}</Text>
            <Button
              color="gray"
              variant="outline"
              className="px-2 py-1 w-8 cursor-pointer"
              onClick={handleAddToCart}
            >
              +
            </Button>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
