import { supabase } from "@/lib/supabase";

export const categoryGroups = {
  "Car Audio": ["Headphones", "Chargers", "Power Banks", "Cables", "Cases", "Accessories"],
  "Home Audio": ["Smart Speakers", "Earbuds", "Home Chargers"],
};

export const brands = [
  "JBL", "Sony", "Bose", "Anker", "Sennheiser",
  "Beats", "Marshall", "Skullcandy", "Logitech", "Ultimate Ears",
];

const mapProductData = (p) => ({
  id: p.id,
  name: p.name,
  brand: p.brand,
  sku: p.sku,
  group: p.audio_type,
  category: p.category,
  description: p.description,
  price: p.price,
  priceFormatted: `PKR ${Number(p.price).toLocaleString()}`,
  stock: p.stock_quantity,
  inStock: p.stock_status === "in_stock",
  warehouse: p.warehouse,
  images: p.images?.length
    ? p.images
    : ["https://images.unsplash.com/photo-1594419015530-4676f41c4bb9?q=80&w=1200&auto=format&fit=crop"],
});

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }
  return data.map(mapProductData);
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
  return mapProductData(data);
}