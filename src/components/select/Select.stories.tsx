// src\components\select\Select.stories.tsx

import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Select } from './Select';

import { SelectOptionsProps } from "../../interfaces/SelectProps";

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

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fields: {
      control: 'object',
      description: 'Lista de campos que se mostrarán.'
    },
    value: {
      control: 'text',
      description: 'Valor de la opción seleccionada.'
    },
    onChange: {
      description: 'Función que se ejecutará al cambiar de opción.'
    }
  },
  args: {
    onChange: () => {}
  }
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Select
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  )
};

export const Default = Template.bind({});
Default.args = {
  options: searchColumns,
  value: searchColumns[0].value
};