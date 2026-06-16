const moters = [
  {
    name: "Yamaha NMAX 155",
    type: "Scooter",
    plate: "YGN-2841",
    status: "Available",
    price: "$24/day",
  },
  {
    name: "Honda PCX 160",
    type: "Scooter",
    plate: "MDY-6128",
    status: "Rented",
    price: "$23/day",
  },
  {
    name: "Vespa Sprint 150",
    type: "Classic",
    plate: "YGN-9054",
    status: "Maintenance",
    price: "$28/day",
  },
  {
    name: "Honda Click 125i",
    type: "Scooter",
    plate: "NPT-4472",
    status: "Available",
    price: "$18/day",
  },
  {
    name: "Yamaha Aerox 155",
    type: "Sport",
    plate: "YGN-7390",
    status: "Rented",
    price: "$25/day",
  },
];

const statusStyles: Record<string, string> = {
  Available: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Rented: "bg-blue-50 text-blue-700 ring-blue-200",
  Maintenance: "bg-amber-50 text-amber-700 ring-amber-200",
};

export default function MoterManagementPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-950/10">
              Fleet operations
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Moter Management
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Track moter availability, pricing, service status, and rental readiness in one premium workspace.
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-3 text-sm font-black text-white shadow-xl shadow-blue-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-blue-500/35">
            Add Moter
          </button>
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

        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="hidden grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.7fr_0.6fr] bg-slate-50 px-5 py-4 text-xs font-black uppercase tracking-wide text-slate-500 lg:grid">
            <span>Moter Name</span>
            <span>Type</span>
            <span>Plate Number</span>
            <span>Status</span>
            <span>Daily Price</span>
            <span className="text-right">Actions</span>
          </div>

          {moters.map((moter) => (
            <div
              key={moter.plate}
              className="grid gap-4 border-t border-slate-100 px-5 py-5 transition-colors first:border-t-0 hover:bg-slate-50 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.7fr_0.6fr] lg:items-center"
            >
              <div>
                <p className="font-black text-slate-950">{moter.name}</p>
                <p className="mt-1 text-sm font-medium text-slate-500 lg:hidden">{moter.plate}</p>
              </div>
              <p className="text-sm font-bold text-slate-600">{moter.type}</p>
              <p className="hidden text-sm font-bold text-slate-600 lg:block">{moter.plate}</p>
              <div>
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black ring-1 ${statusStyles[moter.status]}`}>
                  {moter.status}
                </span>
              </div>
              <p className="text-sm font-black text-slate-950">{moter.price}</p>
              <div className="flex gap-2 lg:justify-end">
                <button className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-100">
                  Edit
                </button>
                <button className="rounded-full bg-slate-950 px-3 py-2 text-xs font-black text-white shadow-sm transition-colors hover:bg-slate-800">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
