"use client";

import { BiPlusCircle } from "react-icons/bi";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/ui/data-table-view-options";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DataTableFacetedFilter } from "../ui/data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  // const isFiltered = table.getState().columnFilters.length > 0;
  // for (let i = 0; i < table.getAllColumns().length; i++) {
  //   console.log(`id no ° ${i}`, table.getAllColumns()[i]);
  // }

  return (
    <section className="bg-white p-[25px] h-[155px] rounded-md">
      <header className="flex justify-between mb-[30px]">
        <p>Recherche d’influenceurs</p>
        <Button className="bg-[#15A36E]">Rechercher</Button>
      </header>
      <div className="flex items-center justify-between ">
        <div className="flex flex-1 items-center justify-between space-x-2">
          <Input
            placeholder="Filtrer par titre..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="h-10 w-[150px] lg:w-[250px]"
          />

          {/* {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <BiPlusCircle className="ml-2 h-4 w-4" />
            </Button>
          )} */}

          <Select>
            <SelectTrigger className="w-fit color-[#A6A6A6]">
              <SelectValue
                className="color-[#A6A6A6]"
                placeholder="Nombre de followers"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-fit color-[#A6A6A6]">
              <SelectValue
                className="color-[#A6A6A6]"
                placeholder="Nombre de vue"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-fit color-[#A6A6A6]">
              <SelectValue
                className="color-[#A6A6A6]"
                placeholder="Catégorie"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-fit color-[#A6A6A6]">
              <SelectValue
                className="color-[#A6A6A6]"
                placeholder="Audience age "
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-fit color-[#A6A6A6]">
              <SelectValue
                className="color-[#A6A6A6]"
                placeholder="Note"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* <DataTableViewOptions table={table} /> */}
      </div>
    </section>
  );
}
