// src\components\table\Table.tsx

import { useState, useEffect } from "react";

import { Input } from "../input/Input";
import { Select } from "../select/Select";
import { Button } from "../button/Button";
import { Badge } from "../badge/Badge";
import { Icon } from "../icon/Icon";
import { Pagination } from "../pagination/Pagination";

import { SelectOptionsProps } from "../../interfaces/SelectProps";
import {
  TableSortProps,
  TableColumnProps,
  TableDataProps
} from "../../interfaces/TableProps";

type TableProps = {
  /**
   * Título de la tabla
   */
  title: string,

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
   * Columnas que se podrán buscar
   * 
   * @param [].value Valor de la opción
   * @param [].label Texto de la opción
   */
  searchColumns: SelectOptionsProps[],

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
  title,
  columns,
  searchColumns,
  data,
  perPage,
  onView,
  onDelete
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('name');
  const [sortedColumns, setSortedColumns] = useState<TableSortProps[]>([]);

  const [filteredData, setFilteredData] = useState<TableDataProps[]>(data);
  const [rows, setRows] = useState<TableDataProps[]>(data);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
    search();
  }, [data]);

  useEffect(() => {
    paginate();
  }, [filteredData, perPage, currentPage]);

  const sort = (column: TableColumnProps) => {
    const sortedColumn = sortedColumns.find(item => item.value === column.value);

    if (sortedColumn) {
      const sorted = filteredData.sort((a, b) => {
        if (column.sortType === 'alphabet') {
          const fieldA = a[column.value]?.toString().toLocaleLowerCase();
          const fieldB = b[column.value]?.toString().toLocaleLowerCase();

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

  const search = () => {
    const filtered = data.filter((row) => {
      return row[selectedField]?.toString()
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    });

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const paginate = () => {
    const lastItemIndex = currentPage * perPage;
    const firstItemIndex = lastItemIndex - perPage;

    setRows(filteredData.slice(firstItemIndex, lastItemIndex));
    setTotalPages(Math.ceil(filteredData.length / perPage));
  }

  const selectedColumn = searchColumns.find(column => column.value === selectedField);

  return (
    <div>
      <div>
        <span
        >{title}</span>

        <div>
          <Input
            id="search"
            label="Búsqueda"
            placeholder={selectedColumn?.label}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Select
            options={searchColumns}
            value={selectedField}
            onChange={(field) => setSelectedField(field)}
          />

          <Button
            primary
            label="Buscar"
            onClick={() => search()}
          />
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            {
              columns.map((column) => (
                <th
                  key={column.value}
                >
                  <span
                    
                  >{column.name}</span>

                  {column.sortType === "alphabet" && (
                    <div
                      onClick={() => sort(column)}
                    >
                      <Icon
                        type="caretUpDown"
                        pathClassName="fill-active"
                      />
                    </div>
                  )}

                  {column.sortType === "status" && (
                    <div
                      onClick={() => sort(column)}
                    >
                      <Icon
                        type="funnel"
                        pathClassName="fill-active"
                      />
                    </div>
                  )}
                </th>
              ))
            }

            <th

            >Acciones</th>
          </tr>
        </thead>

        <tbody>
          {
            rows.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => {
                  const statusColor = column.statusColor
                    ? column.statusColor[row[column.value]]
                    : "success";

                  return (
                    <td
                      key={column.value}
                    >{
                      column.value === 'status' ? (
                        <Badge
                          status={statusColor}
                          label={row[column.value]}
                        />
                      ) : (
                        row[column.value]
                      )
                    }</td>
                  );
                })}

                <td>
                  <div
                    className="group"
                    onClick={() => onView(row.id)}
                  >
                    <Icon
                      type="eye"
                      pathClassName="stroke-active"
                    />
                  </div>

                  <div
                    className="group"
                    onClick={() => onDelete(row.id)}
                  >
                    <Icon
                      type="trash"
                      pathClassName="stroke-active"
                    />
                  </div>
                </td>  
              </tr>
            ))
          }
        </tbody>
      </table>

      {totalPages > 0 && (
        <Pagination
          pages={totalPages}
          page={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};