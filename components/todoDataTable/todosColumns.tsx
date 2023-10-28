"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "../ui/checkbox";
import { DataTableColumnHeader } from "../ui/data-table-column-header";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const todosColumns: ColumnDef<TodoType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Titre" />
    ),
  },
  {
    accessorKey: "completed",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Complete" />
    ),
  },
  {
    accessorKey: "userId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id utilisateur" />
    ),
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => {
      const city = row.original;
      return <div>...</div>;
    },
  },
];
