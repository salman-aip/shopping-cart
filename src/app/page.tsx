import NavigationBar from "@/components/navigationMenu/navigationBar";
import ProductsList from "@/components/products/productsList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavigationBar />
      <ProductsList />
    </main>
  );
}
