"use client";

import Link from "next/link";

const contributions = [
  { project: "Green Karnataka", date: "Feb 15, 2026", qty: 25, species: "Mango, Neem", status: "Growing" },
  { project: "Reforest Aravali", date: "Jan 12, 2026", qty: 12, species: "Banyan, Pipal", status: "Growing" },
  { project: "Sundarbans Mangrove", date: "Nov 8, 2025", qty: 50, species: "Mangrove", status: "Matured" },
  { project: "Delhi NCR Urban", date: "Oct 5, 2025", qty: 18, species: "Gulmohar", status: "Growing" },
  { project: "Western Ghats", date: "Aug 22, 2025", qty: 20, species: "Teak, Sandalwood", status: "Growing" },
];

const totalTrees = contributions.reduce((s, c) => s + c.qty, 0);

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 flex-shrink-0 bg-surface border-r border-sand md:sticky md:top-[68px] md:h-[calc(100vh-68px)] overflow-y-auto">
        <div className="flex flex-col p-6 gap-6">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">← Back to Site</Link>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-cream">
            <div className="size-12 rounded-full bg-gradient-to-br from-primary to-leaf flex items-center justify-center text-white font-bold text-lg">A</div>
            <div>
              <h1 className="text-base font-bold text-forest">Alex Johnson</h1>
              <p className="text-primary text-xs font-semibold">🏅 Gold Sponsor</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            {[
              { emoji: "📊", label: "Impact Reports", active: true },
              { emoji: "📜", label: "Certificates", active: false },
              { emoji: "🌳", label: "My Trees", active: false },
              { emoji: "⚙️", label: "Settings", active: false },
            ].map((item, i) => (
              <button key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${item.active ? "bg-primary/8 text-primary font-bold" : "text-earth hover:bg-cream hover:text-forest"}`}>
                <span>{item.emoji}</span> {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-cream p-6 md:p-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="heading-serif text-3xl font-black text-forest">Your Environmental Legacy</h1>
            <p className="text-earth mt-1">Track the real-world impact of your contributions.</p>
          </div>
          <Link href="/marketplace" className="w-fit h-10 px-6 flex items-center rounded-full bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all">🌿 Plant More Trees</Link>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { emoji: "🌳", title: "Total Trees", val: totalTrees.toString(), sub: "+20 this month" },
            { emoji: "☁️", title: "CO₂ Offset", val: `${(totalTrees * 0.038).toFixed(1)}t`, sub: "Per year" },
            { emoji: "💨", title: "O₂ Generated", val: `${(totalTrees * 120).toLocaleString()}L`, sub: "Per year" },
            { emoji: "📜", title: "Certificates", val: "3", sub: "Available" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-2xl p-5 bg-surface border border-sand shadow-sm hover:shadow-md hover:border-primary/15 transition-all group hover:-translate-y-1">
              <span className="text-xl group-hover:scale-110 transition-transform">{s.emoji}</span>
              <p className="text-2xl font-black text-forest heading-serif">{s.val}</p>
              <p className="text-[10px] text-earth font-semibold uppercase tracking-wider">{s.title}</p>
              <p className="text-[10px] text-earth/60">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          <div className="lg:col-span-2 bg-surface rounded-2xl border border-sand p-6 shadow-sm">
            <h2 className="heading-serif text-lg font-bold text-forest mb-6">Monthly Activity</h2>
            <div className="flex items-end gap-2 h-40">
              {[
                { m: "Aug", h: 30 }, { m: "Sep", h: 20 }, { m: "Oct", h: 45 },
                { m: "Nov", h: 65 }, { m: "Dec", h: 25 }, { m: "Jan", h: 50 },
                { m: "Feb", h: 75 }, { m: "Mar", h: 40 },
              ].map((b, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full rounded-t-lg bg-gradient-to-t from-primary to-leaf transition-all duration-500 hover:opacity-80 cursor-pointer" style={{ height: `${b.h}%` }}></div>
                  <span className="text-[9px] text-earth font-semibold">{b.m}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface rounded-2xl border border-sand p-6 shadow-sm">
            <h2 className="heading-serif text-lg font-bold text-forest mb-6">Species Mix</h2>
            <div className="space-y-4">
              {[
                { name: "Mango", pct: 30, color: "bg-primary" },
                { name: "Neem", pct: 25, color: "bg-leaf" },
                { name: "Mangrove", pct: 20, color: "bg-accent" },
                { name: "Banyan", pct: 15, color: "bg-moss" },
                { name: "Others", pct: 10, color: "bg-sage" },
              ].map((s, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-sm"><span className="text-earth font-medium">{s.name}</span><span className="text-earth/60">{s.pct}%</span></div>
                  <div className="w-full h-2 bg-cream-dark rounded-full overflow-hidden">
                    <div className={`h-full ${s.color} rounded-full anim-progress`} style={{ width: `${s.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <h2 className="heading-serif text-lg font-bold text-forest mb-4">My Contributions</h2>
        <div className="bg-surface rounded-2xl border border-sand overflow-hidden shadow-sm mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-cream">
                <tr>
                  {["Project", "Date", "Trees", "Species", "Status"].map((h) => (
                    <th key={h} className="p-4 text-[10px] font-bold uppercase text-earth tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-dark">
                {contributions.map((c, i) => (
                  <tr key={i} className="hover:bg-cream/50 transition-colors">
                    <td className="p-4 text-sm font-semibold text-forest">{c.project}</td>
                    <td className="p-4 text-sm text-earth">{c.date}</td>
                    <td className="p-4 text-sm font-bold text-forest">{c.qty}</td>
                    <td className="p-4 text-sm text-earth">{c.species}</td>
                    <td className="p-4"><span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${c.status === "Growing" ? "bg-primary/10 text-primary" : "bg-accent/15 text-accent-dark"}`}>{c.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Certificates */}
        <h2 className="heading-serif text-lg font-bold text-forest mb-4">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { id: "CERT-001", date: "Feb 15, 2026", trees: 25, project: "Green Karnataka" },
            { id: "CERT-002", date: "Jan 12, 2026", trees: 12, project: "Reforest Aravali" },
            { id: "CERT-003", date: "Nov 8, 2025", trees: 50, project: "Sundarbans" },
          ].map((cert, i) => (
            <div key={i} className="bg-surface rounded-2xl border border-sand p-5 shadow-sm hover:shadow-lg hover:border-accent/20 transition-all group hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="text-sm font-bold text-forest">{cert.id}</p>
                  <p className="text-[10px] text-earth">{cert.date}</p>
                </div>
              </div>
              <p className="text-sm text-earth mb-3">{cert.trees} trees — {cert.project}</p>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-sand text-sm font-bold text-earth hover:border-primary hover:text-primary transition-colors">
                📥 Download
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
