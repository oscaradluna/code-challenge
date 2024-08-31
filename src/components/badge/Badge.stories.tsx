// src\components\badge\Badge.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto a mostrar.'
    },
    status: {
      control: 'select',
      options: ['success', 'warning', 'danger'],
      description: 'Color de fondo (`success`, `warning` o `danger`).'
    },
  },
  args: {
    label: 'Enviado',
    status: 'success'
  }
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Success = Template.bind({});
Success.args = {
  label: 'Enviado',
  status: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Pendiente',
  status: 'warning'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Cancelado',
  status: 'danger'
};