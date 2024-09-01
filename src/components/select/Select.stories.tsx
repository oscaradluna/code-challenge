// src\components\select\Select.stories.tsx

import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Lista de opciones que se mostrarán.'
    },
    value: {
      control: 'text',
      description: 'Valor de la opción seleccionada.'
    },
    onChange: {
      description: 'Función que se ejecutará al cambiar de opción.'
    }
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
  options: [
    {
      value: 'name',
      label: 'Nombre'
    },
    {
      value: 'email',
      label: 'Correo'
    },
    {
      value: 'state',
      label: 'Estado'
    },
    {
      value: 'order_number',
      label: 'No. pedido'
    },
    {
      value: 'status',
      label: 'Estatus'
    }
  ],
  value: 'name'
};