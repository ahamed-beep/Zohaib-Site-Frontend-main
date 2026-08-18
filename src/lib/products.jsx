

// ============================================================
// FILE 3: src/lib/products.js
// ============================================================

import { supabase } from "./supabase";

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
  name: p.name || "Unnamed Product",
  brand: p.brand || "Unknown Brand",
  sku: p.sku || "N/A",
  group: p.audio_type || "Car Audio",
  category: p.category || "Accessories",
  description: p.description || "No description available",
  price: p.price || 0,
  priceFormatted: `PKR ${Number(p.price || 0).toLocaleString()}`,
  stock: p.stock_quantity || 0,
  inStock: p.stock_status === "in_stock",
  warehouse: p.warehouse || "Main-Warehouse-A",
  images: p.images?.length
    ? p.images
    : ["https://images.unsplash.com/photo-1594419015530-4676f41c4bb9?q=80&w=1200&auto=format&fit=crop"],
});

export async function getProducts() {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return [];
    }

    if (!data || data.length === 0) {
      return [];
    }

    return data.map(mapProductData);
  } catch (error) {
    console.error("getProducts error:", error);
    return [];
  }
}

export async function getProduct(id) {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching product:", error);
      return null;
    }

    return mapProductData(data);
  } catch (error) {
    console.error("getProduct error:", error);
    return null;
  }
}