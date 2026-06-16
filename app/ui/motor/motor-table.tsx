"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { Motor } from "@/app/lib/definitions";
import { columns } from "./columns";

type MotorTableProps = {
  data: Motor[];
};

export function MotorTable({ data }: MotorTableProps) {
  // eslint-disable-next-line react-hooks/incompatible-library -- TanStack Table is the table state manager for this component.
  const table = useReactTable({ 
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(data);

  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {table.getHeaderGroups().map((headerGroup) => (
        <div
          key={headerGroup.id}
          className="hidden grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.7fr_0.6fr] bg-slate-50 px-5 py-4 text-xs font-black uppercase tracking-wide text-slate-500 lg:grid"
        >
          {headerGroup.headers.map((header) => (
            <div key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.header, header.getContext())}
            </div>
          ))}
        </div>
      ))}

      {table.getRowModel().rows.length ? (
        table.getRowModel().rows.map((row) => (
          <div
            key={row.id}
            className="grid gap-4 border-t border-slate-100 px-5 py-5 transition-colors first:border-t-0 hover:bg-slate-50 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.7fr_0.6fr] lg:items-center"
          >
            {row.getVisibleCells().map((cell) => (
              <div key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="px-5 py-10 text-center">
          <p className="text-sm font-black text-slate-950">No motors found</p>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Add a motor to start managing your fleet.
          </p>
        </div>
      )}
    </div>
  );
}
