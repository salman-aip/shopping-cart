"use client";

import { useSearchParams } from "next/navigation";
import { useSearchProducts } from "@/hooks/searchProducts";

import NavigationBar from "@/components/navigationMenu/navigationBar";
import ProductsCart from "@/components/products/productsCart";

export default function SearchProduct() {
  const searchParams = useSearchParams();
  const search = searchParams.get("product_name");
  let { data } = useSearchProducts(search);

  return (
    <main className="flex min-h-screen flex-col">
      <NavigationBar />

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
    </main>
  );
}
