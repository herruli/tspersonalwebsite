import { get } from "https";
import { useState, useEffect, useMemo } from "react";
import { useTable, Column } from "react-table";


export const BasicTable = () => {
  const COLUMNS: Column<{ id: string; current_price: number;market_cap:number; }>[] = useMemo(
    () => 
    [{
      Header: "Name",
      accessor: "id"
    },
    {
      Header: "Current Price",
      accessor: "current_price"
    },
    {
      Header: "Market Cap",
      accessor: "market_cap"
    }
  ]
  ,[]
  )
  const [items, setItems] = useState <any[]>([]);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [items]);

  const tableInstance = useTable({
    columns: COLUMNS,
    data: items,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div id='table'>
      
      <table {...getTableBodyProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
