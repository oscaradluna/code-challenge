// src\components\table\Table.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import { Table } from './Table';
import { TableColumnProps } from "../../interfaces/TableProps";

import data from '../../data/clients.json';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'object',
      description: 'Columnas que se visualizarán.'
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

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: columns,
  data: data,
  perPage: 10
};