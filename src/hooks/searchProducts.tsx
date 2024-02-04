import { useQuery } from "@tanstack/react-query";

export function useSearchProducts(search: any) {
  return useQuery({
    queryKey: ["searchProducts"],
    queryFn: async () => {
      const data = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      ).then((res) => {
        return res.json();
      });

      return data;
    },
  });
}
