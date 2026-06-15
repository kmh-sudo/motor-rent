const stats = [
  { label: "Total Moters", value: "128", detail: "+12 this month" },
  { label: "Active Rentals", value: "46", detail: "82% utilization" },
  { label: "Revenue", value: "$18.4k", detail: "+18.2% growth" },
  { label: "Maintenance", value: "9", detail: "3 due today" },
];

const activities = [
  { title: "Yamaha Aerox returned", time: "12 minutes ago", status: "Completed" },
  { title: "Honda Click booked for 3 days", time: "42 minutes ago", status: "New rental" },
  { title: "Vespa Sprint sent to maintenance", time: "2 hours ago", status: "Service" },
];

const rentals = [
  { customer: "May Hnin", moter: "Yamaha NMAX", period: "Jun 15 - Jun 18", amount: "$72" },
  { customer: "Kyaw Min", moter: "Honda PCX", period: "Jun 14 - Jun 20", amount: "$138" },
  { customer: "Aung Ko", moter: "Vespa LX", period: "Jun 13 - Jun 16", amount: "$84" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700 ring-1 ring-indigo-100">
              Premium fleet overview
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Manage rentals, revenue, availability, and service activity from one polished control center.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-xl shadow-slate-950/20">
            <p className="text-sm font-medium text-slate-400">Today&apos;s bookings</p>
            <p className="mt-2 text-3xl font-black">24</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-xl shadow-slate-200/60 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">{stat.label}</p>
            <p className="mt-4 text-4xl font-black tracking-tight text-slate-950">{stat.value}</p>
            <p className="mt-3 text-sm font-semibold text-emerald-600">{stat.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-xl shadow-slate-200/70">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-950">Recent rentals</h2>
              <p className="mt-1 text-sm font-medium text-slate-500">Latest customer activity</p>
            </div>
            <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition-colors hover:bg-slate-800">
              View all
            </button>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid grid-cols-4 bg-slate-50 px-5 py-4 text-xs font-black uppercase tracking-wide text-slate-500">
              <span>Customer</span>
              <span>Moter</span>
              <span>Period</span>
              <span className="text-right">Amount</span>
            </div>
            {rentals.map((rental) => (
              <div
                key={`${rental.customer}-${rental.moter}`}
                className="grid grid-cols-4 items-center border-t border-slate-100 px-5 py-4 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                <span className="text-slate-950">{rental.customer}</span>
                <span>{rental.moter}</span>
                <span>{rental.period}</span>
                <span className="text-right font-black text-slate-950">{rental.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-xl shadow-slate-200/70">
          <h2 className="text-xl font-black text-slate-950">Recent activity</h2>
          <div className="mt-6 space-y-4">
            {activities.map((activity) => (
              <div key={activity.title} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-950">{activity.title}</p>
                    <p className="mt-1 text-sm font-medium text-slate-500">{activity.time}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-indigo-700 ring-1 ring-indigo-100">
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-white p-6 text-center">
            <p className="text-sm font-black uppercase tracking-wide text-slate-400">Empty state preview</p>
            <p className="mt-2 text-lg font-black text-slate-950">No overdue returns</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">Everything is running smoothly across the fleet today.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
