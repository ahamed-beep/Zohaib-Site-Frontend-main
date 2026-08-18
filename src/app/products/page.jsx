import { getProducts } from "@/lib/products";
import { categoryGroups, brands } from "@/lib/products";
import ProductsClient from "./ProductsClient";

// 🔥 YEH 2 LINES ZAROORI HAIN 🔥
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ProductsPage() {
  try {
    const products = await getProducts();
    return (
      <ProductsClient 
        initialProducts={products || []} 
        brands={brands} 
        categoryGroups={categoryGroups} 
      />
    );
  } catch (error) {
    console.error("Error:", error);
    return <div className="p-10 text-center text-red-500">Error loading products</div>;
  }
}