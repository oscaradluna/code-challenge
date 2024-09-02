// src\App.tsx

import { useState } from 'react';

import { Logo } from './assets/logo';
import { Avatar } from './components/avatar/Avatar';
import { Input } from './components/input/Input';
import { Select } from './components/select/Select';
import { Button } from './components/button/Button';
import { Table } from './components/table/Table';
import { Modal } from './components/modal/Modal';

import { SelectOptionsProps } from './interfaces/SelectProps';
import { TableDataProps, TableColumnProps } from "./interfaces/TableProps";
import { ModalFieldsProps } from './interfaces/ModalProps';

import { getModalFields } from './utils/getModalFields';
import './index.css';

import data from './data/clients.json';

type FieldType = "id" | "name" | "email" | "state" | "order_number" | "status";

const columns: TableColumnProps[] = [
  {
    name: "Nombre",
    value: "name",
    sortType: "alphabet"
  },
  {
    name: "Correo",
    value: "email"
  },
  {
    name: "Estado",
    value: "state"
  },
  {
    name: "No. de pedido",
    value: "order_number"
  },
  {
    name: "Estatus",
    value: "status",
    sortType: "status",
    statusColor: {
      "Pendiente": "warning",
      "Enviado": "success",
      "Cancelado": "danger"
    },
    statusPriority: {
      "Pendiente": 1,
      "Enviado": 2,
      "Cancelado": 3
    }
  }
];

const searchColumns: SelectOptionsProps[] = [
  {
    value: "name",
    label: "Nombre"
  },
  {
    value: "email",
    label: "Correo"
  },
  {
    value: "state",
    label: "Estado"
  },
  {
    value: "order_number",
    label: "No. pedido"
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState<FieldType>('name');

  const [filteredData, setFilteredData] = useState<TableDataProps[]>(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFields, setModalFields] = useState<ModalFieldsProps[]>([]);

  const search = () => {
    const filtered = data.filter((item) => {
      return item[selectedField]?.toString()
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    });

    setFilteredData(filtered);
  };

  const isValidFieldType = (value: string): value is FieldType => {
    const fieldTypeValues = ["id", "name", "email", "state", "order_number", "status"];

    return fieldTypeValues.includes(value);
  }

  const handleSelectedField = (field: string) => {
    if (isValidFieldType(field)) {
      setSelectedField(field);
    }
  }

  const handleView = (id: number) => {
    const row = filteredData.find(item => item.id === id);

    if (row) {
      setModalFields(getModalFields(row));
      setIsModalOpen(true);
    }
  }

  const handleDelete = (id: number) => {
    const newFilteredData = filteredData.filter(item => item.id !== id);

    setFilteredData(newFilteredData);
  }
  
  const searchPlaceholder = searchColumns
    .find(column => column.value === selectedField)
    ?.label;

  return (
    <div className="app">
      <div className="app__navbar">
          <Logo
            pathClassName="fill-primary"
          />

          <Avatar />
      </div>

      <div className='app__header'>
        <span
          className='app__header-title'
        >Clientes</span>

        <div className="app__header-filters">
          <Input
            id="search"
            label="Búsqueda"
            placeholder={searchPlaceholder}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Select
            options={searchColumns}
            value={selectedField}
            onChange={(field) => handleSelectedField(field)}
          />

          <Button
            primary
            label="Buscar"
            onClick={() => search()}
          />
        </div>
      </div>
      
      <Table
        columns={columns}
        data={filteredData}
        perPage={10}
        onView={(id) => handleView(id)}
        onDelete={(id) => handleDelete(id)}
      />
      
      {isModalOpen && (
        <Modal
          title="Detalles de la orden"
          fields={modalFields}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;