"use client";

import { useProducts } from "@/hooks/getAllProducts";
import ProductsCart from "./productsCart";

export default function ProductsList() {
  const { data } = useProducts();

  return (
    <div className="w-full max-w-[1600px] mx-auto py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center justify-items-center items-center gap-x-4 gap-y-8 px-4">
        {data?.products.map((product: any) => {
          return (
            <ProductsCart
              key={product.id}
              id={product.id}
              title={product.title}
              stock={product.stock}
              price={product.price}
              discount={product.discountPercentage}
              rating={product.rating}
              image={product.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}
