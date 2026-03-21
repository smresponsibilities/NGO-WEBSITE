"use client";

import { useState } from "react";

const projects = [
  { id: 1, name: "Aravalli Reforestation 2026", location: "Rajasthan", trees: 15000, planted: 11250, species: ["Neem", "Banyan", "Pipal"], status: "Active", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80", startDate: "Jan 2026" },
  { id: 2, name: "Western Ghats Restoration", location: "Karnataka", trees: 25000, planted: 22500, species: ["Teak", "Sandalwood"], status: "Active", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80", startDate: "Sep 2025" },
  { id: 3, name: "Sundarbans Mangrove Drive", location: "West Bengal", trees: 10000, planted: 10000, species: ["Mangrove", "Sundari"], status: "Completed", img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80", startDate: "Mar 2025" },
  { id: 4, name: "Delhi NCR Urban Forest", location: "Delhi", trees: 5000, planted: 2100, species: ["Gulmohar", "Neem"], status: "Active", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80", startDate: "Feb 2026" },
];

const timeline = [
  { date: "Mar 2026", event: "Delhi NCR Miyawaki Forest — 500 trees planted", emoji: "🌱" },
  { date: "Feb 2026", event: "EcoBank joins as CSR partner — 25,000 trees committed", emoji: "🤝" },
  { date: "Jan 2026", event: "Aravalli project crosses 10,000 trees milestone", emoji: "🏆" },
  { date: "Dec 2025", event: "Sundarbans Mangrove project completed!", emoji: "✅" },
  { date: "Nov 2025", event: "92% survival rate across all projects — quarterly report", emoji: "📊" },
];

export default function Tracking() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.status.toLowerCase() === filter);
  const totalPlanned = projects.reduce((s, p) => s + p.trees, 0);
  const totalPlanted = projects.reduce((s, p) => s + p.planted, 0);

  return (
    <main className="flex-1 w-full max-w-[1400px] mx-auto px-5 lg:px-10 py-8 space-y-10">
      <section>
        <h1 className="heading-serif text-3xl md:text-4xl font-black text-forest">Our Impact</h1>
        <p className="text-earth mt-1">Track plantation projects in real-time with GPS coordinates and progress updates.</p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { emoji: "🎯", label: "Trees Planned", value: totalPlanned.toLocaleString() },
          { emoji: "🌳", label: "Trees Planted", value: totalPlanted.toLocaleString() },
          { emoji: "📈", label: "Survival Rate", value: "92%" },
          { emoji: "📍", label: "Active Zones", value: projects.filter(p => p.status === "Active").length.toString() },
        ].map((s, i) => (
          <div key={i} className="flex flex-col gap-2 p-5 rounded-2xl bg-surface border border-sand shadow-sm hover:shadow-md hover:border-primary/15 transition-all group hover:-translate-y-1">
            <span className="text-xl group-hover:scale-110 transition-transform">{s.emoji}</span>
            <p className="text-2xl font-black text-forest heading-serif">{s.value}</p>
            <p className="text-[10px] text-earth font-semibold uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Map */}
      <section>
        <h2 className="heading-serif text-2xl font-bold text-forest mb-4">Impact Map</h2>
        <div className="relative h-[350px] rounded-3xl overflow-hidden bg-forest shadow-xl">
          <div className="absolute inset-0 dot-pattern opacity-[0.06]"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl mb-3 opacity-30">🗺️</span>
            <p className="text-white/40 font-bold">Interactive Map — {projects.length} plantation zones</p>
          </div>
          <div className="absolute top-[30%] left-[35%] w-3 h-3 bg-leaf rounded-full anim-pulse-dot"></div>
          <div className="absolute top-[55%] left-[42%] w-3 h-3 bg-accent rounded-full anim-pulse-dot delay-200"></div>
          <div className="absolute top-[40%] left-[60%] w-3 h-3 bg-leaf rounded-full anim-pulse-dot delay-400"></div>
          <div className="absolute top-[25%] left-[52%] w-3 h-3 bg-accent rounded-full anim-pulse-dot delay-300"></div>
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="heading-serif text-2xl font-bold text-forest">Projects</h2>
          <div className="flex gap-2">
            {["all", "active", "completed"].map((s) => (
              <button key={s} onClick={() => setFilter(s)} className={`px-4 py-2 rounded-full text-sm font-bold capitalize transition-all ${filter === s ? "bg-primary text-white" : "bg-surface text-earth border border-sand hover:border-primary/20"}`}>{s}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filtered.map((p) => (
            <article key={p.id} className={`bg-surface rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer hover:-translate-y-1 ${selectedId === p.id ? "border-primary shadow-xl" : "border-sand hover:shadow-lg hover:border-primary/15"}`} onClick={() => setSelectedId(selectedId === p.id ? null : p.id)}>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-48 h-40 md:h-auto shrink-0 bg-cover bg-center" style={{backgroundImage: `url("${p.img}")`}}></div>
                <div className="flex-1 p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-forest">{p.name}</h3>
                      <p className="text-sm text-earth mt-0.5">📍 {p.location}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${p.status === "Active" ? "bg-primary/10 text-primary" : "bg-accent/15 text-accent-dark"}`}>{p.status}</span>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-earth">{p.planted.toLocaleString()} / {p.trees.toLocaleString()}</span>
                      <span className="font-bold text-primary">{Math.round((p.planted / p.trees) * 100)}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-cream-dark rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-leaf rounded-full anim-progress" style={{ width: `${(p.planted / p.trees) * 100}%` }}></div>
                    </div>
                  </div>
                  {selectedId === p.id && (
                    <div className="mt-4 pt-4 border-t border-cream-dark space-y-3 anim-fade-in">
                      <p className="text-earth text-xs uppercase font-semibold">Started: {p.startDate}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.species.map((s) => (<span key={s} className="text-xs bg-primary/8 text-primary px-2.5 py-1 rounded-full font-semibold">{s}</span>))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-6">
        <h2 className="heading-serif text-2xl font-bold text-forest">Timeline</h2>
        <div className="space-y-3">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-4 items-start group">
              <div className="flex flex-col items-center">
                <span className="text-2xl">{item.emoji}</span>
                {i < timeline.length - 1 && <div className="w-0.5 h-8 bg-sand mt-1"></div>}
              </div>
              <div className="pb-2">
                <p className="text-[10px] font-bold text-earth uppercase tracking-wider">{item.date}</p>
                <p className="text-sm font-medium text-forest mt-0.5 group-hover:text-primary transition-colors">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
