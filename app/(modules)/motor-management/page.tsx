'use client';

import Link from "next/link";
import {  MotorTable } from "@/app/ui/motor/motor-table";
import type { Motor } from "@/app/lib/definitions";
import { useMotors } from "@/app/lib/hooks";

const moters: Motor[] = [
  {
    name: "Yamaha NMAX 155",
    type: "Scooter",
    brand: "Yamaha",
    plate: "YGN-2841",
    status: "available",
    monthlyRate: 450,
    dailyRate: 24,
    weeklyRate: 150,
    description: "A stylish and comfortable scooter perfect for city rides, featuring a powerful 155cc engine and modern design.",
    image: { url: "", public_id: "" },
  },
  {
    name: "Honda PCX 160",
    type: "Scooter",
    brand: "Honda",
    plate: "MDY-6128",
    status: "rented",
    monthlyRate: 430,
    dailyRate: 23,
    weeklyRate: 145,
    description: "A reliable and fuel-efficient scooter ideal for daily commuting, with a smooth ride and easy handling.",
    image: { url: "", public_id: "" },
  },
  {
    name: "Vespa Sprint 150",
    type: "Classic",
    brand: "Vespa",
    plate: "YGN-9054",
    status: "maintenance",
    monthlyRate: 520,
    dailyRate: 28,
    weeklyRate: 180,
    description: "A timeless classic scooter with a vintage design, offering a comfortable ride and a touch of Italian flair.",
    image: { url: "", public_id: "" },
  },
  {
    name: "Honda Click 125i",
    type: "Scooter",
    brand: "Honda",
    plate: "NPT-4472",
    status: "available",
    monthlyRate: 350,
    dailyRate: 18,
    weeklyRate: 115,
    description: "A compact and agile scooter perfect for navigating through traffic, featuring a fuel-injected 125cc engine.",
    image: { url: "", public_id: "" },
  },
  {
    name: "Yamaha Aerox 155",
    type: "Sport",
    brand: "Yamaha",
    plate: "YGN-7390",
    status: "rented",
    monthlyRate: 470,
    dailyRate: 25,
    weeklyRate: 160,
    description: "A sporty and dynamic scooter designed for performance, with a powerful 155cc engine and aggressive styling.",
    image: { url: "", public_id: "" },
  },
];

export default function MotorManagementPage() {
 const { data: motors, isLoading, error } = useMotors();
 console.log(motors, isLoading, error, "bikes");
 if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error loading motors</div>;
}

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-950/10">
              Fleet operations
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Motor Management
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Track motor availability, pricing, service status, and rental readiness in one premium workspace.
            </p>
          </div>
          <Link href="/motor-management/create">
            <button className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-3 text-sm font-black text-white shadow-xl shadow-blue-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-blue-500/35">
              Add Motor
            </button>
          </Link>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-xl shadow-slate-200/70 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_180px_180px]">
          <label className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-inner shadow-white transition-colors focus-within:border-indigo-300 focus-within:bg-white">
            <span className="text-sm font-black text-slate-400">Search</span>
            <input
              className="w-full bg-transparent text-sm font-semibold text-slate-950 outline-none placeholder:text-slate-400"
              placeholder="Search moter name or plate number"
            />
          </label>
          <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 outline-none transition-colors hover:bg-white focus:border-indigo-300">
            <option>All Types</option>
            <option>Scooter</option>
            <option>Sport</option>
            <option>Classic</option>
          </select>
          <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 outline-none transition-colors hover:bg-white focus:border-indigo-300">
            <option>All Status</option>
            <option>Available</option>
            <option>Rented</option>
            <option>Maintenance</option>
          </select>
        </div>

        <MotorTable data={motors} />
      </section>
    </div>
  );
}
