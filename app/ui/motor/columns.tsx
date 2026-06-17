import type { ColumnDef } from "@tanstack/react-table";
import type { Motor } from "@/app/lib/definitions";

const statusStyles: Record<string, string> = {
  available: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  rented: "bg-blue-50 text-blue-700 ring-blue-200",
  maintenance: "bg-amber-50 text-amber-700 ring-amber-200",
  inactive: "bg-slate-100 text-slate-600 ring-slate-200",
};

function formatStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
}

export const columns: ColumnDef<Motor>[] = [
  {
    accessorKey: "name",
    header: "Motor Name",
    cell: ({ row }) => (
      <div>
        <p className="font-black text-slate-950">{row.original.name}</p>
        <p className="mt-1 text-sm font-medium text-slate-500 lg:hidden">
          {row.original.plate}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => (
      <p className="text-sm font-bold text-slate-600">{getValue<string>()}</p>
    ),
  },
  {
    accessorKey: "plate",
    header: "Plate Number",
    cell: ({ getValue }) => (
      <p className="hidden text-sm font-bold text-slate-600 lg:block">
        {getValue<string>()}
      </p>
    ),
  },
  
  {
    accessorKey: "dailyRate",
    header: "Daily Price",
    cell: ({ getValue }) => (
      <p className="text-sm font-black text-slate-950  text-center">THB{getValue<number>()}/day</p>
    ),
  },
  {
    accessorKey: "weeklyRate",
    header: "Weekly Price",
    cell: ({ getValue }) => (
      <p className="text-sm font-black text-slate-950 text-center">THB{getValue<number>()}/week</p>
    ),
  },
  {
    accessorKey: "monthlyRate",
    header: "Monthly Price",
    cell: ({ getValue }) => (
      <p className="text-sm font-black text-slate-950 text-center">THB{getValue<number>()}/month</p>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>().toLowerCase();

      return (
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-black ring-1 ${statusStyles[status] ?? statusStyles.inactive}`}
        >
          {formatStatus(status)}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: () => <span className="block text-right">Actions</span>,
    cell: () => (
      <div className="flex gap-2 lg:justify-end">
        <button className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-100">
          Edit
        </button>
        <button className="rounded-full bg-slate-950 px-3 py-2 text-xs font-black text-white shadow-sm transition-colors hover:bg-slate-800">
          View
        </button>
      </div>
    ),
  },
];
