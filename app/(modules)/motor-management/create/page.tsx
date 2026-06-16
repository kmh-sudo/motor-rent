import Link from "next/link";

const statusOptions = ["available", "rented", "maintenance", "inactive"];

export default function CreateMoterPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700 ring-1 ring-indigo-100">
              Fleet operations
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Create New Bike
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Add bike details, rental rates, current status, and one display image for the fleet catalog.
            </p>
          </div>
          <Link
            href="/motor-management"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            Back to Motors
          </Link>
        </div>
      </section>

      <form className="rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-xl shadow-slate-200/70 sm:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-black text-slate-700">Name</span>
            <input
              name="name"
              type="text"
              placeholder="Yamaha NMAX 155"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition-colors placeholder:text-slate-400 hover:bg-white focus:border-indigo-300 focus:bg-white"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-black text-slate-700">Brand</span>
            <input
              name="brand"
              type="text"
              placeholder="Yamaha"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition-colors placeholder:text-slate-400 hover:bg-white focus:border-indigo-300 focus:bg-white"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-black text-slate-700">Plate</span>
            <input
              name="plate"
              type="text"
              placeholder="YGN-2841"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition-colors placeholder:text-slate-400 hover:bg-white focus:border-indigo-300 focus:bg-white"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-black text-slate-700">Type</span>
            <input
              name="type"
              type="text"
              placeholder="Scooter"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition-colors placeholder:text-slate-400 hover:bg-white focus:border-indigo-300 focus:bg-white"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-black text-slate-700">Monthly Rate</span>
            <input
              name="monthlyRate"
              type="number"
              min="0"
              placeholder="450"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition-colors placeholder:text-slate-400 hover:bg-white focus:border-indigo-300 focus:bg-white"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-black text-slate-700">Daily Rate</span>
            <input
              name="dailyRate"
              type="number"
              min="0"
              placeholder="24"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition-colors placeholder:text-slate-400 hover:bg-white focus:border-indigo-300 focus:bg-white"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-black text-slate-700">Weekly Rate</span>
            <input
              name="weeklyRate"
              type="number"
              min="0"
              placeholder="150"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition-colors placeholder:text-slate-400 hover:bg-white focus:border-indigo-300 focus:bg-white"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-black text-slate-700">Status</span>
            <select
              name="status"
              defaultValue="available"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 outline-none transition-colors hover:bg-white focus:border-indigo-300 focus:bg-white"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-black text-slate-700">Description</span>
            <textarea
              name="description"
              rows={5}
              placeholder="Describe the bike, condition, and rental notes."
              className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition-colors placeholder:text-slate-400 hover:bg-white focus:border-indigo-300 focus:bg-white"
            />
          </label>

          <label className="md:col-span-2">
            <span className="text-sm font-black text-slate-700">Image</span>
            <div className="mt-2 flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center transition-colors hover:bg-white">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-2xl shadow-sm ring-1 ring-slate-200">
                🏍️
              </span>
              <p className="mt-4 text-sm font-black text-slate-950">Upload one bike image</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">PNG, JPG, or WEBP image file</p>
              <input
                name="image"
                type="file"
                accept="image/*"
                className="mt-5 w-full max-w-sm rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm file:mr-4 file:rounded-full file:border-0 file:bg-slate-950 file:px-4 file:py-2 file:text-sm file:font-black file:text-white"
              />
            </div>
          </label>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Link
            href="/motor-management"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-3 text-sm font-black text-white shadow-xl shadow-blue-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-blue-500/35"
          >
            Create Bike
          </button>
        </div>
      </form>
    </div>
  );
}
