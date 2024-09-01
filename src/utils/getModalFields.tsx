// src\utils\getModalFields.js

import { TableDataProps } from "../interfaces/TableProps";

export function getModalFields(row: TableDataProps): Array<{
    name: string,
    value: string
}> {
    return [
        {
            name: 'Nombre',
            value: row.name
        },
        {
            name: 'Correo',
            value: row.email
        },
        {
            name: 'Estado',
            value: row.state
        },
        {
            name: 'No. de pedido',
            value: row.order_number
        },
        {
            name: 'Estatus',
            value: row.status
        }
    ];
}