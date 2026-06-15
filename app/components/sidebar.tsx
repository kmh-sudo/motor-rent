"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Dashboard", icon: "D" },
  { href: "/moter-management", label: "Moter Management", icon: "M" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="z-40 border-white/10 bg-slate-950/95 text-white shadow-2xl shadow-slate-950/20 backdrop-blur md:fixed md:inset-y-0 md:left-0 md:flex md:w-72 md:flex-col md:border-r">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 md:px-6 md:py-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-400 via-blue-500 to-cyan-400 text-lg font-black shadow-lg shadow-blue-500/30">
            MR
          </span>
          <span>
            <span className="block text-base font-bold tracking-tight">Moter Rent</span>
            <span className="block text-xs font-medium text-slate-400">Admin Dashboard</span>
          </span>
        </Link>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 md:hidden">
          Live
        </span>
      </div>

      <nav className="flex gap-2 overflow-x-auto px-4 py-3 md:flex-1 md:flex-col md:gap-2 md:overflow-visible md:px-4 md:py-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex min-w-max items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-white text-slate-950 shadow-xl shadow-white/10"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span
                className={`grid h-8 w-8 place-items-center rounded-xl text-xs font-bold transition-colors ${
                  isActive
                    ? "bg-slate-950 text-white"
                    : "bg-white/10 text-slate-300 group-hover:bg-white/15 group-hover:text-white"
                }`}
              >
                {link.icon}
              </span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden border-t border-white/10 p-4 md:block">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-xl shadow-black/20">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-sm font-black text-slate-950">
              A
            </div>
            <div>
              <p className="text-sm font-bold text-white">Admin User</p>
              <p className="text-xs font-medium text-slate-400">Fleet Manager</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
            98% fleet availability
          </div>
        </div>
      </div>
    </aside>
  );
}
