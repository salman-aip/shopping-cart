import Image from "next/image";
import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";

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
  return (
    <>
      <Card size={"1"} style={{ width: "100%" }}>
        <Flex direction={"row"} className="gap-x-2">
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
                ${props.price - Math.round((props.price * props.discount) / 100)}
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
        </Flex>
      </Card>
    </>
  );
}
