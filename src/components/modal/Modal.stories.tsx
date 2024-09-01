// src\components\modal\Modal.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título del modal.'
    },
    fields: {
      control: 'object',
      description: 'Lista de campos que se mostrarán.'
    },
    onClose: {
      description: 'Función que se ejecutará al cerrar el modal.'
    }
  },
  args: {
   onClose: () => {}
  }
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Detalles de la orden',
  fields: [
    {
      name: 'Nombre',
      value: 'Kappa Services'
    },
    {
      name: 'Correo',
      value: 'contacto@thetaenterprises.com'
    },
    {
      name: 'Estado',
      value: 'Hidalgo'
    },
    {
      name: 'No. de pedido',
      value: 'WV-70037785-01'
    },
    {
      name: 'Estatus',
      value: 'Enviado'
    }
  ]
};