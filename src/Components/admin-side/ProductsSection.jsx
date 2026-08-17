"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Plus, Pencil, Trash2, X, Upload } from "lucide-react";

const categoryGroups = {
  "Car Audio": ["Headphones", "Chargers", "Power Banks", "Cables", "Cases", "Accessories"],
  "Home Audio": ["Smart Speakers", "Earbuds", "Home Chargers"],
};

const emptyForm = {
  name: "",
  brand: "",
  sku: "",
  audio_type: "Car Audio",
  category: "Headphones",
  description: "",
  price: "",
  stock_quantity: "",
  stock_status: "in_stock",
  warehouse: "",
  images: [],
};

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    setUploading(true);
    setError("");

    try {
      const uploadedUrls = [];
      for (const file of files) {
        const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
        const { error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("product-images")
          .getPublicUrl(fileName);

        uploadedUrls.push(urlData.publicUrl);
      }
      setForm((p) => ({ ...p, images: [...p.images, ...uploadedUrls] }));
    } catch (err) {
      setError(err.message || "Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (url) => {
    setForm((p) => ({ ...p, images: p.images.filter((img) => img !== url) }));
  };

  const openAddForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
    setError("");
  };

  const openEditForm = (product) => {
    setForm({
      name: product.name,
      brand: product.brand,
      sku: product.sku,
      audio_type: product.audio_type,
      category: product.category,
      description: product.description || "",
      price: product.price,
      stock_quantity: product.stock_quantity,
      stock_status: product.stock_status,
      warehouse: product.warehouse || "",
      images: product.images || [],
    });
    setEditingId(product.id);
    setShowForm(true);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.brand || !form.sku || !form.price) {
      setError("Please fill in all required fields.");
      return;
    }
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      price: Number(form.price),
      stock_quantity: Number(form.stock_quantity) || 0,
      updated_at: new Date().toISOString(),
    };

    let result;
    if (editingId) {
      result = await supabase.from("products").update(payload).eq("id", editingId);
    } else {
      result = await supabase.from("products").insert([payload]);
    }

    setSaving(false);

    if (result.error) {
      setError(result.error.message);
      return;
    }

    setShowForm(false);
    fetchProducts();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this product?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (!error) fetchProducts();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-lg font-medium">Products</h2>
        <button
          onClick={openAddForm}
          className="flex items-center gap-2 bg-white text-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-zinc-100 transition"
        >
          <Plus size={14} /> Add Product
        </button>
      </div>

      {loading ? (
        <div className="text-zinc-400 text-sm">Loading products...</div>
      ) : (
        <div className="overflow-x-auto border border-zinc-800 rounded-sm">
          <table className="w-full text-sm text-left text-zinc-300">
            <thead className="bg-zinc-900 text-zinc-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Brand</th>
                <th className="px-4 py-3">SKU</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t border-zinc-800 hover:bg-zinc-900/50">
                  <td className="px-4 py-3">
                    {p.images?.[0] ? (
                      <img src={p.images[0]} alt={p.name} className="w-12 h-12 object-cover rounded-sm" />
                    ) : (
                      <div className="w-12 h-12 bg-zinc-800 rounded-sm" />
                    )}
                  </td>
                  <td className="px-4 py-3">{p.name}</td>
                  <td className="px-4 py-3">{p.brand}</td>
                  <td className="px-4 py-3 font-mono text-xs">{p.sku}</td>
                  <td className="px-4 py-3">PKR {Number(p.price).toLocaleString()}</td>
                  <td className="px-4 py-3">{p.stock_quantity}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-[10px] px-2 py-1 rounded-full uppercase font-medium ${
                        p.stock_status === "in_stock"
                          ? "bg-emerald-950 text-emerald-400"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {p.stock_status === "in_stock" ? "In Stock" : "Out of Stock"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => openEditForm(p)} className="text-zinc-400 hover:text-white p-1.5">
                        <Pencil size={14} />
                      </button>
                      <button onClick={() => handleDelete(p.id)} className="text-zinc-400 hover:text-red-400 p-1.5">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-zinc-500">
                    No products yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-medium">
                {editingId ? "Edit Product" : "Add Product"}
              </h3>
              <button onClick={() => setShowForm(false)} className="text-zinc-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            {error && (
              <div className="mb-4 px-3 py-2 bg-red-950/40 border border-red-900/50 text-red-400 text-xs rounded-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Product Name *"
                  className="bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm outline-none focus:border-white/30"
                />
                <input
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  placeholder="Brand *"
                  className="bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm outline-none focus:border-white/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="sku"
                  value={form.sku}
                  onChange={handleChange}
                  placeholder="SKU *"
                  className="bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm outline-none focus:border-white/30"
                />
                <input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Price (PKR) *"
                  className="bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm outline-none focus:border-white/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select
                  name="audio_type"
                  value={form.audio_type}
                  onChange={handleChange}
                  className="bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm outline-none focus:border-white/30"
                >
                  {Object.keys(categoryGroups).map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm outline-none focus:border-white/30"
                >
                  {(categoryGroups[form.audio_type] || []).map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="stock_quantity"
                  type="number"
                  value={form.stock_quantity}
                  onChange={handleChange}
                  placeholder="Stock Quantity"
                  className="bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm outline-none focus:border-white/30"
                />
                <select
                  name="stock_status"
                  value={form.stock_status}
                  onChange={handleChange}
                  className="bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm outline-none focus:border-white/30"
                >
                  <option value="in_stock">In Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>
              </div>

              <input
                name="warehouse"
                value={form.warehouse}
                onChange={handleChange}
                placeholder="Warehouse"
                className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm outline-none focus:border-white/30"
              />

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
                rows={3}
                className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm outline-none focus:border-white/30 resize-none"
              />

              <div>
                <label className="flex items-center gap-2 text-xs text-zinc-400 mb-2 cursor-pointer w-fit">
                  <Upload size={14} />
                  {uploading ? "Uploading..." : "Upload Images"}
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    disabled={uploading}
                    className="hidden"
                  />
                </label>
                {form.images.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {form.images.map((url) => (
                      <div key={url} className="relative">
                        <img src={url} alt="" className="w-16 h-16 object-cover rounded-sm border border-zinc-700" />
                        <button
                          type="button"
                          onClick={() => removeImage(url)}
                          className="absolute -top-1.5 -right-1.5 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-xs uppercase tracking-wider text-zinc-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving || uploading}
                  className="px-5 py-2 bg-white text-zinc-900 text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-zinc-100 disabled:opacity-50"
                >
                  {saving ? "Saving..." : editingId ? "Update Product" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}