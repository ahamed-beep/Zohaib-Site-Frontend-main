"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Mail, Phone, Trash2, CheckCircle } from "lucide-react";

export default function ContactsSection() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setContacts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this message?")) return;
    const { error } = await supabase.from("contacts").delete().eq("id", id);
    if (!error) setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleString("en-PK", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-lg font-medium">Contact Messages</h2>
        <span className="text-zinc-500 text-xs uppercase tracking-wider">
          {contacts.length} total
        </span>
      </div>

      {loading ? (
        <div className="text-zinc-400 text-sm">Loading messages...</div>
      ) : contacts.length === 0 ? (
        <div className="border border-dashed border-zinc-800 rounded-sm py-12 text-center text-zinc-500 text-sm">
          No contact messages yet.
        </div>
      ) : (
        <div className="space-y-3">
          {contacts.map((c) => (
            <div
              key={c.id}
              className="border border-zinc-800 rounded-sm p-4 bg-zinc-900/40 hover:bg-zinc-900/70 transition"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-white text-sm font-medium">
                      {c.first_name} {c.last_name}
                    </h3>
                    {c.updates_optin && (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full">
                        <CheckCircle size={10} /> Opted in
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-zinc-400 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Mail size={12} /> {c.email}
                    </span>
                    {c.phone && (
                      <span className="flex items-center gap-1">
                        <Phone size={12} /> {c.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[10px] text-zinc-500 whitespace-nowrap">
                    {formatDate(c.created_at)}
                  </span>
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="text-zinc-500 hover:text-red-400 p-1"
                    aria-label="Delete message"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              <p className="text-zinc-300 text-sm mt-3 leading-relaxed border-t border-zinc-800 pt-3">
                {c.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}