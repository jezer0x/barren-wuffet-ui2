import React from "react";

// import { Trans, t } from "@lingui/macro";

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  Row,
  ColumnDef,
} from "@tanstack/react-table";

import { formatAmount, formatDate, USD_DECIMALS } from "../../data/formatting";
import Table from "../Table/Table";
import useSWR from "swr";
import { Fund, FundStatus } from "../../api/models";
import { api } from "../../config/env";

const columnHelper = createColumnHelper<Fund>();

const columns: ColumnDef<Fund, any>[] = [
  columnHelper.accessor((row) => row.id, {
    header: `Name`,
  }),
  columnHelper.accessor("creation_timestamp", {
    header: `Start Date`,
    cell: (info) => formatDate(info.getValue()),
  }),
  columnHelper.accessor("close_timestamp", {
    header: `Maturity Date`,
    cell: (info) => formatDate(info.getValue()),
  }),
  columnHelper.accessor("change_percent", {
    header: `Change %`,
    cell: (info) =>
      info.getValue() ? (
        `${Math.round(info.getValue() * 10000) / 100}%`
      ) : (
        <span>&#8212;</span>
      ),
  }),
  columnHelper.accessor("amount_raised", {
    header: `Amount Raised`,
    cell: (info) => formatAmount(info.getValue(), USD_DECIMALS, 2, true, "0.0"),
  }),
  columnHelper.accessor("investor_count", {
    header: `Investors`,
  }),
  columnHelper.accessor("deploy_timestamp", {
    header: `Fund Raising End Date`,
    cell: (info) => formatDate(info.getValue()),
  }),
  columnHelper.accessor("admin_fee", {
    header: `Admin Fee`,
  }),
  columnHelper.accessor("status", {
    header: `Status`,
    cell: (info) => FundStatus[info.getValue()],
  }),
  columnHelper.accessor("manager", {
    header: `Manager`,
    cell: (info) => FundStatus[info.getValue()],
  }),
  {
    id: "action",
    header: `Action`,
    cell: ({ row }: { row: Row<Fund> }) => {
      const status = row.getValue("status");
      if (status === FundStatus.RAISING) {
        return (
          <button
            onClick={() => investInFund(row.getValue("id"))}
            disabled={false}
          >
            INVEST
            {/* <Trans></Trans> */}
          </button>
        );
      } else if (
        status === FundStatus.CLOSED ||
        status === FundStatus.CLOSABLE
      ) {
        return <></>;
      } else if (status === FundStatus.DEPLOYED) {
        return (
          <div>
            See Investment
            {/* <Trans>See Investment</Trans> */}
          </div>
        );
      }
    },
  },
];

function investInFund(fundId: string): void {
  throw new Error("Function not implemented.");
}

export default function FundsList() {
  const { data, error } = useSWR("/api/funds", api.getFunds);

  const table = useReactTable<Fund>({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <Table table={table} error={error} />
    </div>
  );
}
