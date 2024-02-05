import Image from "next/image";
import { Badge, Box, Button, Card, Flex, Inset, Text } from "@radix-ui/themes";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";

import { cartActions } from "@/redux/cartSlice";

interface ProductsProps {
  id: number;
  title: string;
  stock: number;
  price: number;
  discount: number;
  rating: number;
  image: string;
}

export default function ProductsCart(props: ProductsProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        name: props.title,
        price: props.price,
        discount: props.discount,
        image: props.image,
      }),
    );
  };

  return (
    <Card size={"1"} style={{ width: "100%", maxWidth: "300px" }}>
      <Inset clip="padding-box" side="top" pb="current" className="h-[200px] relative">
        <Image
          src={props.image}
          alt=""
          fill={true}
          sizes="auto"
          className="object-cover"
          priority={true}
        />
      </Inset>

      <Flex direction={"row"} justify={"between"} align={"center"} mt={"1"}>
        {props.stock > 0 ? (
          <Badge color="green">In Stock</Badge>
        ) : (
          <Badge color="orange">Out of Stock</Badge>
        )}
        <Rating
          name="half-rating"
          size="small"
          defaultValue={props.rating}
          precision={0.5}
          readOnly
        />
      </Flex>
      <Text>{props.title}</Text>
      <Box>
        <Text size={"4"} weight={"medium"}>
          ${props.price - Math.round((props.price * props.discount) / 100)}
        </Text>
        <Flex gap={"2"} mt={"2"}>
          <Text size={"3"} trim={"start"} color="gray">
            $<span className="line-through">{props.price}</span>
          </Text>
          <Text size={"2"} className="font-medium" trim={"start"}>
            - {props.discount} %
          </Text>
        </Flex>
      </Box>

      <Button
        size={"3"}
        variant="solid"
        className="w-full cursor-pointer"
        onClick={handleAddToCart}
      >
        Add to cart
      </Button>
    </Card>
  );
}
