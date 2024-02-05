import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const data = await fetch("https://dummyjson.com/products").then((res) => {
        return res.json();
      });

      return data;
    },
  });
}
