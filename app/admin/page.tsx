"use client";

import Link from "next/link";
import { useState } from "react";

const orders = [
  { id: "#ORD-7821", customer: "Priya Sharma", trees: 10, species: "Mango", amount: "₹2,990", status: "Pending", date: "Mar 20" },
  { id: "#ORD-7822", customer: "Rahul Verma", trees: 25, species: "Neem", amount: "₹4,475", date: "Mar 19", status: "In Progress" },
  { id: "#ORD-7823", customer: "TechCorp CSR", trees: 500, species: "Mixed", amount: "₹1,49,500", date: "Mar 18", status: "In Progress" },
  { id: "#ORD-7824", customer: "Anita Krishnan", trees: 5, species: "Banyan", amount: "₹2,695", date: "Mar 17", status: "Completed" },
  { id: "#ORD-7825", customer: "Vikram Singh", trees: 15, species: "Peepal", amount: "₹7,185", date: "Mar 16", status: "Planted" },
  { id: "#ORD-7826", customer: "GreenFood Co.", trees: 200, species: "Fruit", amount: "₹54,800", date: "Mar 15", status: "Planted" },
];

const statusColors: Record<string, string> = {
  Pending: "bg-amber-100 text-amber-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Completed: "bg-emerald-100 text-emerald-700",
  Planted: "bg-primary/10 text-primary",
};

export default function Admin() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => setSelected((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-sand flex-shrink-0 hidden md:flex flex-col justify-between sticky top-[68px] h-[calc(100vh-68px)]">
        <div className="p-6 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">← Back to Site</Link>
          <div>
            <h1 className="heading-serif font-bold text-lg text-forest">Admin Panel</h1>
            <p className="text-xs text-earth">Plantation Management</p>
          </div>
          <nav className="flex flex-col gap-1">
            {[
              { emoji: "📊", label: "Dashboard" },
              { emoji: "📋", label: "Orders" },
              { emoji: "🌳", label: "Projects" },
              { emoji: "👥", label: "Donors" },
              { emoji: "📈", label: "Reports" },
              { emoji: "⚙️", label: "Settings" },
            ].map((item, i) => (
              <button key={i} onClick={() => setActiveNav(item.label)} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${activeNav === item.label ? "bg-primary/8 text-primary font-bold" : "text-earth hover:bg-cream hover:text-forest"}`}>
                <span>{item.emoji}</span> {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-6 border-t border-sand">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-gradient-to-br from-primary to-leaf flex items-center justify-center text-white font-bold text-sm">A</div>
            <div>
              <p className="text-sm font-bold text-forest">Admin</p>
              <p className="text-[10px] text-earth">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-8 bg-cream">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="heading-serif text-3xl font-black text-forest">Plantation Queue</h1>
            <p className="text-earth text-sm mt-1">Manage orders and track progress</p>
          </div>
          <div className="flex gap-3">
            <button className="h-10 px-5 flex items-center gap-2 rounded-full border border-sand bg-surface text-sm font-bold text-earth hover:border-primary hover:text-primary transition-colors">📥 Export</button>
            <button className="h-10 px-5 flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all">+ Add Order</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { emoji: "⏳", label: "Pending", value: "1,245" },
            { emoji: "🔄", label: "In Progress", value: "430" },
            { emoji: "✅", label: "Planted", value: "11,250" },
            { emoji: "💰", label: "Revenue", value: "₹2.2L" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-surface border border-sand shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
              <span className="text-2xl group-hover:scale-110 transition-transform">{s.emoji}</span>
              <div>
                <p className="text-[10px] font-semibold text-earth uppercase tracking-wider">{s.label}</p>
                <p className="text-xl font-black text-forest heading-serif">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        {selected.length > 0 && (
          <div className="mb-4 flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/15">
            <span className="text-sm font-bold text-primary">{selected.length} selected</span>
            <button className="ml-auto px-4 py-2 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors">Mark as Planted</button>
          </div>
        )}

        {/* Table */}
        <div className="bg-surface rounded-2xl border border-sand overflow-hidden shadow-sm">
          <div className="p-4 flex items-center justify-between border-b border-cream-dark">
            <h2 className="font-bold text-forest">Recent Orders</h2>
            <div className="flex gap-1">
              {["All", "Pending", "In Progress", "Planted"].map((f) => (
                <button key={f} className="px-3 py-1.5 rounded-full text-[11px] font-bold text-earth hover:bg-primary/5 hover:text-primary transition-colors">{f}</button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-cream border-b border-cream-dark">
                <tr>
                  <th className="px-4 py-3 w-10"><input type="checkbox" className="rounded border-sage accent-primary" /></th>
                  {["Order", "Customer", "Trees", "Species", "Amount", "Date", "Status", ""].map((h) => (
                    <th key={h} className="px-4 py-3 text-[10px] font-bold text-earth uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-dark">
                {orders.map((o) => (
                  <tr key={o.id} className="hover:bg-cream/50 transition-colors">
                    <td className="px-4 py-3"><input type="checkbox" className="rounded border-sage accent-primary" checked={selected.includes(o.id)} onChange={() => toggle(o.id)} /></td>
                    <td className="px-4 py-3 font-mono text-sm font-bold text-forest">{o.id}</td>
                    <td className="px-4 py-3 text-sm font-medium text-forest">{o.customer}</td>
                    <td className="px-4 py-3 text-sm font-bold text-forest">{o.trees}</td>
                    <td className="px-4 py-3 text-sm text-earth">{o.species}</td>
                    <td className="px-4 py-3 text-sm font-bold text-forest">{o.amount}</td>
                    <td className="px-4 py-3 text-sm text-earth">{o.date}</td>
                    <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${statusColors[o.status] || "bg-gray-100 text-gray-600"}`}>{o.status}</span></td>
                    <td className="px-4 py-3"><button className="text-earth hover:text-primary transition-colors">⋮</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-cream-dark flex items-center justify-between text-sm text-earth">
            <span>{orders.length} orders</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-full border border-sand text-[11px] font-bold hover:border-primary hover:text-primary transition-colors">← Prev</button>
              <button className="px-3 py-1.5 rounded-full bg-primary text-white text-[11px] font-bold">1</button>
              <button className="px-3 py-1.5 rounded-full border border-sand text-[11px] font-bold hover:border-primary hover:text-primary transition-colors">Next →</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
