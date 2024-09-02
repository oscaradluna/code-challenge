// src\components\table\Table.tsx

import { useState, useEffect } from "react";

import { Badge } from "../badge/Badge";
import { Icon } from "../icon/Icon";
import { Pagination } from "../pagination/Pagination";

import {
  TableSortProps,
  TableColumnProps,
  TableDataProps
} from "../../interfaces/TableProps";

type TableProps = {
  /**
   * Columnas que se visualizarán
   * 
   * @param [].name Nombre de la columna
   * @param [].value Valor del campo del parámetro 'data' relacionado con la columna
   * @param [].sortType Ordenar la columna de manera alfabética ('alphabet') o por estatus ('status')
   * @param [].statusColor Color del estatus ('success', 'warning', 'danger')
   * @param [].statusPriority Prioridad que tendrá cada estatus para su ordenamiento
   */
  columns: TableColumnProps[],

  /**
   * Información que gestionará
   */
  data: TableDataProps[],

  /**
   * Número de registros que se mostraran por página
   */
  perPage: number,

  /**
   * Función que se ejecutará al seleccionar la opción de visuar
   * 
   * @param id Id del registro que se visualizará
   */
  onView: (id: number) => void,

  /**
   * Función que se ejecutará al seleccionar la opción de eliminar
   * 
   * @param id Id del registro que se elimanará
   */
  onDelete: (id: number) => void
};

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  perPage,
  onView,
  onDelete
}) => {
  const [sortedColumns, setSortedColumns] = useState<TableSortProps[]>([]);
  const [filteredData, setFilteredData] = useState<TableDataProps[]>(data);
  const [rows, setRows] = useState<TableDataProps[]>(data);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setFilteredData(data);
  }, [data])

  useEffect(() => {
    const newSortedColumns: TableSortProps[] = [];

    columns.forEach((column) => {
      if (column.sortType) {
        newSortedColumns.push({
          value: column.value,
          orderAsc: true
        });
      }
    });

    setSortedColumns(newSortedColumns);
  }, [columns]);

  useEffect(() => {
    paginate();
  }, [filteredData, perPage, currentPage]);

  const sort = (column: TableColumnProps) => {
    const sortedColumn = sortedColumns.find(item => item.value === column.value);

    if (sortedColumn) {
      const sorted = filteredData.sort((a, b) => {
        if (column.sortType === 'alphabet') {
          const fieldA = a[column.value]?.toString().toLowerCase();
          const fieldB = b[column.value]?.toString().toLowerCase();

          if (fieldA < fieldB) {
            return sortedColumn.orderAsc ? -1 : 1;
          }
  
          if (fieldA > fieldB) {
            return sortedColumn.orderAsc ? 1: -1;
          }
        }
  
        if (column.sortType === 'status' && column.statusPriority) {
          const priorityA = column.statusPriority[a[column.value]];
          const priorityB = column.statusPriority[b[column.value]];
  
          return sortedColumn.orderAsc
            ? priorityA - priorityB
            : priorityB - priorityA;
        }
  
        return 0;
      });

      const newSortedColumns = sortedColumns.map((item) => {
        return item.value === column.value
          ? {
            ...item,
            orderAsc: !item.orderAsc
          }
          : item;
      });

      setFilteredData(sorted);
      setSortedColumns(newSortedColumns);
      setCurrentPage(1);

      paginate();
    }
  };

  const paginate = () => {
    const lastItemIndex = currentPage * perPage;
    const firstItemIndex = lastItemIndex - perPage;

    setRows(filteredData.slice(firstItemIndex, lastItemIndex));
    setTotalPages(Math.ceil(filteredData.length / perPage));
  }

  return (
    <div className="table">
      <table>
        <thead className="bg-grey gap-6">
          <tr>
            {columns.map((column) => (
              <th
                key={column.value}
                className="table__head"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="table__head-label"
                  >{column.name}</span>
  
                  {column.sortType === "alphabet" && (
                    <div
                      className="group cursor-pointer"
                      onClick={() => sort(column)}
                    >
                      <Icon
                        type="caretUpDown"
                        pathClassName="table__head-icon"
                      />
                    </div>
                  )}
  
                  {column.sortType === "status" && (
                    <div
                      className="group cursor-pointer"
                      onClick={() => sort(column)}
                    >
                      <Icon
                        type="funnel"
                        pathClassName="table__head-icon"
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}

            <th
              key="actions"
              className="table__head"
            >
              <span
                className="table__head-label"
              >Acciones</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {
            rows.map((row, index) => (
              <tr
                key={index}
                className="table__row"
              >
                {columns.map((column) => {
                  const statusColor = column.statusColor
                    ? column.statusColor[row[column.value]]
                    : "success";

                  return (
                    <td
                      key={column.value}
                      className="table__data"
                    >{
                      column.value === 'status' ? (
                        <Badge
                          status={statusColor}
                          label={row[column.value]}
                        />
                      ) : (
                        <span
                          className="table__data-label"
                        >{row[column.value]}</span>
                      )
                    }</td>
                  );
                })}

                <td
                  key="actions"
                  className="table__data"
                >
                  <div className="flex items-center justify-center">
                    <div
                      className="group cursor-pointer mr-2.5"
                      onClick={() => onView(row.id)}
                    >
                      <Icon
                        type="eye"
                        pathClassName="table__data-icon"
                      />
                    </div>

                    <div
                      className="group cursor-pointer"
                      onClick={() => onDelete(row.id)}
                    >
                      <Icon
                        type="trash"
                        pathClassName="table__data-icon"
                      />
                    </div>
                  </div>
                </td>  
              </tr>
            ))
          }
        </tbody>
      </table>

      <div className="table__pagination">
        {totalPages > 0 && (
          <Pagination
            pages={totalPages}
            page={currentPage}
            onChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  );
};