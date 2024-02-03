import { Button } from "@radix-ui/themes";
import { BackpackIcon } from "@radix-ui/react-icons";

export default function ProductCart() {
  return (
    <Button
      size={"3"}
      variant="soft"
      color="green"
      radius="large"
      className="cursor-pointer"
    >
      <BackpackIcon />
    </Button>
  );
}
