// src\interfaces\TableProps.tsx

export interface TableSortProps {
    value: string,
    orderAsc: boolean
}

export interface TableStatusColorProps {
    [key: string]: 'success' | 'warning' | 'danger'
}

export interface TableStatusPriorityProps {
    [key: string]: number
}

export interface TableColumnProps {
    name: string,
    value: string,
    sortType?: 'alphabet' | 'status',
    statusColor?: TableStatusColorProps,
    statusPriority?: TableStatusPriorityProps
}

export interface TableDataProps {
    [key: string]: any
}