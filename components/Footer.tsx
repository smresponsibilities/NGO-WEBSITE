"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-forest text-white/80 relative overflow-hidden">
      {/* CTA Strip */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative -mt-0 mb-0 md:-mt-0 lg:-mt-0">
          <div className="rounded-t-2xl bg-gradient-to-r from-accent-dark via-accent to-accent-light p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-accent/20">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="heading-serif text-2xl md:text-3xl font-bold text-white">
                Ready to plant your first tree?
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                Every tree creates oxygen for one person for a full year.
              </p>
            </div>
            <Link
              href="/marketplace"
              className="flex-shrink-0 h-12 px-8 flex items-center justify-center rounded-full bg-white text-accent-dark text-base font-bold hover:bg-cream transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              🌿 Start Planting — ₹299
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative leaf pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M100 10C100 10 30 50 30 120C30 158.66 61.34 190 100 190C138.66 190 170 158.66 170 120C170 50 100 10 100 10Z" fill="white"/>
        </svg>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C16 2 6 8 6 18C6 23.5228 10.4772 28 16 28C21.5228 28 26 23.5228 26 18C26 8 16 2 16 2Z" fill="#34d399" opacity="0.9"/>
                <path d="M16 8C16 8 11 13 11 19C11 21.7614 13.2386 24 16 24C18.7614 24 21 21.7614 21 19C21 13 16 8 16 8Z" fill="#d4a843" opacity="0.6"/>
                <path d="M16 28V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
              </svg>
              <div>
                <h2 className="heading-serif text-lg font-bold text-white">Renukiran</h2>
                <p className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-semibold">Foundation</p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Dedicated to restoring India&apos;s green cover, one tree at a time. 1.2M+ trees planted across 150+ locations.
            </p>
            <div className="flex gap-2 mt-1">
              {[
                { label: "Instagram", path: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2C22,19.4 19.4,22 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8C2,4.6 4.6,2 7.8,2M7.6,4C5.61,4 4,5.61 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4C18.39,20 20,18.39 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5C17.94,5.5 18.5,6.06 18.5,6.75C18.5,7.44 17.94,8 17.25,8C16.56,8 16,7.44 16,6.75C16,6.06 16.56,5.5 17.25,5.5M12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9Z" },
                { label: "Twitter", path: "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10V10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.19,14.41 4.53,14.46 3.89,14.36C4.43,16.06 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" },
                { label: "LinkedIn", path: "M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19M18.5,18.5V13.2C18.5,11.36 17.29,10.35 15.78,10.35C14.84,10.35 14.06,10.88 13.75,11.55V10.5H11.5V18.5H13.75V13.5C13.75,12.67 14.42,12 15.25,12C15.79,12 16.25,12.46 16.25,13V18.5H18.5M6.5,8.31C7.25,8.31 7.81,7.75 7.81,7C7.81,6.25 7.25,5.69 6.5,5.69C5.75,5.69 5.19,6.25 5.19,7C5.19,7.75 5.75,8.31 6.5,8.31M7.63,18.5V10.5H5.38V18.5H7.63Z" },
                { label: "YouTube", path: "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-10 flex items-center justify-center rounded-xl bg-white/5 text-white/40 hover:bg-primary/20 hover:text-leaf transition-all duration-300"
                  aria-label={s.label}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={s.path}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-5">Explore</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/50">
              <li><Link className="hover:text-leaf transition-colors" href="/mission">About Us</Link></li>
              <li><Link className="hover:text-leaf transition-colors" href="/tracking">Our Projects</Link></li>
              <li><Link className="hover:text-leaf transition-colors" href="/csr">CSR Partnerships</Link></li>
              <li><Link className="hover:text-leaf transition-colors" href="/marketplace">Gift a Tree</Link></li>
              <li><Link className="hover:text-leaf transition-colors" href="/dashboard">My Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-5">Resources</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/50">
              <li><a className="hover:text-leaf transition-colors" href="#">How It Works</a></li>
              <li><a className="hover:text-leaf transition-colors" href="#">FAQs</a></li>
              <li><a className="hover:text-leaf transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-leaf transition-colors" href="#">Contact Us</a></li>
              <li><a className="hover:text-leaf transition-colors" href="#">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-5">Stay Updated</h3>
            <p className="text-sm text-white/40 mb-4">Get updates on our plantations and environmental impact stories.</p>
            <div className="flex flex-col gap-3">
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 focus:border-leaf focus:ring-1 focus:ring-leaf/30 focus:outline-none transition-all"
                placeholder="your@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className={`w-full rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                  subscribed
                    ? "bg-leaf/20 text-leaf border border-leaf/30"
                    : "bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-lg hover:shadow-primary/25"
                }`}
                type="button"
                onClick={handleSubscribe}
              >
                {subscribed ? "✓ Subscribed!" : "Subscribe →"}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">© 2026 Renukiran Welfare Foundation. All rights reserved. Section 80G registered.</p>
          <div className="flex gap-6 text-xs text-white/30">
            <a className="hover:text-leaf transition-colors" href="#">Privacy</a>
            <a className="hover:text-leaf transition-colors" href="#">Terms</a>
            <a className="hover:text-leaf transition-colors" href="#">Refund</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
