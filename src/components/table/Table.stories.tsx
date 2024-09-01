// src\components\table\Table.stories.tsx

import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Table } from './Table';
import { Modal } from '../modal/Modal';

import { TableColumnProps, TableDataProps } from "../../interfaces/TableProps";
import { SelectOptionsProps } from '../../interfaces/SelectProps';
import { ModalFieldsProps } from '../../interfaces/ModalProps';

import { getModalFields } from '../../utils/getModalFields';
import data from '../../data/clients.json';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título de la tabla.'
    },
    columns: {
      control: 'object',
      description: 'Columnas que se visualizarán.'
    },
    searchColumns: {
      control: 'object',
      description: 'Columnas que se podrán buscar.'
    },
    data: {
      control: 'object',
      description: 'Información que se gestionará.'
    },
    perPage: {
      control: 'number',
      description: 'Número de registros que se mostraran por página.'
    },
    onView: {
      description: 'Función que se ejecutará al seleccionar la opción de visuar'
    },
    onDelete: {
      description: 'Función que se ejecutará al seleccionar la opción de eliminar'
    }
  },
  args: {
    onView: () => {},
    onDelete: () => {}
  }
} as Meta<typeof Table>;

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

const Template: StoryFn<typeof Table> = (args) => {
  const [rows, setRows] = useState<TableDataProps[]>(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFields, setModalFields] = useState<ModalFieldsProps[]>([]);

  const handleView = (id: number) => {
    const row = rows.find(item => item.id === id);

    if (row) {
      setModalFields(getModalFields(row));
      setIsModalOpen(true);
    }
  }

  const handleDelete = (id: number) => {
    const newRows = rows.filter(row => row.id !== id);

    setRows(newRows);
  }

  return (
    <>
      <Table
        {...args}
        data={rows}
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
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Clientes",
  columns: columns,
  searchColumns: searchColumns,
  data: data,
  perPage: 10
};